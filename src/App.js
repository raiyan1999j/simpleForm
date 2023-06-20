import { Fragment, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import InputFeild from './FrontEnd/InputFeild'
import DataTable from './FrontEnd/DataTable'

function App(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const info ={
      docs:{}
    }
  
    const [state,setState] = useState(info);
    const [collect,setCollect] = useState({});
    const {passId} = useParams()

    const addinfo=async (value)=>{
      let copy = {...state.docs};
      copy[`${Date.now()}`] =await value;
  
      setState({...state,docs:copy});
      await sendServer(value);
    }
  
    const sendServer=async (value)=>{
      fetch(`http://localhost:5000/sendData/${passId}`,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(value)
      })
    }

    const getInfo=()=>{
      fetch(`http://localhost:5000/getData/${passId}` )
      .then((res)=>{return res.json()})
      .then((data)=>{setCollect(data)})
      .catch((error)=>{console.log(error)})
    }

    const editInfo=async (id,value,infoID)=>{
      let copy = {...collect}
      copy[id] = value;
  
      setCollect({...copy});
     await editServer(infoID,value);
    }
  
    const editServer=async (id,value)=>{
      fetch(`http://localhost:5000/editData/${id}/${passId}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(value)
      })
      .then(res=>res.json())
      .catch((error)=>{console.log(error)})
    }
  
    const removeInfo=async (idNumber)=>{
      let copy ={...collect};
  
      let keyNumber= Object.keys(copy).find((value,index)=>{
        return copy[value].id === idNumber;
      })
  
      delete copy[keyNumber];
  
      setCollect(copy);
      await removeServer(idNumber);
    }
    const removeServer=async (id)=>{
      fetch(`http://localhost:5000/removeData/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .catch((error)=>{console.log(error)})
    }
    return(
        <>
            <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <InputFeild 
          infoAdd={(value)=>{addinfo(value)}} 
          infoGet={(value)=>{getInfo(value)}}
        />
        <DataTable 
          collection={collect}
          infoEdit={(id,value,infoID)=>{editInfo(id,value,infoID)}}
          infoRemove={(value)=>{removeInfo(value)}}
        />
      </div>
        </>
    )
}
export default App;
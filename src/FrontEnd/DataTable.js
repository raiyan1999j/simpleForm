import React,{useState} from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import DataContainer from './DataContainer';

function DataTable({collection,infoEdit,infoRemove}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <>
            <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 ">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            
              
              {/* Data-table-start */}
              <div className='h-12.5 w-full py-4 border-b flex justify-center items-center'>
                <h1 className='text-3xl font-customHead font-bold'>
                    Data-Table
                </h1>
              </div>
              
              {/* Data-table-finish */}
            </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
            <div className='px-2.5 py-2.5'>
                <div className='h-full w-full rounded-lg'>
                    {/* data-info-start */}
                    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their registration,name,country,opinio,mail.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Reg Num
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Country
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    opinion
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    mail
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {Object.keys(collection).map((value,index)=>{
                        return (
                            <DataContainer 
                            docs={collection[value]} 
                            keys={index}
                            editInfo={(id,val,infoID)=>{infoEdit(id,val,infoID)}}
                            removeInfo={(value)=>{infoRemove(value)}}
                            />
                        )
                    })}
            </table>
          </div>
        </div>
      </div>
    </div>
                    {/* data-info-finish */}
                </div>
              </div>
            </div>
          </main>
        </div>
        </>
    )
}
export default DataTable;
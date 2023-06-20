import React,{useRef} from "react";

function EditFormate({docs,keys,handler,infoEdit}){
    const user = useRef();
    const country=useRef();
    const opinion=useRef();
    const gmail=useRef();

    const done=()=>{
        let group ={
            user: user.current.value,
            country: country.current.value,
            opinion: opinion.current.value,
            gmail: gmail.current.value,
            id: docs.id
        }

        infoEdit(keys,group,docs.id);

        handler(true);
    }

    return(
        <>
            <tbody className="bg-white">
                
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {docs.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input type="text" name="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={docs.user} ref={user}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input type="text" name="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={docs.country} ref={country}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input type="text" name="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={docs.opinion} ref={opinion}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <input type="text" name="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={docs.gmail} ref={gmail}/>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={done}>
                      Done<span className="sr-only"></span>
                    </a>
                  </td>
                </tr>
            </tbody>
        </>
    )
}
export default EditFormate;
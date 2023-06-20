import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function OrginalFormate({docs,keys,handler,infoRemove}){
    const edit=()=>{
        handler(false);
    }

    const remove=()=>{
        infoRemove(docs.id);
    }
    return(
        <>
            <tbody className="bg-white">
                
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {docs.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{docs.user}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{docs.country}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{docs.opinion}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{docs.gmail}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={edit}>
                      Edit<span className="sr-only"></span>
                    </a>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={remove}>
                      <XMarkIcon className="h-6 w-6 text-red-400" />
                      <span className="sr-only"></span>
                    </a>
                  </td>
                </tr>
            </tbody>
        </>
    )
}
export default OrginalFormate;
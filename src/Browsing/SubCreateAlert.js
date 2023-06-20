import React,{Fragment, useState} from 'react';
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

function SubCreateAlert({messageSend,bird,confarmation}){
  let content;
  
    if(confarmation===true){
      content={
        message:'Your number has been matched',
        direction:'Go back to home page to login',
        icon:<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
      }
    }
    else if(confarmation===false){
      content={
        message:'Not matched',
        direction:'try again',
        icon:<XMarkIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
      }
    }
    else{
      content={
        message:'Check Your Mail!',
        direction:'Paste the number in verification box & create account',
        icon:<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
      }
    }
    console.log(confarmation)
    return(
        <>
            <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={messageSend}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {content.icon}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    
                    <p className="text-sm font-medium text-gray-900">{content.message}</p>
                    <p className="mt-1 text-sm text-gray-500">{content.direction}</p>
                  </div>
                  
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        bird(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      
        </>
    )
}
export default SubCreateAlert;
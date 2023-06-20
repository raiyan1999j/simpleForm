import React,{useState,useRef} from 'react';
function InputFeild({infoAdd,infoGet}){
    const user = useRef();
    const country = useRef();
    const opinion = useRef();
    const gmail = useRef();

    const submit=()=>{
      const group ={
          user: user.current.value,
          country : country.current.value,
          opinion : opinion.current.value,
          gmail : gmail.current.value
      }

      infoAdd(group);
      user.current.value=null;
      country.current.value=null;
      opinion.current.value=null;
      gmail.current.value=null;
      }

      const get=()=>{
        infoGet('connected')
      }
    return(
        <>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-0 pb-4">
            
            <div className='text-center'>
                <h1 className='py-10 text-2xl font-medium font-sans text-white'>Registration</h1>
            </div>
            <div>
                {/* input-start */}
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-4">
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900 font-sans">
                Name
              </label>
              <div className="pb-4">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sans"
                  ref={user}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900 font-sans">
                  Country
                </label>
              </div>
              <div className="pb-4">
                <input
                  id="password"
                  name="password"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sans"
                  ref={country}
                />
              </div>
            </div>

            <div>
      <label htmlFor="comment" className="block text-sm font-bold leading-6 text-gray-900 font-sans">
        Add your comment
      </label>
      <div className="pb-4">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-bold font-sans"
          defaultValue={''}
          ref={opinion}
        />
      </div>
    </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900 font-sans">
                  Mail
                </label>
              </div>
              <div className="pb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sans"
                  ref={gmail}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans"
                onClick={submit}
              >
                Submit
              </button>
            </div>

            <div className='mt-2.5'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans"
                onClick={get}
              >
                Get Data
              </button>
            </div>
        </div>
      </div>
                {/* input-finish */}
            </div>
          </div>
        </div>
        </>
    )
}
export default InputFeild;
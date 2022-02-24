import { Icon } from "@iconify/react";
import React from "react";

const NotesTab = () => {
  return (
    <main className='flex items-start flex-col justify-center w-full my-6'>
      <div className='w-full flex flex-col items-start space-y-2 mb-1'>
        <textarea
          className='textarea textarea-bordered w-full'
          placeholder='Write Your Notes Here...'
          rows='3'
          defaultValue={""}
        />
        <div className='flex items-center space-x-2'>
          <div className='form-control w-full max-w-xs'>
            <select
              defaultValue={""}
              className='select select-sm select-bordered'
            >
              <option disabled='' selected=''>
                Select Video
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <button className='btn btn-primary btn-sm'>
            <p className='flex items-center space-x-2'>
              <span>Post Notes</span>
              <Icon icon='akar-icons:send' />
            </p>
          </button>
        </div>
      </div>
      <div className='divider'></div>
      <div className='w-full'>
        <div className='w-full flex flex-col items-center space-y-2 '>
          {[...Array(10).keys()].map((idx) => (
            <div
              key={Math.random() + idx}
              tabIndex={0}
              className='collapse w-full collapse-arrow border border-base-300 bg-zinc-800'
            >
              <input type='checkbox' />
              <div className='collapse-title text-md font-medium'>
                <p className='line-clamp-1'>
                  {idx + 1}. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Quisquam labore dolor optio eligendi eaque, ad deserunt
                  dignissimos.
                </p>
              </div>
              <div className='collapse-content'>
                <div className='w-full flex flex-col space-y-2'>
                  <p className='bg-zinc-900 p-2 px-3'>
                    <span className='text-sm text-gray-600'>
                      pmanoharmaharshi@gmail.com
                    </span>
                    <span className='block'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat praesentium ipsam saepe culpa quos qui similique
                      unde ex voluptate. Neque totam corporis vitae, blanditiis
                      architecto aspernatur amet facilis officia quidem. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Odit
                      quisquam cumque voluptas rerum exercitationem. Error
                      quisquam at praesentium repudiandae aliquam. Recusandae
                      nihil, consequuntur soluta consequatur quasi illum rem ea
                      incidunt!
                    </span>
                  </p>
                  <p className='bg-zinc-900 p-2 px-3'>
                    <span className='text-sm text-gray-600'>
                      pmanoharmaharshi@gmail.com
                    </span>
                    <span className='block'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat praesentium ipsam saepe culpa quos qui similique
                      unde ex voluptate. Neque totam corporis vitae, blanditiis
                      architecto aspernatur amet facilis officia quidem. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Odit
                      quisquam cumque voluptas rerum exercitationem. Error
                      quisquam at praesentium repudiandae aliquam. Recusandae
                      nihil, consequuntur soluta consequatur quasi illum rem ea
                      incidunt!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NotesTab;

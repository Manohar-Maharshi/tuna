import { Icon } from "@iconify/react";
import React from "react";
const ChatTab = () => {
  return (
    <div className='flex items-start justify-center w-full '>
      <div className='my-5 flex flex-col flex-grow w-full max-w-xl min-h-screen border border-slate-700 shadow-xl rounded overflow-hidden'>
        <div className='flex flex-col flex-grow h-0 p-4 overflow-auto scrollbar-hide'>
          {[...Array(10).keys()].map((idx) => (
            <div keys={Math.random() + idx}>
              <div className='flex w-full mt-2 space-x-3 max-w-xs'>
                <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-700' />
                <div>
                  <div className='bg-gray-700 p-3 rounded-r-lg rounded-bl-lg'>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <span className='text-xs text-gray-500 leading-none'>
                    2 min ago
                  </span>
                </div>
              </div>
              <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                <div>
                  <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                  <span className='text-xs text-gray-500 leading-none'>
                    2 min ago
                  </span>
                </div>
                <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-700' />
              </div>
            </div>
          ))}
        </div>
        <div className='bg-neutral flex items-center space-x-1 p-4'>
          <input
            type='text'
            placeholder='Type your message here'
            className='input input-bordered w-full'
          />
          <button className='btn btn-square btn-info'>
            <Icon className='h-6 w-6' icon='akar-icons:send' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatTab;

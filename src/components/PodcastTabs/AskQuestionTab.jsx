import { Icon } from "@iconify/react";
import React from "react";

const AskQuestionTab = () => {
  return (
    <main className='flex items-start flex-col justify-start w-full my-6 min-h-screen'>
      {/* INPUT AREA */}
      <div className='w-full flex flex-col items-start space-y-2 mb-1'>
        <textarea
          className='textarea textarea-bordered w-full'
          placeholder='Write Your Question Here...'
          rows='3'
          defaultValue={""}
        />
        <div className='flex items-center space-x-2'>
          <button className='btn btn-primary btn-sm'>
            <p className='flex items-center space-x-2'>
              <span>Ask Question</span>
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
                  {/* FULL QUESTION AREA */}
                  <p className='bg-zinc-900 p-2 px-3'>
                    <span className='mb-1'>
                      <p className='text-sm text-gray-600 flex items-center space-x-2 link'>
                        <Icon icon='akar-icons:eye' />
                        <span className='capitalize'>Full question</span>
                      </p>
                    </span>
                    <span className='block'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat praesentium ipsam saepe culpa quos qui similique
                      unde ex voluptate. Neque totam corporis vitae,....?
                      incidunt!
                    </span>
                  </p>
                  {/* ANSWER QEUESTION TEXT AREA */}
                  <div className='w-full flex flex-col items-start space-y-2 mb-1'>
                    <textarea
                      className='textarea textarea-bordered w-full bg-zinc-900'
                      placeholder='Write Your Answer Here...'
                      rows='3'
                      defaultValue={""}
                    />
                    <div className='flex items-center space-x-2'>
                      <button className='btn btn-primary btn-sm'>
                        <p className='flex items-center space-x-2'>
                          <span>Answer Question</span>
                          <Icon icon='akar-icons:send' />
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className='divider my-2 '></div>
                  {/* ANSWERS */}
                  <p className='bg-zinc-900 p-2 px-3'>
                    <span className='mb-1'>
                      <p className='text-sm text-gray-600 link flex items-center space-x-2'>
                        <Icon icon='fa6-regular:pen-to-square' />
                        <span>pmanoharmaharshi@gmail.com</span>
                      </p>
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

export default AskQuestionTab;

import { Icon } from "@iconify/react";
import React from "react";

const CommentTab = () => {
  return (
    <main className='flex items-start flex-col justify-start w-full my-6 min-h-screen'>
      <div className='w-full flex flex-col items-start space-y-2 mb-1'>
        <textarea
          className='textarea textarea-bordered w-full'
          placeholder='Write Your Notes Here...'
          rows='3'
          defaultValue={""}
        />
        <div className='flex items-center space-x-2'>
          <button className='btn btn-primary btn-sm'>
            <p className='flex items-center space-x-2'>
              <span>Post Comment</span>
              <Icon icon='akar-icons:send' />
            </p>
          </button>
        </div>
      </div>
      <div className='divider'></div>
      <div className='w-full'>
        <div className='w-full flex flex-col items-center space-y-2 '>
          {[...Array(10).keys()].map((idx) => (
            <p key={Math.random() + idx} className='bg-zinc-900 p-2 px-3'>
              <p className='text-sm text-gray-600 flex items-center space-x-1 leading-relaxed'>
                <Icon icon='bx:comment-detail' />
                <span>pmanoharmaharshi@gmail.com</span>
              </p>
              <span className='block'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                praesentium ipsam saepe culpa quos qui similique unde ex
                voluptate. Neque totam corporis vitae, blanditiis architecto
                aspernatur amet facilis officia quidem. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Odit quisquam cumque voluptas
                rerum exercitationem. Error quisquam at praesentium repudiandae
                aliquam. Recusandae nihil, consequuntur soluta consequatur quasi
                illum rem ea incidunt!
              </span>
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CommentTab;

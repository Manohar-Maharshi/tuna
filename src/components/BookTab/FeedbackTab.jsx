import { Icon } from "@iconify/react";
import React from "react";

const FeedbackTab = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start space-y-2 my-5 max-w-xl'>
        <textarea
          className='textarea textarea-bordered w-[30rem]'
          placeholder='Your Feedback'
          rows='5'
          defaultValue={""}
        />
        <button className='btn btn-primary btn-sm'>
          <p className='flex items-center space-x-2'>
            <span>Send Feedback</span>
            <Icon icon='akar-icons:send' />
          </p>
        </button>
      </div>
    </div>
  );
};

export default FeedbackTab;

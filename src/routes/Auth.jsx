import React from "react";
import AuthForm from "../components/Authentication/AuthForm";
import HeroContent from "../components/Authentication/LoginHeroContent";

function Auth() {
  return (
    <main className='flex justify-center items-center w-full h-full'>
      <div className='py-10 md:py-14'>
        <div className='max-w-screen-xl flex items-center flex-col md:flex-row justify-between text-center text-secondary-content'>
          <HeroContent />
          {/* <div className='w-full pt-6 md:py-0'>
            <button className='btn btn-active btn-primary'>
              <span className=' flex items-center space-x-2'>
                <span>Explore Courses</span>{" "}
                <Icon icon='bi:arrow-right' className='w-5 h-5' />
              </span>
            </button>
          </div> */}
          <div className='w-full self-start md:ml-10'>
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;

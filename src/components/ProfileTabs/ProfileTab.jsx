import React from "react";

function ProfileTab() {
  return (
    <main className='my-8 w-full min-h-screen'>
      <div className='shadow stats w-full border border-slate-700 mb-3'>
        <div className='stat place-items-center'>
          <div className='stat-title'>My Courses</div>
          <div className='text-3xl stat-value'>31K</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>My Tests</div>
          <div className='text-3xl stat-value'>4,200</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>My Podcasts</div>
          <div className='text-3xl stat-value'>1,200</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>My Library</div>
          <div className='text-3xl stat-value'>1,200</div>
        </div>
      </div>
      <div className='border border-slate-700 p-3 shadow-sm rounded-sm'>
        <div className='flex items-center space-x-2 mb-2 font-semibold text-neutral-content leading-8'>
          <span clas='text-green-500'>
            <svg
              className='h-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </span>
          <span className='tracking-wide'>About</span>
        </div>
        <div className='text-gray-300'>
          <div className='grid md:grid-cols-2 text-sm'>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>User Name</div>
              <div className='px-4 py-2'>Jane</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>Contact No.</div>
              <div className='px-4 py-2'>+11 998001001</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>Email.</div>
              <div className='px-4 py-2'>
                <a className='text-blue-800' href='mailto:jane@example.com'>
                  jane@example.com
                </a>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='px-4 py-2 font-semibold'>Last Login Time.</div>
              <div className='px-4 py-2'>{new Date().toISOString()}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileTab;

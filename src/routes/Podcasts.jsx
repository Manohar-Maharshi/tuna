import React from "react";
import PodcastCard from "../components/Podcasts/PodcastCard";

function Podcasts() {
  return (
    <main className='my-8'>
      <div className='w-full flex flex-col'>
        <div className='form-control flex-row items-center'>
          <input
            type='search'
            id='email-adress-icon'
            className='block w-full input input-bordered'
            placeholder='Search Podcasts....'
          />
          <button className='btn btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <select
            defaultValue={"free"}
            className='self-start my-2 select w-full select-sm select-bordered max-w-[5rem] '
          >
            <option value={"free"}>Free</option>
            <option>Paid</option>
          </select>
          <select
            defaultValue={"all"}
            className='self-end my-2 select w-full select-sm select-bordered max-w-[14rem] '
          >
            <option value={"Select Course Category"} disabled>
              Select Course Category
            </option>
            <option value={"all"}>All</option>
            <option value={"full stack developemnt"}>
              Full Stack Development
            </option>
            <option value={"fontend"}>Frontend </option>
            <option value={"backend"}>Backend</option>
            <option value={"english"}>English</option>
          </select>
        </div>
      </div>
      <div className='divider'></div>
      <div className='flex items-center gap-3 justify-center flex-wrap'>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <PodcastCard id={idx + 1} key={Math.random() + idx} />
          ))}
      </div>
    </main>
  );
}

export default Podcasts;

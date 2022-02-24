import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "wouter";

function CourseCard({ id }) {
  return (
    <Link href={`/course/${id}`}>
      <div className='card card-bordered cursor-pointer border-slate-700 max-h-[16rem] w-60 bg-base-100 card-compact shadow-xl'>
        <figure>
          <img
            className='h-[5rem] w-full object-cover'
            src={`https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg`}
            alt='Shoes'
          />
        </figure>
        <div className='card-body gap-1'>
          <div className='flex items-center space-x-1 w-full'>
            <div className='badge badge-sm badge-ghost'>
              <Icon icon='bi:person-video' />{" "}
            </div>
            <div className='badge badge-primary badge-sm text-xs'>Beginner</div>
            <div className='badge badge-secondary badge-sm badge-outline'>
              20 Enrolled
            </div>
          </div>
          <h2 className='font-semibold leading-normal !mb-0.5 p-0 text-sm line-clamp-2'>
            HTML, JavaScript, & Bootstrap - Certification Course
          </h2>
          <p className='line-clamp-2 text-gray-500 text-xs'>
            A Comprehensive Guide for Beginners interested in learning HTML,
            JavaScript, & Bootstrap. Build Interactive Web Pages.
          </p>
          <div className='justify-end card-actions mt-2'>
            <button className='btn btn-xs btn-outline btn-info'>
              <p className='flex items-center space-x-2'>
                <span>View Course</span>
                <Icon icon='bi:arrow-right' className='w-4 h-4' />
              </p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;

import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "wouter";

function TestCard({ id }) {
  return (
    <Link href={`/test/${id}`}>
      <div className='card card-bordered p-0 cursor-pointer border-slate-700 w-72 bg-base-100 shadow-xl'>
        <div className='card-body p-3 gap-2'>
          <div className='flex items-center space-x-1 w-full'>
            <div className='badge badge-sm badge-ghost'>
              <Icon icon='ph:exam-light' className='w-4 h-4' />{" "}
            </div>
            <div className='badge badge-error badge-sm text-xs'>Beginner</div>
            <div className='badge badge-secondary badge-sm badge-outline'>
              20 Taken
            </div>
          </div>
          <h2 className='font-semibold leading-normal !mb-0.5 p-0 text-sm line-clamp-2'>
            HTML, JavaScript, & Bootstrap - Certification Course ,HTML,
            JavaScript, & Bootstrap - Certification Course
          </h2>
          <p className='line-clamp-2 text-gray-500 text-xs'>
            A Comprehensive Guide for Beginners interested in learning HTML,
            JavaScript, & Bootstrap. Build Interactive Web Pages. ?
          </p>
          <div className='justify-end card-actions mt-2'>
            <button className='btn btn-xs btn-outline btn-info'>
              <p className='flex items-center space-x-2'>
                <span>Take Test</span>
                <Icon icon='bi:arrow-right' className='w-4 h-4' />
              </p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TestCard;

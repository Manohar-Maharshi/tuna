import { Icon } from "@iconify/react";
import React from "react";

const TableOfContentTab = () => {
  return (
    <main className='flex items-start justify-center w-full'>
      <div className='max-w-xl w-full my-5 border border-slate-700'>
        <ul>
          <li className='flex items-center justify-between p-3 cursor-pointer my-1 bg-gray-700'>
            <p className='line-clamp-1'>
              <span>Teaser |</span> <span>Introduction to this course</span>
            </p>
            <span>
              <Icon icon='ant-design:play-circle-twotone' className='w-6 h-6' />
            </span>
          </li>
          {Array(10)
            .fill("")
            .map((idx) => (
              <li
                key={Math.random() + idx}
                className='flex items-center justify-between p-3 cursor-pointer my-1 hover:bg-gray-700'
              >
                <p className='line-clamp-1'>
                  <span>{idx + 1}.</span> Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Rem, fugiat!
                </p>
                <span>
                  <Icon
                    icon='ant-design:play-circle-twotone'
                    className='w-6 h-6'
                  />
                </span>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default TableOfContentTab;

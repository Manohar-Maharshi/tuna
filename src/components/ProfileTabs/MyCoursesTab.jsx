import React from "react";
import CourseCard from "../Courses/CourseCard";

function MyCoursesTab() {
  return (
    <main className='my-10'>
      <div className='flex items-center gap-3 justify-center flex-wrap'>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <CourseCard key={Math.random() + idx} />
          ))}
      </div>
    </main>
  );
}

export default MyCoursesTab;

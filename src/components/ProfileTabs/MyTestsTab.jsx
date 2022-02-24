import React from "react";
import TestCard from "../Tests/TestCard";

function MyTestsTab() {
  return (
    <main className='my-10'>
      <div className='flex items-center gap-3 justify-center flex-wrap'>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <TestCard key={Math.random() + idx} />
          ))}
      </div>
    </main>
  );
}

export default MyTestsTab;

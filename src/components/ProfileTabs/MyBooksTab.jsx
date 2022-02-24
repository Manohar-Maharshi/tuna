import React from "react";
import BookCard from "../Books/BookCard";

function MyBooksTab() {
  return (
    <main className='my-10'>
      <div className='flex items-center gap-3 justify-center flex-wrap'>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <BookCard key={Math.random() + idx} />
          ))}
      </div>
    </main>
  );
}

export default MyBooksTab;

import React from "react";
import PodcastCard from "../Podcasts/PodcastCard";

function MyPodcastsTab() {
  return (
    <main className='my-10'>
      <div className='flex items-center gap-3 justify-center flex-wrap'>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <PodcastCard key={Math.random() + idx} />
          ))}
      </div>
    </main>
  );
}

export default MyPodcastsTab;

import React from "react";
import HomeHeroContent from "../components/HomeHeroContent";
import { Icon } from "@iconify/react";
import CourseCarousel from "../components/Courses/CourseCarousel";
import TestCarousel from "../components/Tests/TestCarousel";
import PodcastCarousel from "../components/Podcasts/PodcastCarousel";
import BookCarousel from "../components/Books/BookCarousel";
import { Link } from "wouter";

function Home() {
  return (
    <main className='w-full h-full py-16'>
      <HomeHeroContent />
      <div className='my-5'>
        <Link href='/courses'>
          <a className='btn'>
            <p className='flex items-center space-x-2'>
              <span>Explore Courses</span>{" "}
              <Icon icon='bi:arrow-right' className='w-5 h-5' />
            </p>
          </a>
        </Link>
      </div>
      <div className='divider my-20'></div>
      <div>
        <CourseCarousel />
        <TestCarousel />
        <PodcastCarousel />
        <BookCarousel />
      </div>
    </main>
  );
}

export default Home;

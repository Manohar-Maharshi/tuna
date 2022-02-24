import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TableOfContentTab from "../components/CourseTabs/TableOfContentTab";
import DescriptionTab from "../components/CourseTabs/DescriptionTab";
import NotesTab from "../components/CourseTabs/NotesTab";
import QATab from "../components/CourseTabs/QATab";
import ChatTab from "../components/CourseTabs/ChatTab";
import TutorTab from "../components/CourseTabs/TutorTab";
import { Icon } from "@iconify/react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "react-tabs/style/react-tabs.css";

function Course(props) {
  const [videoID, setVideoID] = useState(null);
  const [toggleVideo, setToggleVideo] = useState(true);
  return (
    <main className='py-10'>
      {toggleVideo ? (
        <div>
          <div className='w-full bg-neutral min-h-[35rem]'>
            <Video
              className='w-full h-[35rem]'
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            >
              <source
                src='https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
                type='video/mp4'
              />
            </Video>
          </div>
          <button
            onClick={() => setToggleVideo(!toggleVideo)}
            className='mt-2 btn btn-sm float-right'
          >
            Go Back
          </button>
        </div>
      ) : (
        <section className='w-full bg-neutral  min-h-[35rem]'>
          <div className='w-full h-full flex flex-col items-center justify-center py-10'>
            <div className='max-w-3xl'>
              <h1 className='text-3xl font-semibold leading-relaxed'>
                HTML, JavaScript, & Bootstrap - Certification Course
              </h1>
              <div>
                <p className='text-zinc-400 flex items-center space-x-2 py-1'>
                  <span>Tutor:</span>
                  <span className='capitalize'>manohar Maharshi</span>
                </p>
                <p className='text-zinc-500 text-sm flex items-center space-x-2'>
                  <span className='capitalize'>
                    (⭐4.5) 200 students enrolled
                  </span>
                </p>
                <p className='text-zinc-400 flex items-center space-x-2 py-2'>
                  <span className='capitalize line-clamp-4'>
                    A Comprehensive Guide for Beginners interested in learning
                    HTML, JavaScript, & Bootstrap. Build Interactive Web Pages.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere quaerat et, fugit laboriosam nesciunt ipsam vitae
                    dolorum quis voluptatem nam. Cupiditate, culpa inventore
                    itaque molestiae soluta consequuntur nobis voluptas. Porro!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    animi obcaecati distinctio omnis velit sequi, nemo
                    voluptatibus repudiandae, libero laudantium a totam et fuga,
                    iste dolorem vel alias officiis assumenda!
                  </span>
                </p>
              </div>
              <div className='w-full h-full flex items-center justify-center py-20'>
                <div className='max-w-sm w-full flex flex-col items-center space-y-2'>
                  <div className='w-full flex items-center space-x-1'>
                    <button
                      onClick={() => setToggleVideo(!toggleVideo)}
                      className='btn btn-info flex-1'
                    >
                      Enroll course
                    </button>
                    <button className='btn btn-outline btn-square'>
                      <Icon icon='akar-icons:heart' className='w-5 h-5' />
                    </button>
                  </div>
                  <button className='btn btn-outline w-full'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className='w-full min-h-screen my-10'>
        <Tabs>
          <TabList>
            <Tab>Table Of Content</Tab>
            <Tab>Description</Tab>
            <Tab>Notes</Tab>
            <Tab>Q/A</Tab>
            <Tab>Chat</Tab>
            <Tab>Feedback</Tab>
          </TabList>
          <TabPanel>
            <TableOfContentTab />
          </TabPanel>
          <TabPanel>
            <DescriptionTab />
          </TabPanel>
          <TabPanel>
            <NotesTab />
          </TabPanel>
          <TabPanel>
            <QATab />
          </TabPanel>
          <TabPanel>
            <ChatTab />
          </TabPanel>
          <TabPanel>
            <TutorTab />
          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
}

export default Course;

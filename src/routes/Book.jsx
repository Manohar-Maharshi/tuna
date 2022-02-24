import React, { useState } from "react";
import samplePDF from "../../sample.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Icon } from "@iconify/react";
import DescriptionTab from "../components/BookTab/DescriptionTab";
import ChatTab from "../components/BookTab/ChatTab";
import FeedbackTab from "../components/BookTab/FeedbackTab";

const Book = () => {
  const [toggleBook, setToggleBook] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <main className='py-10'>
      <div>
        {toggleBook ? (
          <section className='bg-neutral  min-h-[35rem]'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js'>
              <div className='w-full h-screen'>
                <Viewer
                  theme={"dark"}
                  fileUrl={samplePDF}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
            <button
              onClick={() => setToggleBook(!toggleBook)}
              className='mt-2 btn btn-sm float-right'
            >
              Go Back
            </button>
          </section>
        ) : (
          <section className='w-full bg-neutral  min-h-[35rem]'>
            <div className='w-full h-full flex flex-col items-center justify-center py-10'>
              <div className='max-w-3xl'>
                <h1 className='text-3xl font-semibold leading-relaxed'>
                  HTML, JavaScript, & Bootstrap - Mini Book
                </h1>
                <div>
                  <p className='text-zinc-400 flex items-center space-x-2 py-1'>
                    <span>Tutor:</span>
                    <span className='capitalize'>manohar Maharshi</span>
                  </p>
                  <p className='text-zinc-500 text-sm flex items-center space-x-2'>
                    <span className='capitalize'>
                      (⭐4.5) 200 students Read
                    </span>
                  </p>
                  <p className='text-zinc-400 flex items-center space-x-2 py-2'>
                    <span className='capitalize line-clamp-4'>
                      A Comprehensive Guide for Beginners interested in learning
                      HTML, JavaScript, & Bootstrap. Build Interactive Web
                      Pages. Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Facere quaerat et, fugit laboriosam nesciunt ipsam
                      vitae dolorum quis voluptatem nam. Cupiditate, culpa
                      inventore itaque molestiae soluta consequuntur nobis
                      voluptas. Porro! Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quo animi obcaecati distinctio omnis
                      velit sequi, nemo voluptatibus repudiandae, libero
                      laudantium a totam et fuga, iste dolorem vel alias
                      officiis assumenda!
                    </span>
                  </p>
                </div>
                <div className='w-full h-full flex items-center justify-center py-20'>
                  <div className='max-w-sm w-full flex flex-col items-center space-y-2'>
                    <div className='w-full flex items-center space-x-1'>
                      <button
                        onClick={() => setToggleBook(!toggleBook)}
                        className='btn btn-info flex-1'
                      >
                        Start Reading
                      </button>
                      <button className='btn btn-outline btn-square'>
                        <Icon icon='akar-icons:heart' className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <section className='w-full min-h-screen my-10'>
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Discussion Box</Tab>
            <Tab>Feedback</Tab>
          </TabList>
          <TabPanel>
            <DescriptionTab />
          </TabPanel>
          <TabPanel>
            <ChatTab />
          </TabPanel>
          <TabPanel>
            <FeedbackTab />
          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default Book;

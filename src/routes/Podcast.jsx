import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import DescriptionTab from "../components/PodcastTabs/DescriptionTab";
import AskQuestionTab from "../components/PodcastTabs/AskQuestionTab";
import CommentTab from "../components/PodcastTabs/CommentTab";
import FeedbackTab from "../components/PodcastTabs/FeedbackTab";

const Podcast = () => {
  return (
    <div className='container mx-auto w-full min-h-screen'>
      <div className='my-5'>
        <h2 className='card-title mb-5'>
          <span>Podcast: </span> Thousands of icons, one unified framework.
        </h2>
        <div>
          <AudioPlayer
            autoPlay={false}
            src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
            showFilledVolume={true}
          />
        </div>
        <div className='divider'></div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Ask Question</Tab>
              <Tab>Comments</Tab>
              <Tab>Feedback</Tab>
            </TabList>
            <TabPanel>
              <DescriptionTab />
            </TabPanel>
            <TabPanel>
              <AskQuestionTab />
            </TabPanel>
            <TabPanel>
              <CommentTab />
            </TabPanel>
            <TabPanel>
              <FeedbackTab />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Podcast;

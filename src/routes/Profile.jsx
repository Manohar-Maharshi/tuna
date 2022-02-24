import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProfileTab from "../components/ProfileTabs/ProfileTab";
import MyCoursesTab from "../components/ProfileTabs/MyCoursesTab";
import MyTestsTab from "../components/ProfileTabs/MyTestsTab";
import MyPodcastsTab from "../components/ProfileTabs/MyPodcastsTab";
import MyBooksTab from "../components/ProfileTabs/MyBooksTab";

function Profile() {
  return (
    <main className='container mx-auto my-10'>
      <Tabs>
        <TabList>
          <Tab>Profile Info</Tab>
          <Tab>My Courses</Tab>
          <Tab>My Tests</Tab>
          <Tab>My Podcasts</Tab>
          <Tab>My Library</Tab>
          <Tab>
            <span className='uppercase font-bold'>Cart</span>
          </Tab>
        </TabList>
        <TabPanel>
          <ProfileTab />
        </TabPanel>
        <TabPanel>
          <MyCoursesTab />
        </TabPanel>
        <TabPanel>
          <MyTestsTab />
        </TabPanel>
        <TabPanel>
          <MyPodcastsTab />
        </TabPanel>
        <TabPanel>
          <MyBooksTab />
        </TabPanel>
        <TabPanel>
          <MyBooksTab />
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default Profile;

import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import Tests from "./routes/Tests";
import Podcasts from "./routes/Podcasts";
import Library from "./routes/Library";
import Courses from "./routes/Courses";
import Auth from "./routes/Auth";
import { useRecoilValue } from "recoil";
import { isLoggedIn } from "./atoms/userAtom";

import { Route, Switch } from "wouter";
import { useLocation } from "wouter";
import Profile from "./routes/Profile";
import Course from "./routes/Course";
import Test from "./routes/Test";
import Podcast from "./routes/Podcast";
import Book from "./routes/Book";

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-3'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/login' component={Auth} />
          <Route path='/courses' component={Courses} />
          <Route path='/course/:course_id' component={Course} />
          <Route path='/test/:test_id' component={Test} />
          <Route path='/tests' component={Tests} />
          <Route path='/podcasts' component={Podcasts} />
          <Route path='/podcast/:podcast_id' component={Podcast} />
          <Route path='/library' component={Library} />
          <Route path='/book/:book_id' component={Book} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import NavbarNew from './components/Navbar/NavbarNew';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import LoginGoogle from './components/Login/LoginGoogle';
import Logout from './components/Login/Logout';
import LeftMenuBar from './components/LeftMenuBar/LeftMenuBar';
import AddKeywordsPage from './components/AddKeywordsPage/AddKeywordsPage';
import NoKeywords from './components/NoKeywords/NoKeywords';
import Feed from './components/Feed/Feed';
import Meme from './components/Meme/Meme';
import ContentPage from './components/ContentPage/ContentPage';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser } from './components/features/userSlice';
import { auth } from './firebase';
import video from './components/video/Scholarlys_Demo.mp4';
import Bookmarks from './components/Bookmarks/Bookmarks';



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          mail: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      <Route exact path="/">
        {/* <Navbar /> */}
        <LandingPage />
      </Route>
      {(!user)  ? (
        <Route path="/no-keywords">
          {/* <div>
            <div className="log_google_main">
              <Navbar />
              <div className="landingpage_top mar">
                <p>Keep up with the latest research information, All in one place</p>
              </div>
              <div className="landingpage_mid mar">
                  <p>Scholarlys collects information from various sources and gives you updates on what’s happening in your research field.</p>
              </div>
              <div className="vidd">
                <video src={video} />
              </div>
              
            </div>
            <div id="popupp">
                <div className="crosss_main">
                    <p className="crosss">&times;</p>
                </div>
                <div className="welcomes_main">
                    <p className="welcomes">Welcome to Scholarlys</p>
                </div>
                <div className="login_googles">
                    <LoginGoogle />
                </div>
            </div>
          </div> */}
            <LandingPage />
        </Route>
      ) : (
        <div className="app">

          <Route path="/no-keywords">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              <NoKeywords />
            </div>
          </Route>

          <Route path="/add-keywords-page">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              {/* <AddKeywordsPage /> */}
            </div>
          </Route>

          <Route path="/feed">
            <Navbar />
            <div className="align_divs">    
              <LeftMenuBar />
              <Feed />
              <Meme />
            </div>
          </Route>

          <Route path="/content">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              <ContentPage />
              <Meme />
            </div>
          </Route>

          <Route path="/bookmarks">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              <Bookmarks />
              <Meme />
            </div>
          </Route>

          </div>


      )};
      
    </Router>



      );
}

export default App;

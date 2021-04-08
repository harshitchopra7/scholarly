import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
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
import { useSelector } from 'react-redux';
import { login, selectUser } from './components/features/userSlice';
import { auth } from './firebase';



function App() {

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatchEvent(login({
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
        <Navbar />
        <LandingPage />
      </Route>
      {!user ? (
        <Route path="/no-keywords"><LoginGoogle /></Route>
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
              <AddKeywordsPage />
            </div>
          </Route>

          <Route path="/feed">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              <Feed />
              {/* <Meme /> */}
            </div>
          </Route>

          <Route path="/content">
            <Navbar />
            <div className="align_divs">
              <LeftMenuBar />
              <ContentPage />
              {/* <Meme /> */}
            </div>
          </Route>

          </div>


      )};
    </Router>



      );
}

export default App;

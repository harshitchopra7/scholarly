import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import LeftMenuBar from './components/LeftMenuBar/LeftMenuBar';
import AddKeywordsPage from './components/AddKeywordsPage/AddKeywordsPage';
import NoKeywords from './components/NoKeywords/NoKeywords';
import Feed from './components/Feed/Feed';

function App() {

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingPage />
          </Route>

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
            </div>
          </Route>

          


          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

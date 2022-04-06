import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogInForm from './Components/LogInForm/LogInForm';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init'
import { useEffect, useState } from 'react';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({})
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then(result => {
      setUser(result.user)
    })
    .catch(error => {
      setUser({})
    })
  }
  const handleFacebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider()
    signInWithPopup(auth,facebookProvider)
    .then(result => {
      setUser(result.user)
    })
    .catch(error => {
      setUser({})
    })
  }

  const handleGitHubSignIn = () => {
    const githubProvider = new GithubAuthProvider()
    signInWithPopup(auth,githubProvider)
    .then(result => {
      setUser(result.user)
    })
    .catch(error => {
      setUser({})
    })
  }

console.log(user)
  const accountSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(error => {
      setUser({})
    })
  }
  return (
    <div className='text-center'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home user={user}></Home>}></Route>
        <Route path='/log-in' element={<LogInForm
        handleGoogleSignIn={handleGoogleSignIn}
        handleFacebookSignIn={handleFacebookSignIn}
        handleGitHubSignIn={handleGitHubSignIn}
        accountSignOut={accountSignOut}
        user={user}
        ></LogInForm>}></Route>
        <Route path='/profile' element={<Profile user={user}></Profile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
// Initialize Firebase Authentication and get a reference to the service

export default App;

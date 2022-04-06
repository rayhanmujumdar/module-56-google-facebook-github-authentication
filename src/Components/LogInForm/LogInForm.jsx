import { useNavigate } from "react-router-dom";

const LogInForm = ({handleGoogleSignIn,user,accountSignOut,handleFacebookSignIn,handleGitHubSignIn}) => {
  const navigate = useNavigate()
  user.uid && navigate('/profile')
  const signIn = <div className="h-screen flex justify-start items-center py-20 bg-zinc-400 flex-col">
  <h1 className="text-3xl font-mono bg-red-600 text-white px-20 py-2 shadow-lg">
    log in with
  </h1>
  <div className="my-4 bg-slate-500 px-20 py-10">
    <button onClick={handleFacebookSignIn} className="text-white bg-blue-500 flex justify-between items-center w-44 my-3 pr-2">
    <i className="fa-brands fa-facebook-f px-3 py-2 bg-blue-600 mr-2 "></i>
      Facebook log in
    </button>
    <button onClick={handleGitHubSignIn} className="text-white bg-neutral-800 flex justify-between items-center w-44 my-3 pr-2">
    <i className="fa-brands fa-github px-3 py-2 bg-neutral-600 mr-2 "></i>
      GitHub log in
    </button>
    <button onClick={handleGoogleSignIn} className="text-white bg-red-500 flex justify-between items-center w-44 my-3 pr-2">
    <i className="fa-brands fa-google px-3 py-2 bg-red-300 mr-2 "></i>
      Google log in
    </button>
  </div>
</div>
    return (
    <div>
        {
          user.uid ? <div>
            <h1 className="text-green-600 text-xl my-3">You are successfully Log in</h1>

            <button onClick={accountSignOut} className="bg-red-600 text-white px-3 py-2 rounded-md">Sign Out</button>
          </div> : signIn
        }
    </div>
  );
};

export default LogInForm;

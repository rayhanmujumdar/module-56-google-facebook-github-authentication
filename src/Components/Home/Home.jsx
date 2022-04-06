import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
 
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-zinc-400">
        {
          user.uid ? <Link
          to={"/log-in"}
          className="text-xl font-mono border-2 border-purple-200 bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-red-500"
        >
          Sign out
        </Link> : <Link
          to={"/log-in"}
          className="text-xl font-mono border-2 border-purple-200 bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-red-500"
        >
          Log-in
        </Link>
        }
      </div>
    </div>
  );
};

export default Home;

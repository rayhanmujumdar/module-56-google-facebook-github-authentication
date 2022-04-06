import React from "react";

const Profile = ({ user }) => {
  const { displayName, photoURL } = user;
  console.log('hello')
  return (
    <div>
      <div className="flex justify-center items-center flex-col my-20 bg-slate-600 w-96 m-auto py-4 text-white rounded-md">
        <h1 className="text-2xl my-3">{displayName || 'No Profile Found'}</h1>
      {
        user.uid ? <img src={photoURL} alt="" className="w-24" /> : <h1>No image found</h1>
      }
      </div>
    </div>
  );
};

export default Profile;

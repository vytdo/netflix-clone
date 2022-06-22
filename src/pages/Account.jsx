import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/1de78b9a-a510-4d56-950c-4ca68fb1e026/AU-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold"> My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;

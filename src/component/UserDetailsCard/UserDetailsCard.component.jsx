import React from "react";

const getYear = (someDate) => {
  const date = new Date(someDate);
  const year = date.getFullYear();
  return year;
};

const UserDetailsCard = ({ userDetails }) => {
  if (userDetails.message === "Not Found") {
    return (
      <div className="flex text-3xl  justify-center  m-4 p-4 md:p-8 w-4/5 md:w-2/4 bg-white rounded-xl drop-shadow-lg">
        <span className="text-red-500">
          <ion-icon name="alert-circle-sharp" id="icon"></ion-icon>
        </span>{" "}
        <span className="ml-2 font-semibold text-2xl">User Not Found</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2  m-4 p-4 md:p-8 w-4/5 md:w-2/4 bg-white rounded-xl drop-shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 md:col-span-1 md:m-8 rounded-full drop-shadow-xl bg-gradient-to-b from-fuchsia-600 via-red-500 to-blue-500 p-[2px]">
          <img
            src={userDetails?.avatar_url}
            alt="user_avatar"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 justify-center  items-center md:items-start">
          <h4
            className="text-xl md:text-3xl font-bold truncate"
            title={userDetails?.name}
          >
            {userDetails?.name}
          </h4>
        </div>
        <div className="grid grid-cols-4 md:gap-0 gap-6 col-span-3 md:col-span-1   md:text-xl my-4 md:my-auto">
          <div className="col-span-2 md:col-span-4  flex  overflow-hidden items-center md:my-2">
            <span>
              <ion-icon name="logo-github" id="icon"></ion-icon>{" "}
            </span>
            <a
              href={userDetails?.html_url}
              target="_blank"
              rel="noreferrer"
              className="ml-2 hover:text-gray-600 truncate"
              title={userDetails?.html_url}
            >
              {userDetails?.login}
            </a>
          </div>
          {userDetails?.location && (
            <div className="col-span-2 md:col-span-4  flex  items-center overflow-hidden md:my-2">
              <span className="text-red-500">
                <ion-icon name="location" id="icon"></ion-icon>{" "}
              </span>
              <span className="ml-2 truncate ">{userDetails?.location}</span>
            </div>
          )}
          {userDetails?.blog && (
            <div className="col-span-2 md:col-span-4  flex  items-center overflow-hidden md:my-2">
              <span className="text-indigo-600">
                <ion-icon name="globe" id="icon"></ion-icon>
              </span>
              <a
                href={userDetails?.blog}
                target="_blank"
                rel="noreferrer"
                className="ml-2 truncate hover:text-gray-600"
                title={userDetails?.blog}
              >
                {userDetails?.blog}
              </a>
            </div>
          )}
          {userDetails?.twitter_username && (
            <div className="col-span-2 md:col-span-4  flex items-center overflow-hidden md:my-2">
              <span className="text-[#1da1f2]">
                <ion-icon name="logo-twitter" id="icon"></ion-icon>
              </span>
              <a
                href={`https://twitter.com/${userDetails?.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="ml-2 truncate  hover:text-gray-600"
                title={userDetails?.twitter_username}
              >
                {userDetails?.twitter_username}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 text-lg text-center">
        {userDetails?.bio && (
          <h5 className="text-base md:text-lg text-gray-500 font-medium">
            {userDetails?.bio}
          </h5>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-1">
          <span className="text-indigo-700">
            <ion-icon name="people" id="icon"></ion-icon>
          </span>
          <span className="ml-2 truncate ">
            {userDetails?.followers} followers
          </span>
        </div>
        <div className="col-span-2 md:col-span-1">
          <span className="text-indigo-700">
            <ion-icon name="person-add" id="icon"></ion-icon>{" "}
          </span>
          <span className="ml-2 truncate ">
            {userDetails?.following} following
          </span>
        </div>
        <div className="col-span-2 md:col-span-1  flex items-center overflow-hidden">
          <span className="text-indigo-700">
            <ion-icon name="albums" id="icon"></ion-icon>
          </span>
          <span
            className="ml-2 truncate text-ellipsis"
            title={userDetails?.public_repos}
          >
            {userDetails?.public_repos} Public Repos
          </span>
        </div>

        <div className="col-span-2 md:col-span-1 flex items-center overflow-hidden">
          <span className="text-indigo-700">
            {" "}
            <ion-icon name="calendar" id="icon"></ion-icon>{" "}
          </span>
          <span className="ml-2 truncate  " title={userDetails?.created_at}>
            Created -{getYear(userDetails?.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;

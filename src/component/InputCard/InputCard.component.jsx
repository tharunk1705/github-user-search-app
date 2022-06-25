import { useState } from "react";

// const GITHUB_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const GITHUB_ACCEPT = "application/vnd.github.v3+json";

const InputCard = ({ setUserData }) => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const searchUser = (event) => {
    event.preventDefault();
    const githubUserName = userName.toLowerCase();
    fetch(`https://api.github.com/users/${githubUserName}`, {
      headers: {
        Accept: GITHUB_ACCEPT,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        throw new Error(`Error while fethching userdetails : ${error.message}`);
      });
  };
  return (
    <form
      className="flex flex-col gap-2  m-4 p-4 w-4/5 md:w-2/4 bg-white rounded-xl drop-shadow-lg "
      onSubmit={searchUser}
    >
      <label htmlFor="userName" className="font-bold tracking-wide">
        Enter GitHub username:
      </label>
      <div className="grid grid-cols-12">
        <input
          type="text"
          placeholder="eg: octocat"
          name="userName"
          value={userName}
          onChange={handleUserNameChange}
          className="col-span-8 md:col-span-10 border-2 focus:outline-none px-2 py-3 bg-gray-100 rounded-md placeholder:text-slate-400 text-gray-900 focus:ring-2 focus:ring-indigo-500 font-semibold tracking-wide"
        />
        <button
          className="col-span-4 md:col-span-2 bg-indigo-600 md:text-xl text-white font-bold rounded-md ml-2 hover:bg-indigo-800 transform active:scale-95"
          type="submit"
        >
          <ion-icon name="arrow-forward"></ion-icon>
        </button>
      </div>
    </form>
  );
};

export default InputCard;

import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="flex gap-3 justify-center items-center text-lg my-5 font-outfit">
        <span>Made by </span>
        <a
          href="https://twitter.com/tharunk1705"
          target="_blank"
          rel="noreferrer"
          className="bg-[#1da1f2] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#1c94df]"
        >
          <span>
            <ion-icon name="logo-twitter" id="icon"></ion-icon>
          </span>{" "}
          @tharunk1705
        </a>
      </footer>
    </div>
  );
};

export default Footer;

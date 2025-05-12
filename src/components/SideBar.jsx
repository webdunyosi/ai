import React from "react";

const SideBar = () => {
  return (
    <div className="w-60 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="/profile" className="hover:text-gray-400">
            Profile
          </a>
        </li>
        <li className="mb-2">
          <a href="/settings" className="hover:text-gray-400">
            Settings
          </a>
        </li>
        <li className="mb-2">
          <a href="/logout" className="hover:text-gray-400">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
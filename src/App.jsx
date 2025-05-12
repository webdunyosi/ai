import React, { useState } from "react"
import { FiSidebar } from "react-icons/fi"
import SideBar from "./components/SideBar" // Yangi SideBar komponentini import qilish

const App = () => {
  const [isOpen, setOpen] = useState(false)
  const [isShow, setShow] = useState(false)
  const [isHide, setHide] = useState(false)

  const HandleSideBar = () => {
    try {
      setTimeout(() => {
        setShow(!isShow)
      }, 250)
    } finally {
      setHide(!isHide)
      setOpen(!isOpen) // isOpen holatini o'zgartirish
    }
  }

  return (
    <div className={"w-full h-screen bg-green-500"}>
      <div
        className={`w-full min-h-screen overflow-hidden flex flex-col bg-gradient-to-t from-[#0A0F15] to-[#202126] p-4`}
      >
        <div
          className={`w-full h-full relative flex ${
            isOpen ? `flex` : `flex flex-wrap`
          } duration-300`}
        >
          {/* Eski SideBar */}
          <div
            className={`absolute ${
              isOpen ? `opacity-0` : `opacity-100`
            } duration-300 left-3 top-3 w-10 h-10 bg-gray-400`}
          ></div>

          {/* Top SideBar's place */}
          <div
            className={` ${
              isOpen ? `h-[96vh] w-60` : `h-20 w-full`
            } duration-300 transition-all flex justify-between`}
          >
            <div></div>
            {/* SideBar Wrapper */}
            <div
              className={` ${
                isOpen
                  ? `w-[400px] h-[96vh] ${isHide ? `` : ``} bg-[#222631]`
                  : `w-[608px] h-14`
              } thisIsSidebar rounded-3xl bg-[#222631] duration-300`}
            >
              <div
                className={` ${
                  isOpen ? `opacity-0 ${isHide ? `hidden` : ``}` : `opacity-100`
                } flex justify-between items-center gap-3 px-5 transition-opacity duration-300 w-full h-14 rounded-full bg-[#222631] border border-[#373E4E]`}
              >
                <div onClick={HandleSideBar} className={"text-white text-xl"}>
                  <FiSidebar />
                </div>
                <div className="flex gap-4 text-white">
                  <ul className="flex gap-4">
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
              </div>
            </div>

            <div></div>
          </div>
          <SideBar />

          <div className={"w-full h-[87vh] flex-1 bg-black"}>asddsaads</div>
        </div>
      </div>
    </div>
  )
}

export default App

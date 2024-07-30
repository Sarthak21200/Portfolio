import React from "react";
import pic from "../../public/orig.jpg";
import ButtonR from "./ButtonR"
import { ReactTyped } from "react-typed";
import leetcode from "../../public/leetcode.png";
import codeforces from "../../public/codeforces.png";
import linkedin from "../../public/linkedin.png";
import insta from "../../public/insta.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 py-10 my-5 md:px-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 py-3">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hi , I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
          Hello, I am Sarthak Sharma, a dedicated web developer with a deep passion for the MERN Stack. With a solid foundation in IT, I aim to craft meaningful and visually captivating software solutions that make a lasting impact.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/sarthaksharma._.212/" target="_blank">
                      <img src={insta} className="w-6 h-6 text-2xl cursor-pointer rounded-lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sarthaksharma212/" target="_blank">
                      <img src={linkedin} className="w-6 h-6 text-2xl cursor-pointer rounded-lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/Sarthak__212/" target="_blank">
                    <img src={leetcode} className="w-6 h-6 text-2xl cursor-pointer rounded-lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://codeforces.com/profile/sarthak3764" target="_blank">
                      <img src={codeforces} className="w-6 h-6 text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">View My Resume</h1>
                <div className="flex space-x-5">
                <div >
                  <ButtonR />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
  <img
    src={pic}
    className="rounded-full md:w-[360px] md:h-[360px]"
    alt=""
    style={{
      boxShadow: '0 8px 16px rgba(255, 0, 0, 0.6), 0 12px 24px rgba(255, 0, 0, 0.4)',
    }}
  />
</div>

        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

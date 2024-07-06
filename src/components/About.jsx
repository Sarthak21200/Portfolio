import React from "react";
import Card from "./Card";
import dtulogo from './dtuu.jpg';
import apj from './saket.jpg';

function About() {
  return (
    <div
      name="Education And Training"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold underline mb-5">Education And Training</h1>
        <br/>
        <h1 className="text-green-600 font-semibold text-xl">
          Qualifications
        </h1>
        <span>
        <div className="flex flex-wrap justify-around items-center p-4">
          <Card imageUrl={dtulogo} text1={"Delhi Technological University (DTU)"} text2={"B.Tech (Electrical)"} text3={"2021-2025"} text4={"CGPA : 8.4"}></Card>
          <Card imageUrl={apj} text1={"Apeejay School,Saket New Delhi"} text2={"Class XII (PCMB)"} text3={"2019"} text4={"CGPA : 8.3"}></Card>
          <Card imageUrl={apj} text1={"Apeejay School,Saket New Delhi"} text2={"Class X"} text3={"2017"} text4={"CGPA : 9.2"}></Card>
          </div>
        </span>
        <br/>
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        AEH (Advance Application Engineer) Intern at Accenture, Gurugram, Haryana from June 2024 to July 2024
        </span>
        <br />
        <br></br>
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div>
        <div>
        Proficient in C/C++ Language 
        </div>
          <div>
          Experienced with Git,GitHub,VS Code,AWS EC2 and AWS S3 Deployment
          </div>
          <div>
          Strong grasp of Database Management System (DBMS), Operating System (OS), Algorithm Analysis and Design , Computer Networks and Internet Protocols , Data Structure And Algorithms , Object Oriented Programming
          </div>
          <div>
          Excellent problem-solving skills with Effective communication and Emotional Intelligence
          </div>
        </div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        <div>
          Solved over 500+ Questions on Leetcode with with a Continuous Streak of 300+ days
        </div>
        <div>Achieved over 12 Badges on My Leetcode Profile</div>
        <div>Achieved a Ranking of 1760 in Leetcode Contests</div>
        <div>Became a Pupil in Codeforces with a Rating of 1209</div>
        <div>I was Elected as the Class Representative of my batch for consecutive 2 years , i.e 2021-2023</div>
        </span>
      </div>
    </div>
  );
}

export default About;

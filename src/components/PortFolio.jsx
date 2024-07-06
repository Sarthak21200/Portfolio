import React from "react";
import meraGhar from "../../public/ghar.png";
import urMoney from "../../public/urMoney.png";
import portf from "../../public/orig.jpg";
import ProjectCard from "./ProjectCard"
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: meraGhar,
      name: "HouseBano.com",
      desc:" ",
      live:"https://mera-garh.vercel.app/",
      git:" "
    },
    {
      id: 2,
      logo: urMoney,
      name: "My Money App",
      desc:" ",
      live:" ",
      git:" "
    },
    {
      id: 3,
      logo: portf,
      name: "Portfolio Website",
      desc:" ",
      live:" ",
      git:" "
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <span>
      <h1 className="text-3xl font-bold underline mb-5">Projects</h1>
      <span className="font-semibold">Featured</span>
        <div className="flex flex-wrap justify-around items-center">
          <ProjectCard key={cardItem[0].id} image={cardItem[0].logo} text1={cardItem[0].name} text2={cardItem[0].desc} text3={cardItem[0].live} text4={cardItem[0].git}></ProjectCard>
          <ProjectCard key={cardItem[1].id} image={cardItem[1].logo} text1={cardItem[1].name} text2={cardItem[1].desc} text3={cardItem[1].live} text4={cardItem[1].git}></ProjectCard>
          <ProjectCard key={cardItem[2].id} image={cardItem[2].logo} text1={cardItem[2].name} text2={cardItem[2].desc} text3={cardItem[2].live} text4={cardItem[2].git}></ProjectCard>
          </div>
        </span>
    </div>
  );
}

export default PortFolio;

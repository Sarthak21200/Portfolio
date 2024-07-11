import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import tailwind from "../../public/tailwind.webp";
import typeScript from "../../public/ts.png";
import reac from "../../public/reactjs.png";
import prisma from "../../public/prisma.avif";
import postgres from "../../public/postgres.png";
import node from "../../public/node.png";
import next from "../../public/next.png";
import mongo from "../../public/mongo.png";
import express from "../../public/express-js.png";
import docker from "../../public/images.png"
import turbo from "../../public/turbo.jpg"


function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongo,
      name: "Mongo DB",
    },
    {
      id: 5,
      logo: postgres,
      name: "Postgres",
    },
    {
      id: 6,
      logo: reac,
      name: "React",
    },
    {
      id: 7,
      logo: next,
      name: "Next JS",
    },
    {
      id: 8,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 9,
      logo: typeScript,
      name: "TypeScript",
    },
    {
      id: 10,
      logo: prisma,
      name: "Prisma",
    },
    {
      id: 11,
      logo: node,
      name: "Node JS",
    },
    {
      id: 12,
      logo: express,
      name: "Express",
    },
    {
      id: 13,
      logo: docker,
      name: "Docker",
    },
    {
      id: 14,
      logo: turbo,
      name: "TurboRepo",
    },
  ];
  return (
    <div
      name="Skill Set"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
    
      <div>
        <h1 className="text-3xl font-bold mb-5 underline">Skill Set</h1>
        <br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 my-3">
  {cardItem.map(({ id, logo, name }) => (
    <div
      className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 hover:shadow-current hover:shadow-lg"
      key={id}
    >
      <img src={logo} className="w-[100px] md:w-[150px] rounded-full" alt={name} />
      <div className="mt-2 text-center">
        <div>{name}</div>
      </div>
    </div>
  ))}
</div>

      </div>
      <br></br>
    </div>
  );
}

export default Experiance;

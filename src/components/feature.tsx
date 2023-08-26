import React, { FC } from "react";
import Image from "next/image";

// Interface
interface cont {
  image: any;
  heading: string;
  para: string;
}
const Data: FC<cont> = ({ image, heading, para }) => (
  <div className="text-center md:text-left lg:text-left">
    <Image src={image} alt="" className="m-auto lg:my-3" width={60} height={60} />
    <h4 className="font-bold text-lg">{heading}</h4>
    <p className=" text-slate-600 py-3">{para}</p>
  </div>
);

// Lists
const section = [
  {
    image: "/like.gif",
    heading: "Top rated react landing",
    para: "PickBazar is one of the top rated react ecommece templates in themeforest for almost 4+ years.",
  },
  {
    image: "/add.gif",
    heading: "Highest selling Ecommerce",
    para: "WIth almost 3200+ sales, Pickbazar is the pioneer of react ecommece templates in themeforest",
  },
  {
    image: "/easy.gif",
    heading: "Easy to deploy",
    para: "It’s super easy to deploy, we have provided guide for deploying this template in different platform.",
  },
  {
    image: "/count.gif",
    heading: "Fast Customer Support",
    para: "As an elite author, quick response with customer satisfaction is our main goal",
  },
];
const Features = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center my-20">
      {section.map((item) => (
        <Data key={item.para} image={item.image} heading={item.heading} para={item.para} />
      ))}
    </div>
  );
};

export default Features;
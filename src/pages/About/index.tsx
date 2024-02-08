import Layout from "@/components/ui/Layout";
import VertiLine from "@/pages/About/VertiLine";
import Skills from "../../pages/About/Skills";
import React from "react";
import Image from "next/image";
import image1 from "../../../public/image1.jpg";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { NavItems } from "@/pages/constants/NavItems";

const About = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 item-center h-[auto] w-[auto] px-10 pt-10 gap-4 ">
        <div className="flex col-span-2 justify-center text-xl font-serif pb-7">
          <Breadcrumbs>
            <BreadcrumbItem className="underline" href={NavItems.Home}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem className="underline" href={NavItems.About}>
              About
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="col-span-2">
          <h1 className="flex justify-center text-5xl font-serif pb-5">
            About Me
          </h1>
          <VertiLine />
        </div>

        <div className="flex justify-end pr-10 py-5">
          <Image
            src={image1}
            alt="Picture of the author"
            className="rounded-full"
            width={500}
            height={0}
            quality={100}
          />
        </div>

        <div className="pb-5">
          <Skills />
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import Layout from "@/components/ui/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import certi from "../../../public/certi.png";


const Hire = () => {
  return (
    <Layout>
      <div className="container ">
        <h1 className="flex justify-center text-5xl pt-10 font-serif">
          What I Can Do
        </h1>
        <div className="flex justify-center pt-10 pl-10 pr-10 gap-16 font-serif">
          <div>
            <Card className=" w-[25em] h-[11em]">
              <CardHeader>
                <CardTitle>IT Consultant</CardTitle>
                <CardDescription>
                  I've consult friends and family about their IT problems.
                  Either software problem or hardware problem.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
          <div>
            <Card className="w-[25em] h-[11em]">
              <CardHeader>
                <CardTitle>Web Davelopment</CardTitle>
                <CardDescription>
                  I've been doing web development for 2 years now. I've been
                  using React, Next.js, and Tailwind CSS.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
          <div>
            <Card className="w-[25em] h-[11em]">
              <CardHeader>
                <CardTitle>Graphic Design</CardTitle>
                <CardDescription>
                  I've done graphical designs because of self-interest. School works and projects push me to handle graphic designs.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-center text-5xl font-serif">
          <h1 className="text-5xl pt-10">Expereinces</h1>
        </div>
        <div className="flex justify-center pt-10 pl-10 pr-10 gap-16 font-serif">
          <div>
            <Card className="h-[10em] w-[30em]">
              <CardHeader>
                <CardTitle>On the Job Training(OJT) 2024</CardTitle>
                <CardDescription>
                  Created projects that improve my skills as a Web Developer and
                  as a Database Developer.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-[10em] w-[30em]">
              <CardHeader>
                <CardTitle>
                  Special Program for Employment of Students(SPES) 2023
                </CardTitle>
                <CardDescription>
                I've acquire actual work environment because of SPES Program.
                  Gain knowledge on how things work in the real world.
                </CardDescription>
              </CardHeader>
              <CardContent> 
                  </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-center text-5xl font-serif">
          <h1 className="flex pt-10">
            Certificates
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Hire;

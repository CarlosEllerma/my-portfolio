import React from "react";
import Image from "next/image";
import Layout from "../components/ui/Layout";
import profile from "../../public/profile.jpg";
import { Button } from "../components/ui/button";
import { NavItems } from "./constants/NavItems";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif pt-5 pb-2 underline">
                Full Stack Developer
              </h2>
              <div className="text-6xl font-serif pt-">
                <h1>
                  Hi, I'm <span className="text-primary">Carlos Mari</span>
                </h1>
                <h1>Ellerma</h1>
              </div>
              <div className="flex flex-col md:flex-row pt-3 gap-3">
                <a href="/About">
                  <Button variant="secondary" className="underline font-serif">
                    Get to know me
                  </Button>
                </a>
                <a href={NavItems.Resume}>
                  <Button variant="secondary" className="underline font-serif">
                    Hire me
                  </Button>
                </a>
              </div>
            </div>

            <div className="ml-20">
              <Image
                src={profile}
                alt="Picture of the author"
                className="rounded-full"
                width={360}
                height={0}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import Image from "next/image";
import Layout from "../components/ui/Layout";
import profile from "../../public/profile.png";
import { Button } from "../components/ui/button";
import { NavItems } from "../components/NavItems";
import ContactMe from "@/pages/ContactMe";
import About from "@/pages/About";

export default function Home() {
  return (
    <main>
      <Layout>
        <div className="grid grid-cols-2 items-center mt-24 m-auto gap-24">
          <div className="">
            <Image
              className="ml-auto rounded-full"
              src={profile}
              alt="profile"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h1 className="font-mono text-6xl font-bold tracking-wider text-left whitespace-pre-line leading-normal">
              Carlos Mari <br />
              Ellerma
            </h1>
            <Button
              className="font-mono px-8 text-lg font-bold tracking-wider "
              variant={"outline"}
            >
              Get to know me
            </Button>
          </div>
        </div>

        {/* about section */}
        <div className="pt-56">
        <About />
        </div>
        {/* contact section */}
        <div>
        <ContactMe />
        </div>

      </Layout>
    </main>
  );
}

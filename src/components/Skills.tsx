import React from "react";
import Image from "next/image";
import Csslogo from "../../public/logos/csslogo.png";
import Htmllogo from "../../public/logos/htmllogo.png";
import Jslogo from "../../public/logos/jslogo.png";
import Reactlogo from "../../public/logos/reactlogo.png";
import Nextlogo from "../../public/logos/nextjslogo.png";
import Mysql from "../../public/logos/sqllogo.png";
import { Card, CardContent } from "./ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Skills = () => {
  return (
    <main>
      <div className="pt-14">
        <p className="text-6xl font-mono text-center">Skills</p>
      </div>

      <div className="flex grid-cols-2 gap-20 p-20 justify-center">
        <div>
          <Image src={Csslogo} alt="CSS" height={500} width={500} />
        </div>

        <div>
          <div className="pl-32 pt-28">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image src={Htmllogo} alt="HTML" height={500} width={500} />
                  </CardContent>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image src={Csslogo} alt="CSS" height={500} width={500} />
                  </CardContent>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image
                      src={Jslogo}
                      alt="Javascript"
                      height={500}
                      width={500}
                    />
                  </CardContent>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image
                      src={Reactlogo}
                      alt="React"
                      height={500}
                      width={500}
                    />
                  </CardContent>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image
                      src={Nextlogo}
                      alt="Next.js"
                      height={500}
                      width={500}
                    />
                  </CardContent>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CardContent>
                    <Image src={Mysql} alt="MySQL" height={600} width={600} />
                  </CardContent>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
          <p className="font-mono text-xl">Languages that i learn througout studying in college and<br />
           by some self-learning and also by the help of Techstacks</p>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;

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
    <div>
       <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Htmllogo} alt="HTML" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Csslogo} alt="CSS" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Jslogo} alt="Javascript" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Reactlogo} alt="React" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Nextlogo} alt="Next.js" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent>
                <Image src={Mysql} alt="MySQL" />
              </CardContent>
            </Card>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default Skills;

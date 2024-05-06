import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { NavItems } from "@/pages/constants/NavItems";

const ContactMe = () => {
  return (
    <div className="flex grid-cols-2 gap-20 justify-center pt-20 p-10">
      {/* Skills */}
        <div>
          <Card className="font-mono h-[510px] w-[40em]">
            <CardHeader>
              <CardTitle>Let's keep in touch</CardTitle>
              <CardDescription>
                I am open for suggestion or just to have a chat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter Name" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" placeholder="Example@email.com" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Subject</Label>
                    <Input id="name" placeholder="Enter Subject" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea placeholder="Type your message here." />
                  </div>
                  <div className="flex flex-col space-y-1.5"></div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button variant={"outline"}>Submit</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-[440px] w-[40em]">
            <CardHeader>
              <CardTitle>
                <p className="font-mono ml-7 pb-5">Social Media Profiles</p>
              </CardTitle>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <a
                      href="https://www.facebook.com/carlos.mari.7524"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CiFacebook size={40} />
                      <span className="pl-2 underline text-xl">
                        : Carlos Mari Bautista Ellerma
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/carlos._.mari/"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaInstagram size={40} />
                      <span className="pl-2 underline text-xl">
                        : carlos._.mari
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://twitter.com/CarlosEllerma"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaXTwitter size={40} />
                      <span className="pl-2 underline text-xl">
                        : Carlos Ellerma
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://gmail.com"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MdOutlineAlternateEmail size={40} />
                      <span className="pl-2 underline text-xl">
                        : carlosm.ellerma@gmail.com
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/CarlosEllerma"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaGithub size={40} />
                      <span className="pl-2 underline text-xl">
                        : Carlos Mari B. Ellerma
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/carlos-mari-ellerma-584b332a7/"
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaLinkedin size={40} />
                      <span className="pl-2 underline text-xl">
                        : Carlos Mari Ellerma
                      </span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
    </div>
  );
};

export default ContactMe;

import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const Skills = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>
            This is my skills that i acquire along the way
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex-row gap-2">
            <div className="pt-2">
              <h1 className="pb-2">HTML</h1>
              <Progress title="HTML" value={80} className="w-auto" />
            </div>

            <div className="pt-2">
              <h1 className="pb-2">CSS</h1>
              <Progress title="CSS" value={60} className="w-auto" />
            </div>

            <div className="pt-2">
              <h1 className="pb-2">JavaScript</h1>
              <Progress title="JavaScript" value={65} className="w-auto" />
            </div>

            <div className="pt-2">
              <h1 className="pb-2">React</h1>
              <Progress title="React" value={20} className="w-auto" />
            </div>

            <div className="pt-2">
              <h1 className="pb-2">Nextjs</h1>
              <Progress title="React" value={20} className="w-auto" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;

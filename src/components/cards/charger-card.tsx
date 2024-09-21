import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ChargerCard = () => {
  return (
    <section className="flex flex-row gap-4">
      <Image src="/charging-station.webp" alt="" height={100} width={100} />
      <Card>
        <CardHeader>
          <CardTitle>{"Charger Name"}</CardTitle>
          <CardDescription>{"cpId"}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <div>
            <span>Connection Status</span>
            <span>
              <Badge variant="outline">
                <span className="flex h-2 w-2 rounded-full mr-2 bg-lime-600"></span>
                {"Online"}
              </Badge>
            </span>
          </div>
          <div>
            <span>OCPP Version</span>
            <span>{"1.6"}</span>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ChargerCard;

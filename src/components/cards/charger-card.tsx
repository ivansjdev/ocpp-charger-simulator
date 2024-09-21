"use client"
import Image from "next/image";
import { connect, disconnect } from "@/services/websocket";
import { useConnectionStore } from "@/stores/connection";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const ChargerCard = () => {
  const handleConnect = () => {
    connect();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const handleUrl = (url: string) => {
    const { setUrl } = useConnectionStore.getState();
    setUrl(url);
  }

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

          <Input
            type={"text"}
            onChange={(e) => handleUrl(e.target.value)}
            placeholder={"ws://localhost:8080"}
          />

        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" onClick={ handleConnect }>Connect</Button>
          <Button variant="outline" onClick={ handleDisconnect }>Disconnect</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ChargerCard;

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Input, Button, Link} from "@nextui-org/react";
import { User } from "lucide-react";
import NextLink from "next/link";

export default function App() {
  return (
    <Card className="max-w-[500px] mx-auto mt-10">
      <CardHeader className="flex gap-3 justify-center">
             <User size={30}/> 
          <p className="text-2xl">Login</p>
      </CardHeader>
      <Divider/>
      <CardBody className="flex flex-col gap-5 px-6 items-center" >
    
      <Input  type="text" variant="faded" label="Email"></Input>
      <Input type="password" variant="faded" label="Password"></Input>
      <Button  color="success" className="self-center"  >Submit</Button>
    
      </CardBody>
      <Divider/>
      <CardFooter className="px-6">   
         <p>Don&apos;t have an account?</p>
         <Link as={NextLink} href="/signup" className="ml-2" >Signup</Link>
      </CardFooter>
    </Card>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Button,
  Link,
} from "@nextui-org/react";
import { User } from "lucide-react";
import NextLink from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const sendData = async () => {

    const errorObj= {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     errorObj.email= "Email Id is not valid"
    }

    if (password.length < 4) {
     errorObj.password= "Password must be at least 4 characters long"

    }
    if (password != repassword) {
     errorObj.repassword= "passwords do not match"

    }
 if(Object.keys(errorObj).length>0){
     setErrors(errorObj)
     return
 }
    try {
       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, { email, password });
        router.replace("/login");
    
    } catch (error) {
     const err= error.response.data
     if(err)setErrors(err)
    }
  };
  return (
    <Card className="max-w-[500px] mx-auto mt-20">
      <CardHeader className="flex gap-3 justify-center">
        <User size={30} />
        <p className="text-2xl">SignUp</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 px-6 items-center">
        <Input
          type="text"
          variant="faded"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({...errors, email:""})
          }}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        ></Input>
        <Input
          type="password"
          variant="faded"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({...errors, password:""})
          }}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        ></Input>
        <Input
          type="password"
          variant="faded"
          label="Re-Enter Password"
          onChange={(e) => {
            setRepassword(e.target.value);
            setErrors({...errors, repassword:""})
          }}
          isInvalid={!!errors.repassword}
          errorMessage={errors.repassword}
        ></Input>
        <Button color="success" className="self-center" onClick={sendData}>
          Submit
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="px-6">
        <p>Already Registered?</p>
        <Link as={NextLink} href="/login" className="ml-2">
          Login
        </Link>
      </CardFooter>
    </Card>
  );
}

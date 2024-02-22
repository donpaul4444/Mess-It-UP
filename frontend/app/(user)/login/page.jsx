"use client"
import React ,{useState} from "react";

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
import {useDispatch} from"react-redux"
import { addUser, removeUser } from "@/Redux/userSlice";
import {toast} from "react-hot-toast";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const router = useRouter();
  const dispatch=useDispatch()

 async function sendData() {
    const errorObj = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorObj.email = "Email Id is not valid";
    }
    if (password.length < 4) {
      errorObj.password = "Password must be at least 4 characters long";
    }

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
      return
    }

    try {
      let a=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`,{email,password})
     dispatch(addUser(a.data.user))
      router.replace("/");
    } catch (error) {
      console.log(error);
      let err= error.response?.data?.errors
      if(err)return setErrors(err)

      err=error.response?.data?.message||"something went wrong"
      toast.error(err)
      
    }
  }
  return (
    <Card className="max-w-[500px] mx-auto mt-20">
      <CardHeader className="flex gap-3 justify-center">
        <User size={30} />
        <p className="text-2xl">Login</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 px-6 items-center">
        <Input
          type="text"
          variant="faded"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
          isInvalid={!!errors?.email}
          errorMessage={errors?.email}
        ></Input>
        <Input type="password" variant="faded" label="Password" onChange={(e)=>{
          setPassword(e.target.value)
          setErrors({...errors,password:""})
        }}
        isInvalid={!!errors?.password}
        errorMessage={errors?.password}
        ></Input>
        <Button color="success" className="self-center" onClick={sendData}>
          Submit
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="px-6">
        <p>Don&apos;t have an account?</p>
        <Link as={NextLink} href="/signup" className="ml-2">
          Signup
        </Link>
      </CardFooter>
    </Card>
  );
}

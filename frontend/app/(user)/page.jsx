"use client"
import React from "react";
import { Button, Image, Spacer } from "@nextui-org/react";
import { useRouter } from "next/navigation"
export default function App() {
  const router= useRouter()
  return (
    <div className="relative flex mt-24 justify-around px-5 items-center flex-wrap ">
      <div className="max-w-[500px] flex-grow">
        <p className="text-[#e62020] text-5xl font-semibold">Fresh,Home-Cooked Meals</p>
        <Spacer y={4} ></Spacer>
        <p className="text-5xl ">Delivered To Your Door</p>
        <Spacer y={4} ></Spacer>
        <p className="text-gray-600 text-lg">
          Our talented home chefs prepare delicious meals made with
          locally-sourced ingredients, so you can enjoy home style food in the
          comfort of your own home.
        </p>
        <Button
          radius="full"
          size="lg"
          color="primary"
          className="mt-10 text-white text-lg"
          onClick={()=> router.push("/products")}
        >
          Order Now
        </Button>
      </div>
      <img width={500} alt="NextUI hero Image" src="/pngwing.com.png" className="hover:rotate-45 duration-[10000ms]"/>
    </div>
  );
}

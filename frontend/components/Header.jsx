"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { CookingPot, Search } from "lucide-react";
import {useRouter} from "next/navigation";

export default function Header() {
  const router= useRouter()
  return (
    <Navbar isBordered maxWidth="2xl"  className="border-0">
      <NavbarContent justify="start" className="flex items-center">
      <CookingPot size={40} color="#eb0000" className="hidden md:block" />
        <NavbarItem>
          <Link href="/" className=" font-bold text-inherit text-red-600 text-3xl ml-5">
            MESSITUP
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center  flex" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[30rem] min-w-[200px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search size={18} />}
          type="search"
        />
         <NavbarItem className="hidden md:block">
          <Button onClick={()=> router.push("/login")} color="primary" size="sm" variant="bordered">Login</Button>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Button onClick={()=> router.push("/signup")} color="primary" size="sm" variant="bordered">Signup</Button>
        </NavbarItem>
        <Dropdown placement="bottom-end" >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log In
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

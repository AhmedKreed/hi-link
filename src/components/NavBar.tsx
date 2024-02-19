"use client";
import Link from "next/link";
import Image from "next/image";
import hiLink from "@/public/hilink-logo.svg";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import usersvg from "/public/user.svg";
import menu from "@/public/menu.svg";
import { useState } from "react";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={hiLink} alt={"hiLink"} width={74} height={29} />
      </Link>
      <ul className="max-lg:hidden h-full flex gap-12">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="max-lg:hidden block">
        <Button
          title={"Login"}
          style={"btn_dark_green"}
          icon={usersvg}
          type={"button"}
        />
      </div>
      <Image
        src={menu}
        alt={"menu"}
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />
      {toggle ? (
        <ul className="lg:hidden flex flex-col gap-12 bg-gray-10 absolute right-[1.5rem] bottom-[-438px] p-12">
          {NAV_LINKS.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default NavBar;

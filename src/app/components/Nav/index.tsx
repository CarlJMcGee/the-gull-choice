"use client";

import Link from "next/link";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const router = useRouter();
  const path = usePathname();
  const pathArr = path?.split("/");
  pathArr?.pop();

  return (
    <nav className="m-4 flex flex-row">
      <Link href={"/"}>
        <motion.button
          initial={{
            scale: "100%",
          }}
          whileHover={{
            scale: "110%",
            transition: { type: "tween", duration: 0.2 },
          }}
          className="mx-3 rounded-md bg-zinc-400 px-3 py-1 text-lg text-white shadow-lg hover:bg-zinc-700"
        >
          Home
        </motion.button>
      </Link>
      {path !== "/" && (
        <motion.button
          initial={{
            scale: "100%",
          }}
          whileHover={{
            scale: "110%",
            transition: { type: "tween", duration: 0.2 },
          }}
          onClick={() => router.push(pathArr?.join("/")!)}
          className="mx-3 rounded-md bg-zinc-400 px-3 py-1 text-lg text-white shadow-lg hover:bg-zinc-700"
        >
          Back
        </motion.button>
      )}{" "}
    </nav>
  );
}

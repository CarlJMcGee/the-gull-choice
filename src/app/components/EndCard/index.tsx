"use client";

import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

export interface IEndCardProps {
  prompt: [title: string, body: string];
}

export default function EndCard({ prompt }: IEndCardProps) {
  return (
    <>
      <motion.div
        className="m-10 flex flex-col justify-center text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <h3 className="text-4xl">{prompt[0]}</h3>
        <h4 className="w-2/3 self-center text-3xl">{prompt[1]}</h4>
      </motion.div>
      <div className="flex justify-center">
        <Link href={"/"} className="flex w-1/4">
          <motion.div
            className="mb-10 w-full rounded-md bg-slate-400 p-3 text-center text-white shadow-lg hover:bg-slate-700"
            initial={{ scale: "80%", opacity: 0 }}
            animate={{ scale: "100%", opacity: 100 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            whileHover={{
              scale: "110%",
              transition: { type: "tween", duration: 0.2 },
            }}
          >
            {/* <Paper className="w-full bg-slate-400 p-3 text-center text-white hover:bg-slate-700"> */}
            Start over
            {/* </Paper> */}
          </motion.div>
        </Link>
      </div>
    </>
  );
}

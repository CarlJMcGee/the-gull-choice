"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface IChoiceButtonProps {
  title: string;
  body: string;
  link: string;
}

export default function ChoiceButton({
  title,
  body,
  link,
}: IChoiceButtonProps) {
  return (
    // <Grid item xs={12} md={6} className="flex justify-center">
    <div className="flex justify-center text-center sm:m-1 md:m-3">
      <Link href={link} className="m-2 w-full">
        <motion.div
          className="rounded-md bg-slate-400 p-5 text-white shadow-lg hover:bg-slate-700"
          initial={{ scale: "80%", opacity: 0 }}
          animate={{ scale: "100%", opacity: 100 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          whileHover={{
            scale: "110%",
            transition: { type: "tween", duration: 0.3 },
          }}
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{body}</p>
        </motion.div>
      </Link>
    </div>
    // </Grid>
  );
}

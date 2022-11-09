import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
        <Typography className="text-4xl">{prompt[0]}</Typography>
        <Typography className="text-3xl">{prompt[1]}</Typography>
      </motion.div>
      <div className="flex justify-center">
        <Link href={"/"} className="flex w-1/4">
          <motion.div
            className="w-full"
            initial={{ scale: "80%", opacity: 0 }}
            animate={{ scale: "100%", opacity: 100 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            whileHover={{
              scale: "110%",
              transition: { type: "tween", duration: 0.3 },
            }}
          >
            <Paper className="w-full bg-slate-400 p-3 text-center text-white hover:bg-slate-700">
              Start over
            </Paper>
          </motion.div>
        </Link>
      </div>
    </>
  );
}

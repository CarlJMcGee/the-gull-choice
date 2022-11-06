import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

export interface IEndCardProps {
  prompt: [title: string, body: string];
}

export default function EndCard({ prompt }: IEndCardProps) {
  return (
    <>
      <div className="m-10 flex flex-col justify-center text-center">
        <Typography className="text-4xl">{prompt[0]}</Typography>
        <Typography className="text-3xl">{prompt[1]}</Typography>
      </div>
      <div className="flex justify-center">
        <Link href={"/"} className="flex w-1/4">
          <Paper className="w-full bg-slate-400 p-3 text-center text-white">
            Start over
          </Paper>
        </Link>
      </div>
    </>
  );
}

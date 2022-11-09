import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "next/link";

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
    <>
      <Grid item xs={6} className="flex justify-center">
        <Link href={link} className="w-full">
          <Paper className="w-full bg-slate-400 p-3 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{body}</p>
          </Paper>
        </Link>
      </Grid>
    </>
  );
}

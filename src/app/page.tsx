"use client";

import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { type NextPage } from "next";
import Image from "next/image";
import QuestionButton from "../components/QuestionButton";

import gull from "./assets/gull-milk(cropped).jpg";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col">
        <div className="m-10 flex flex-col justify-center text-center">
          <Typography className="text-4xl">
            You're Traveling through the forest
          </Typography>
          <Typography className="text-3xl underline">
            when you happen apon a rouge druid miling his gull.
          </Typography>
        </div>
        <div className="m-5 flex flex-row justify-center">
          <Image src={gull} alt="the gull and the druid" width={500} />
        </div>
        <div className="flex justify-center">
          <Grid container spacing={2} className="mx-10 w-1/2 text-center">
            <QuestionButton title="T1" body="Q1" />
            <QuestionButton title="T2" body="Q2" />
            <QuestionButton title="T3" body="Q3" />
            <QuestionButton title="T4" body="Q4" />
          </Grid>
        </div>
      </main>
    </>
  );
};

export default Home;

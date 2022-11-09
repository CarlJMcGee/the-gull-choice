"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { type NextPage } from "next";
import ChoiceButton from "../../components/ChoiceButton";

const Home: NextPage = () => {
  const choices: IChoice[] = [
    {
      title: "Be Still.",
      body: "Assume his vision has been clouded after years of consuming the milk.",
    },
    {
      title: "Turn Back.",
      body: "Your conjuring levels are no match for this forbidden incantation.",
    },
    {
      title: "Unsheath Your Lute.",
      body: "Award the pair with a pleasant carol.",
    },
    {
      title: "Confront Him.",
      body: "Politly ask for a glass.",
    },
  ];
  return (
    <>
      <main className="flex flex-col">
        <div className="m-10 flex flex-col justify-center text-center">
          <Typography className="text-4xl">
            You're Traveling through the forest
          </Typography>
          <Typography className="text-3xl">
            when you happen apon a rouge druid miling his gull.
          </Typography>
        </div>
        <div className="flex justify-center">
          <Grid container spacing={2} className="mx-10 w-1/2 text-center">
            {choices.map(({ title, body }, index) => (
              <ChoiceButton
                key={index}
                title={title}
                body={body}
                link={`/${index}`}
              />
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
};

export default Home;

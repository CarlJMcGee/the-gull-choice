import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ChoiceButton from "../ChoiceButton";
import { motion } from "framer-motion";

export interface IPromptProps {
  prompt: [title: string, body: string];
  choices: IChoice[];
  linkHead: string;
}

export default function Prompt({ prompt, choices, linkHead }: IPromptProps) {
  return (
    <>
      <motion.main
        className="flex flex-col"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="m-10 flex flex-col justify-center text-center">
          <Typography className="text-4xl">
            {prompt[0]}
            {/* He hands you a cloudy glass, still warm. */}
          </Typography>
          <Typography className="text-3xl">
            {prompt[1]}
            {/* You take in the nose of the drink: it smells as moss tastes. When
            you take a sip, it reminds you of summers spent in the northern
            fields, eating raw sugar beats straight from the ground still
            saturated in manure and worm. You finish the glass and smile at the
            druid, "Thank you." The druid returns you a toothy smile devoid of
          teeth, "The milk was within you all along. */}
          </Typography>
        </div>
        <div className="flex justify-center">
          <Grid container spacing={2} className="mx-10 w-1/2 text-center">
            {choices.map(({ title, body }, index) => (
              <ChoiceButton
                key={index}
                title={title}
                body={body}
                link={`${linkHead}${index}`}
              />
            ))}
          </Grid>
        </div>
      </motion.main>
    </>
  );
}

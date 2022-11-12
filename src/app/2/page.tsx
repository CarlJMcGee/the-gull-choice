"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChoiceButton from "../../components/ChoiceButton";
import Prompt from "../../components/Prompt";

const Page = () => {
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
      <Prompt
        linkHead=""
        prompt={["", ``]}
        choices={[
          {
            title: "",
            body: "",
          },
        ]}
      />
    </>
  );
};

export default Page;

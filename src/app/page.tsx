"use client";

import { type NextPage } from "next";
import Prompt from "../components/Prompt";

const Home: NextPage = () => {
  return (
    <>
      <Prompt
        linkHead="/"
        prompt={[
          "You're Traveling through the forest",
          "when you happen upon a rouge druid miling his gull.",
        ]}
        choices={[
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
        ]}
      />
    </>
  );
};

export default Home;

("");

import Prompt from "../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead="/3/3/"
        prompt={[
          `The Druid and gull sit patiently,`,
          `as you finish your 45 minute routine. They politly clap as you complete your final move. 
        "Very cool. Do you have any other talents?"`,
        ]}
        choices={[
          {
            title: "Try an Impression.",
            body: "Your friends always said you kinda sounded like that guy from that one show.",
          },
          {
            title: "Take Up Juggling.",
            body: "You've never tried it before, but how hard can it be, right?",
          },
          {
            title: "Set your Soul Free",
            body: "Sing the song of your heart and believe.",
          },
          {
            title: "Give into the Voices",
            body: "shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          },
        ]}
      />
    </>
  );
}

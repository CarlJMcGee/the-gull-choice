("");

import Prompt from "../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead="/3/0/"
        prompt={[
          "When you take a sip,",
          "it reminds you of summers spent in the northern fields, eating raw sugar beats straight from the ground still saturated in manure and worm.",
        ]}
        choices={[
          {
            title: "Raise Concern.",
            body: "Spit the milk into the gulls face.",
          },
          {
            title: "Finish the Fight",
            body: "Drink the rest of the now lukewarm solution.",
          },
          {
            title: "Read",
            body: "Stare deeply into the cloudy glass to see what shall and shall not be.",
          },
          {
            title: "Pay it Forward.",
            body: "Offer the rest to the halfling.",
          },
        ]}
      />
    </>
  );
}

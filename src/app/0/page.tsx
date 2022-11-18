import Prompt from "../components/Prompt";

const Page = () => {
  return (
    <>
      <Prompt
        linkHead="/0/"
        prompt={[
          "You freeze; you will every muscle in your body to stop,",
          `as you know even the slightest ball twitch will alert the crust cloaked man. 
        The druid stops his milking and begins to sniff the air.`,
        ]}
        choices={[
          {
            title: "Get Him Off Your Sent.",
            body: "Use Your Ventriloquist's Fart as a Distraction.",
          },
          {
            title: "Pocket Sand!",
            body: "Pocket Sand!",
          },
          {
            title: "Keep it Up.",
            body: "He Probably Hasn't Seen You Yet, So Just Stay Still.",
          },
          {
            title: "Be Polite.",
            body: "Walk Up and Introduce Yourself",
          },
        ]}
      />
    </>
  );
};

export default Page;

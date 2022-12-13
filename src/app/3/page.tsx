("");

import Prompt from "../components/Prompt";

const Page = () => {
  return (
    <>
      <Prompt
        linkHead="/3/"
        prompt={[
          "He hands you a cloudy glass, still warm.",
          "You take in the nose of the drink: it smells as moss tastes.",
        ]}
        choices={[
          {
            title: "Investigate the Drink.",
            body: "Take a swig of the milk, savor the taste.",
          },
          {
            title: "Be Assertive.",
            body: "Ask the druid if he has ice.",
          },
          {
            title: "Take the Initiative.",
            body: "Throw the milk in the druid's face and steal the gull.",
          },
          {
            title: "Get Moving.",
            body: "Perform the dance of a thousand thank yous as you choke down the full glassful at once.",
          },
        ]}
      />
    </>
  );
};

export default Page;

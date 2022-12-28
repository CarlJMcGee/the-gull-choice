("use client");

import Prompt from "../components/Prompt";

const Page = () => {
  return (
    <>
      <Prompt
        linkHead="/1/"
        prompt={[
          "As you turn to run away,",
          `you stop to think about what your doing. You know you're no match for this maleficent malefactor,
        but deep down you know you will never forgive yourself if you walk away now, after everything
        you've been through to get you here. So what will you do:`,
        ]}
        choices={[
          {
            title: "Be Strong.",
            body: "Turn and face this menace head on. You know what you must do.",
          },
          {
            title: "Don't be Strong",
            body: "Do the opposite of that other thing I said.",
          },
        ]}
      />
    </>
  );
};

export default Page;

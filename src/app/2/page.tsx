import Prompt from "../components/Prompt";

const Page = () => {
  return (
    <>
      <Prompt
        linkHead="/2/"
        prompt={[
          "You carefully pull your lute from its scabbard,",
          `and as you do, the Druid and gull crane their neck in your direction. Taking in a deep
          breath, you start your ditty.`,
        ]}
        choices={[
          {
            title: "Wonder Wall",
            body: "",
          },
          {
            title: "Freebird",
            body: "",
          },
          {
            title: "Piano Man",
            body: "",
          },
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

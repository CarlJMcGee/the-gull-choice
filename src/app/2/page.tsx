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
            title: "Free Bird",
            body: "",
          },
          {
            title: "Piano Man",
            body: "",
          },
          {
            title: "Deja Vu(Extended ver.)",
            body: "",
          },
        ]}
      />
    </>
  );
};

export default Page;

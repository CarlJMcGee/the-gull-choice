import Prompt from "../components/Prompt";

const Page = () => {
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
          {
            title: "",
            body: "",
          },
          {
            title: "",
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

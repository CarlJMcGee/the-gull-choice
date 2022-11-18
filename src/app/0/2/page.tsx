import Prompt from "../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead=""
        prompt={[``, ``]}
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
}

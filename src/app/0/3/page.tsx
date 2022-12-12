import Prompt from "../../components/Prompt";

export default function Page() {
  return (
    <>
      <Prompt
        linkHead=""
        prompt={[
          `You approach the duo and extend your hand,`,
          `"Hey, I'm just passin' through here, what are your names?" The druid meets your 
          handshake and says, "Salutations good sir, my name is Phileas Fogg and this is my 
          loyal valet, Jean Passepartout. We are on a mission to circumnavigate the globe in
          80 days or less. A steep challenge, I know, but together I know we can overcome anything.
          As it so happens, we are a bit lost in these woods, could you pont the way toward the nearest
          town?`,
        ]}
        choices={[
          {
            title: "Go North.",
            body: "Toward the poles. It'll be faster to go up and over.",
          },
          {
            title: "Go West",
            body: "",
          },
          {
            title: "Go South",
            body: "",
          },
          {
            title: "Go East",
            body: "",
          },
        ]}
      />
    </>
  );
}

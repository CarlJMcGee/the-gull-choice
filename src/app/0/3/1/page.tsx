import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          `Fogg and Passepartout ride their way across the Trans-Siberian Railway,`,
          `when the valet meets a young nobel girl, Roza, hopelessly in love with a peasant boy named Jehk.
      While Roza sneaks into the fourth class car, Passepartout attempts to cover for her to her mother,
      alas to no avail. Roza's mother forbids her from seeing Jehk and locks her in her quarters. 
      Unbeknown to the mother, however, Jehk disguises himself as a first class server bringing
      Roza her meals for the duration of the  trip. Upon reaching the Karimskaya station, 
      Roza and Jehk manage to escape the train into the city to elope in peace. Passepartout and Fogg
      finish their journey, finally returning home to London. The harrowing
      journey around the globe would go on to inspire one of the most famous stories ever put to print.`,
        ]}
      />
    </>
  );
}

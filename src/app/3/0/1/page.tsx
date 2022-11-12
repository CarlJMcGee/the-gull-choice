"use client";

import EndCard from "../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          "You finish the glass and smile at the druid,",
          '"Thank you." The druid returns you a toothy smile devoid of teeth, "The milk was within you all along."',
        ]}
      />
    </>
  );
}

"use client";

import EndCard from "../../../../../components/EndCard";

export default function Page() {
  return (
    <>
      <EndCard
        prompt={[
          '"What?"',
          `"I don't understand what you're asking. Who are you and how did you get my number? 
        Please do not call my again or I'll have to get the police involved. Goodbye. *click*"`,
        ]}
      />
    </>
  );
}

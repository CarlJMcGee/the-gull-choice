"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Prompt from "../../components/Prompt";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/0/");
  }, [router]);
  return <></>;
}

("");

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/3/1`);
  }, [router]);
  return <div></div>;
}

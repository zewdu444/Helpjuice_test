"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline")
      .then((module) => {
        const HSStaticMethods = module.HSStaticMethods;
        setTimeout(() => {
          HSStaticMethods.autoInit();
        }, 100);
      })
      .catch((error) => {
        console.error("Error importing preline/preline:", error);
      });
  }, [path]);

  return null;
}

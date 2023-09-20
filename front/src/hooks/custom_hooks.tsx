"use client";
import { useEffect, useState } from "react";

export function useNomoState(nomoGetterFunction: () => Promise<any>) {
  const [nomoState, setNomoState] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    nomoGetterFunction()
      .then((valueFromNomo) => {
        setNomoState(valueFromNomo);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setNomoState(e);
        setLoading(true);
      });
  }, [nomoGetterFunction]);
  return [nomoState, loading];
}

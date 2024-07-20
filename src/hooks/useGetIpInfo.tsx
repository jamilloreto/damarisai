import { usePromptsStore } from "@/store";
import { useEffect, useState } from "react";

export function useGetIpInfo() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { setPrompt } = usePromptsStore();

  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const res = await fetch("/api/ipinfo", {
          cache: "force-cache",
        });

        if (res.status !== 200) {
          setLoading(false);
          setError(true);
          return;
        }
        const data = await res.json();
        setPrompt({
          country: data.country,
          city: data.city,
          region: data.region,
        });
        setLoading(false);
      } catch (_) {
        setLoading(false);
        setError(true);
      }
    };

    getIpInfo();
  }, [setPrompt]);
  return { loading, error };
}

import { useEffect, useRef, useState } from "react";

interface UseMountProps {
  opened: boolean;
}

export const useMount = <T extends HTMLElement>({ opened }: UseMountProps) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleTransitionEnd = () => {
      if (!opened) setMounted(false);
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [opened]);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    }
  }, [opened, mounted]);

  return { mounted, ref };
};

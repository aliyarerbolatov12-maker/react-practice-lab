import { useEffect } from "react";

export default function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const clickedOutside = refs.every(
        (ref) => !ref.current || !ref.current.contains(event.target as Node)
      );

      if (clickedOutside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refs, callback]);
}

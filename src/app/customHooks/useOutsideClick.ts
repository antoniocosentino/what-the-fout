import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // if click is in the element we don't trigger the callback
      if (event.target === ref.current) {
        return;
      }
      callback();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return ref;
};

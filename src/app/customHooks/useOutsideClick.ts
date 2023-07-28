import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  // TODO: I'm using any here, but ideally I should find a way to pass the type dynamically
  const ref = useRef<any>(null);

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

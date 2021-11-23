import React, { FC, RefObject, SyntheticEvent } from "react";
import useEventListener from "./useEventListener";

const useOnClickOutside = (ref: RefObject<HTMLElement>, callback: (e: Event) => void) => {
  useEventListener("click", (e: any) => {
    if (ref.current == null || ref.current.contains(e.target) || ref.current === e.target) return;
    callback(e);
  });
};

export default useOnClickOutside;

import { useEffect, useRef, useState } from "react";

const useStateModified = (initalState:any) => {
  const [state, setState] = useState(initalState);
  const prevState = useRef(initalState);

  useEffect(() => {
    prevState.current = state;
  }, [state]);

  return [state, setState, prevState.current];
};

export default useStateModified;
import { useLayoutEffect, useRef } from "react";
import { DependencyList, EffectCallback } from "react";

const useUpdateLayoutEffect = (callback: EffectCallback, dependencies?: DependencyList) => {
  const didMount = useRef(false);

  useLayoutEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
  }, dependencies);
};

export default useUpdateLayoutEffect;

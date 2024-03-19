import { useEffect, useRef } from "react";
import { DependencyList, EffectCallback } from "react";

const useUpdateEffect = (callback: EffectCallback, dependencies?: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
  }, dependencies);
};

export default useUpdateEffect;

import { ForwardedRef, useEffect, useRef } from 'react';

export const useForwardedRef = (ref: ForwardedRef<HTMLElement>) => {
  const innerRef = useRef(null);
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(innerRef.current);
      } else {
        ref.current = innerRef.current;
      }
    }
  });

  return innerRef;
};

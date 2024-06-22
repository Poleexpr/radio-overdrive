'use client';

import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

import { UseTextColoredAnimation, UseTextOpacityAnimation } from '@/utils';

interface AnimationTextWrapperProps {
  children: ReactNode;
}

export const AnimationTextWrapper: FC<AnimationTextWrapperProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  UseTextColoredAnimation(ref);
  UseTextOpacityAnimation(ref);

  return <div ref={ref}>{children}</div>;
};

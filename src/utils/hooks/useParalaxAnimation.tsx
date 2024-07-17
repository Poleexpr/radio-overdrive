'use client';

import type { ReactRef } from '@gsap/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const UseParalaxAnimation = (ref: ReactRef) =>
  useGSAP(
    () => {
      const spanArray: HTMLElement[] = gsap.utils.toArray('.layer');
      spanArray.forEach((layer: HTMLElement) => {
        ScrollTrigger.create({
          trigger: layer,
          start: '0px center',
          onEnter: () => layer.classList.add('backgroundAnimation'),
        });
      });
    },
    { scope: ref },
  );

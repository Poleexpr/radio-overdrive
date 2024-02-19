'use client';

import classnames from 'classnames';
import type { FC, ReactNode } from 'react';
import { Element } from 'react-scroll';

interface AnchorProps {
  name: string;
  children: ReactNode;
  className?: string;
}

export const Anchor: FC<AnchorProps> = ({ name, children, className }) => (
  <Element className={classnames('element', className)} name={name}>
    {children}
  </Element>
);

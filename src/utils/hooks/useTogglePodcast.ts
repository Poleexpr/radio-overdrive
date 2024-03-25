'use client';

import { useState } from 'react';

export const useTogglePodcast = (initialValue: boolean = false) => {
  const [showPodcast, setShowPodcast] = useState(initialValue);

  const togglePodcast = () => {
    setShowPodcast((prevShowPodcast) => !prevShowPodcast);
  };

  return [showPodcast, togglePodcast];
};

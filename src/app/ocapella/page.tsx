import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Footer } from '@/components';
import { fetchEpisodes } from '@/utils';

import { Ocapella } from './Ocapella';
import styles from './page.module.scss';

const InitialData = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['episodes'],
    queryFn: fetchEpisodes,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className={styles.container}>
        <Ocapella />
      </main>
      <Footer />
    </HydrationBoundary>
  );
};

export default InitialData;

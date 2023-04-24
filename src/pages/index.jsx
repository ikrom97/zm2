import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppRoute } from '@/const';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(AppRoute.Quotes)
  }, [router]);

  return <PageWrapper></PageWrapper>;
}

export default Home;

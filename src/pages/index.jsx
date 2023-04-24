import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppRoute } from '@/const';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import QuotesScreen from '@/components/screens/quotes-screen/quotes-screen';

function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(AppRoute.Quotes)
  // }, [router]);

  return (
    <PageWrapper withSidebar>
      <QuotesScreen />
    </PageWrapper>
  );
}

export default Home;

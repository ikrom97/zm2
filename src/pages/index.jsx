import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import HomeScreen from '@/components/screens/home-screen/home-screen';

function Home() {
  return (
    <PageWrapper withSidebar>
      <HomeScreen />
    </PageWrapper>
  );
}

export default Home;

import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import QuotesScreen from '@/components/screens/quotes-screen/quotes-screen';

function index() {
  return (
    <PageWrapper withSidebar>
      <QuotesScreen />
    </PageWrapper>
  );
}

export default index;

import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import QuotesSelectedScreen from '@/components/screens/quotes-selected-screen/quotes-selected-screen';

function ThoughtsSelected() {
  return (
    <PageWrapper withSidebar>
      <QuotesSelectedScreen />
    </PageWrapper>
  );
}

export default ThoughtsSelected;

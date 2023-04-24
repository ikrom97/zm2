import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import TagsScreen from '@/components/screens/tags-screen/tags-screen';

function Tags() {
  return (
    <PageWrapper withSidebar>
      <TagsScreen />
    </PageWrapper>
  );
}

export default Tags;

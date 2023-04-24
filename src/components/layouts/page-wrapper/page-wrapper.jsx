import React from 'react';
import Head from 'next/head';
import { PageContainer } from './styled';
import Sidebar from '../sidebar/sidebar';
import SelectedPost from '@/components/ui/selected-post/selected-post';
import Header from '../header/header';
import Footer from '../footer/footer';

function PageWrapper({ children, withSidebar }) {
  return (
    <>
      <Head>
        <title>Authors site Zafar Mirzo</title>
      </Head>

      <Header />

      <PageContainer>
        {withSidebar && <Sidebar />}
        {children}
      </PageContainer>

      <Footer />

      <SelectedPost />
    </>
  );
}

export default PageWrapper;

import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from '../sidebar/sidebar';
import SelectedPost from '@/components/ui/selected-post/selected-post';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from '@/components/ui/container/container';
import style from './style.module.css';

function PageWrapper({ children, withSidebar }) {
  const [post, setPost] = useState(null);

  return (
    <>
      <Head>
        <title>Authors site Zafar Mirzo</title>
      </Head>

      <Header />

      <Container className={style.container}>
        {withSidebar && <Sidebar post={post} setPost={setPost} />}
        {children}
      </Container>

      <Footer />

      {post && <SelectedPost post={post} setPost={setPost} />}
    </>
  );
}

export default PageWrapper;

import React from 'react';
import { Header, HeaderTitle, Posts, StyledSidebar } from './styled';
import Text from '@/components/ui/text/text';
import { posts } from '@/mocks/posts';
import PostCard from '@/components/ui/post-card/post-card';

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <Header>
        <HeaderTitle>Motivational <br /> illustrations</HeaderTitle>
        <Text clr="#747474">Brief Description of <br /> Motivational Quotes</Text>
      </Header> */}

      <Posts>
        {posts?.map((post) =>
          <PostCard
            key={post.id}
            post={post}
          />
        )}
      </Posts>
    </StyledSidebar>
  );
}

export default Sidebar;

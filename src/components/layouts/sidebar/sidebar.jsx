import React from 'react';
import { posts } from '@/mocks/posts';
import PostCard from '@/components/ui/post-card/post-card';
import style from './style.module.css';

function Sidebar({ setPost }) {
  return (
    <aside className={style.sidebar}>
      <div className={style.posts}>
        {posts?.map((post) =>
          <PostCard
            key={post.id}
            post={post}
            setPost={setPost}
          />
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { posts } from '@/mocks/posts';
import CloseIcon from '../icons/close-icon';
import style from './style.module.css';

function SelectedPost() {
  const router = useRouter();
  const postId = router.query.post;
  const [post, setPost] = useState(null);

  const handleWrapClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      router.push(router.pathname);
    }
  };

  useEffect(() => {
    const handleDocumentKeydown = (evt) => {
      if (evt.key === "Escape") {
        router.push(router.pathname);
      }
    };
    if (postId) {
      document.addEventListener('keydown', handleDocumentKeydown);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '8px';
      setPost(posts.find(({ id }) => id == +postId))
    } else {
      setPost(null);
      document.body.removeAttribute('style');
    }

    return () => document.removeEventListener('keydown', handleDocumentKeydown);
  }, [router, postId]);

  return post ? (
    <dialog className={style.modal} onClick={handleWrapClick}>
      <article className={style.post}>
        <img
          className={style.image}
          src={post?.image}
          width={928}
          height={568}
          alt={post?.title}
        />

        <button
          className={style.close}
          type="button"
          onClick={() => router.push(router.pathname)}
        >
          <CloseIcon width={18} height={18} />
        </button>
      </article>
    </dialog>
  ) : null;
}

export default SelectedPost;

import React, { useEffect } from 'react';
import CloseIcon from '../icons/close-icon';
import style from './style.module.css';

function SelectedPost({ post, setPost }) {
  const handleWrapClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      setPost(null);
    }
  };

  useEffect(() => {
    const handleDocumentKeydown = (evt) => {
      if (evt.key === 'Escape') {
        setPost(null);
      }
    };
    document.addEventListener('keydown', handleDocumentKeydown);

    return () => document.removeEventListener('keydown', handleDocumentKeydown);
  }, []);

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
          onClick={() => setPost(null)}
        >
          <CloseIcon width={18} height={18} />
        </button>
      </article>
    </dialog>
  ) : null;
}

export default SelectedPost;

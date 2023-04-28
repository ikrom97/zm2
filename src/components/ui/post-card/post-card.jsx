import React from 'react';
import style from './style.module.css';
import classNames from 'classnames';

function PostCard({ post, className, setPost }) {
  const { title, image } = post;

  return (
    <article className={classNames(style.card, className)}>
      <button className={style.link} onClick={() => setPost(post)}>
        <img
          className={style.image}
          src={image}
          width={232}
          height={142}
          alt={title}
        />
      </button>
    </article>
  );
}

export default PostCard;

import React from 'react';
import Link from 'next/link';
import style from './style.module.css';
import classNames from 'classnames';

function PostCard({ post, className }) {
  const { id, title, image } = post;

  return (
    <article className={classNames(style.card, className)}>
      <Link className={style.link} href={`?post=${id}`}>
        <img
          className={style.image}
          src={image}
          width={232}
          height={142}
          alt={title}
        />
      </Link>
    </article>
  );
}

export default PostCard;

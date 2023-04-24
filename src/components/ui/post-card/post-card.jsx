import React from 'react';
import { Card, CardLink, PostDescription, PostImage, PostTitle } from './styled';

function PostCard({ post }) {
  const { id, title, image, description } = post;

  return (
    <Card>
      <CardLink href={`?post=${id}`}>
        <PostImage
          src={image}
          width={232}
          height={142}
          alt={title}
          priority={id == 1}
        />

        {/* <PostTitle>{title}</PostTitle> */}
      </CardLink>

      {/* <PostDescription>{description}</PostDescription> */}
    </Card>
  );
}

export default PostCard;

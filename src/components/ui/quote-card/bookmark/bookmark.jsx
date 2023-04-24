import BookmarkIcon from '@/components/ui/icons/bookmark-icon';
import TextButton from '@/components/ui/text-button/text-button';
import React, { useState } from 'react';

function Bookmark() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TextButton
      clr={isFavorite ? '#111111' : false}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <BookmarkIcon fill={isFavorite ? '#111111' : 'none'} /> В закладку
    </TextButton>
  );
}

export default Bookmark;

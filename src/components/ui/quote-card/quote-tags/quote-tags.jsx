import React from 'react';
import ArrowIcon from '@/components/ui/icons/arrow-icon';
import TextButton from '@/components/ui/text-button/text-button';
import style from './style.module.css';

function QuoteTags() {
  const tags = [
    'Morals and Ethics', 'Development of personality', 'Development of society', 'Happiness', 'Humanity',
  ];

  return (
    <div className={style.wrapper}>
      {tags?.map((tag) => (
        <TextButton key={tag} href={`?tag=${tag}`}>
          <ArrowIcon /> {tag}
        </TextButton>
      ))}
    </div>
  );
}

export default QuoteTags;

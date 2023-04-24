import React from 'react';
import ArrowIcon from '@/components/ui/icons/arrow-icon';
import TextButton from '@/components/ui/text-button/text-button';
import { Wrapper } from './styled';

function QuoteTags() {
  const tags = [
    'Мораль и Этика', 'Развитие личности', 'Развитие общества', 'Счастье', 'Человечность',
  ];

  return (
    <Wrapper>
      {tags?.map((tag) => (
        <TextButton key={tag} href={`?tag=${tag}`}>
          <ArrowIcon /> {tag}
        </TextButton>
      ))}
    </Wrapper>
  );
}

export default QuoteTags;

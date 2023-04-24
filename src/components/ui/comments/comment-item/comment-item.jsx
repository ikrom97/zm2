import React from 'react';
import { Author, Comment, DateTime, Reply, StyledComment } from './styled';
import Replies from './replies';

function CommentItem({ onReply }) {
  return (
    <StyledComment>
      <Author>Собир Назаров</Author>
      <DateTime>12.04.2023 11:34</DateTime>
      <Comment>Мироздание существует просто так, беспричинно. Оно возникло спонтанно или извечно существует – другая тема.Само по себе имеет самоорганизующееся свойство, но не имеет целей.</Comment>

      <Reply
        onClick={() => onReply({ to: 'Собир Назаров', mark: false })}
      >
        Ответить
      </Reply>

      <Replies onReply={onReply} />
    </StyledComment>
  );
}

export default CommentItem;

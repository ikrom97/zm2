import React, { useState } from 'react';
import { Author, Comment, DateTime, LoadReplies, Reply, StyledComment, StyledReplies, UserName } from './styled';

function Replies({ onReply }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <StyledReplies>
      {isShown ? (
        <>
          <StyledComment>
            <Author>Мирзоев Сухроб</Author>
            <DateTime>12.04.2023 11:34</DateTime>
            <Comment><UserName>@Собир Назаров</UserName>, Мироздание существует просто так, беспричинно. Оно возникло спонтанно или извечно существует – другая тема.Само по себе имеет самоорганизующееся свойство, но не имеет целей.</Comment>

            <Reply
              onClick={() => onReply({ to: 'Мирзоев Сухроб', mark: true })}
            >
              Ответить
            </Reply>
          </StyledComment>
          <StyledComment>
            <Author>Мирзоев Рустам</Author>
            <DateTime>12.04.2023 11:34</DateTime>
            <Comment><UserName>@Мирзоев Сухроб</UserName>, Мироздание существует просто так, беспричинно. Оно возникло спонтанно или извечно существует – другая тема.Само по себе имеет самоорганизующееся свойство, но не имеет целей.</Comment>

            <Reply
              onClick={() => onReply({ to: 'Мирзоев Рустам', mark: true })}
            >
              Ответить
            </Reply>
          </StyledComment>
        </>
      ) : (
        <LoadReplies
          onClick={() => setIsShown(true)}
        >
          Посмотреть еще 2 ответов
        </LoadReplies>
      )}
    </StyledReplies>
  );
}

export default Replies;

import React, { useState } from 'react';
import { ABCButton, ABCList, ABCListItem, List, ListItem, Main, Section, Title } from './styled';

function TagsScreen() {
  const ABC = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
  const tags = ['Вечные вопросы', 'Развитие личности', 'Развитие личности', 'Вечные вопросы', 'Жизнелюбие', 'Развитие общества', 'Развитие общества', 'Жизнелюбие', 'Мировоззрение', 'Самореализация', 'Самореализация', 'Мировоззрение', 'Мораль и Этика', 'Цели человека', 'Цели человека', 'Мораль и Этика', 'Направления мысли', 'Ценность жизни', 'Ценность жизни', 'Направления мысли', 'Ценности и Идеалы', 'Юмор и Ирония', 'Юмор и Ирония', 'Наука и Просвещение', 'Ценности и Идеалы', 'Ценности и Идеалы'];
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleButtonClick = (letter) => () => {
    if (selectedLetter === letter) {
      setSelectedLetter('');
      return
    }
    setSelectedLetter(letter);
  };

  return (
    <Main>
      <Section>
        <Title>Теги по алфавиту</Title>

        <ABCList>
          {ABC.map((letter) => (
            <ABCListItem key={letter}>
              <ABCButton
                active={selectedLetter === letter}
                onClick={handleButtonClick(letter)}
              >
                {letter}
              </ABCButton>
            </ABCListItem>
          ))}
        </ABCList>
      </Section>

      <Section>
        <Title>Популярные теги</Title>

        <List>
          {tags.map((tag, key) => (
            <ListItem
              key={key}
              disabled={selectedLetter && !selectedLetter.startsWith(tag[0].toLowerCase())}
            >
              {tag}
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Личность и навыки</Title>

        <List>
          {tags.map((tag, key) => (
            <ListItem
              key={key}
              disabled={selectedLetter && !selectedLetter.startsWith(tag[0].toLowerCase())}
            >
              {tag}
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Экономика и Бизнес</Title>

        <List>
          {tags.map((tag, key) => (
            <ListItem
              key={key}
              disabled={selectedLetter && !selectedLetter.startsWith(tag[0].toLowerCase())}
            >
              {tag}
            </ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <Title>Общество</Title>

        <List>
          {tags.map((tag, key) => (
            <ListItem
              key={key}
              disabled={selectedLetter && !selectedLetter.startsWith(tag[0].toLowerCase())}
            >
              {tag}
            </ListItem>
          ))}
        </List>
      </Section>
    </Main>
  );
}

export default TagsScreen;

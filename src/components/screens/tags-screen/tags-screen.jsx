import React, { useState } from 'react';
import { ABCButton, ABCList, ABCListItem, List, ListItem, Main, Section, Title } from './styled';

function TagsScreen() {
  const ABC = [
    'a',
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const tags = ['Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals'];
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
        <Title>Tags alphabetically</Title>

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
        <Title>Popular tags</Title>

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
        <Title>Personality and skills</Title>

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
        <Title>Economy and Business</Title>

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
        <Title>Society</Title>

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

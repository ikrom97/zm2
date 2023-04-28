import React from 'react';
import style from './style.module.css';
import Title from '@/components/ui/title/title';

function TagsScreen() {
  const tags = [
    'Anthropogenesis',
    'Astronomy and Cosmology',
    'Safety and Riskology',
    'Future and Futurology',
    'Being and First Cause',
    'Extraterrestrial life',
    'The emergence and evolution of life',
    'Universe and Multiverse',
    'Global problems',
    'Brain',
    'Grammar',
    'Spirit and Spirituality',
    'Stars and black holes',
    'Health and Physiology',
    'Intellect and Philosophy of Consciousness',
    'Artificial intelligence',
    'Art and Aesthetics',
    'The quantum physics',
    'Team and Group Efficiency',
    'Communication and Etiquette',
    'Competence',
    'Creativity and creativity',
    'Critical thinking',
    'Culture and Culturology',
    'Logic and Thinking',
    'Macroeconomics',
    'Marketing and Market',
    'Management',
    'Worldview and Worldview',
    'Worldview concepts',
    'Persistence and Firmness',
    'Science and Methodology of Science',
    'Science fiction',
    'Recklessness and Guilt',
    'Morality and Virtues',
    'Education and Pedagogy',
    'Space exploration',
    'Primeval world',
    'Positive thinking',
    'Politics and Political Science',
    'Political theories',
    'Popularization of science',
    'Needs and Motivation',
    'Warning',
    'Prejudice and Delusion',
    'Human Origins',
    'Space - time',
    'Mental health',
    'Psychology',
    'Psychology of Personality',
    'Society development',
    'Religion and Society',
    'Religion and Religious Studies',
    'Rhetoric and Eloquence',
    'Self Control and Self Discipline',
    'Self - education and erudition',
    'Self - realization',
    'Self - Consciousness and Self - Concept',
    'Free will',
    'Freedom and Responsibility',
    'Sector of the economy',
    'The meaning of life and existentialism',
    'Solar system and earth',
    'Social Psychology',
    'Social environment',
    'Abilities and Resources',
    'human ability',
    'Strategic management',
    'Happiness',
    'Technology and Innovation',
    'Training and Mentoring',
    'Self confidence',
    'Personnel Management',
    'Manufacturing control',
    'Fatigue and Rest',
    'Philosophy and Philosopher',
    'Fundamental Interactions',
    'Chemical elements',
    'Science timelines',
    'Goals and Achievements',
    'Value and Ideal',
    'Human civilization',
    'Economic resources',
    'Emotional intellect',
    'Emotion and Feeling',
    'Energy and Energy',
    'Epistemology',
    'Ethics and Morality',
    'Effective leader',
  ];

  return (
    <main className={style.main}>
      <section className={style.section}>
        <Title className={style.title}>Tags</Title>

        <ul className={style.list}>
          {tags.map((tag, key) => (
            <li key={key} className={style.listItem}>{tag}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default TagsScreen;

import React from 'react';
import style from './style.module.css';
import Title from '@/components/ui/title/title';

function TagsScreen() {
  const tags = [
    'Abilities and Resources',
    'Anthropogenesis',
    'Art and Aesthetics',
    'Artificial intelligence',
    'Astronomy and Cosmology',
    'Being and First Cause',
    'Brain',
    'Chemical elements',
    'Communication and Etiquette',
    'Competence',
    'Creativity and creativity',
    'Critical thinking',
    'Culture and Culturology',
    'Economic resources',
    'Education and Pedagogy',
    'Effective leader',
    'Emotion and Feeling',
    'Emotional intellect',
    'Energy and Energy',
    'Epistemology',
    'Ethics and Morality',
    'Extraterrestrial life',
    'Fatigue and Rest',
    'Free will',
    'Freedom and Responsibility',
    'Fundamental Interactions',
    'Future and Futurology',
    'Global problems',
    'Goals and Achievements',
    'Grammar',
    'Happiness',
    'Health and Physiology',
    'Human ability',
    'Human civilization',
    'Human Origins',
    'Intellect and Philosophy of Consciousness',
    'Logic and Thinking',
    'Macroeconomics',
    'Management',
    'Manufacturing control',
    'Marketing and Market',
    'Mental health',
    'Morality and Virtues',
    'Needs and Motivation',
    'Persistence and Firmness',
    'Personnel Management',
    'Philosophy and Philosopher',
    'Political theories',
    'Politics and Political Science',
    'Popularization of science',
    'Positive thinking',
    'Prejudice and Delusion',
    'Primeval world',
    'Psychology',
    'Psychology of Personality',
    'Recklessness and Guilt',
    'Religion and Religious Studies',
    'Religion and Society',
    'Rhetoric and Eloquence',
    'Safety and Riskology',
    'Science and Methodology of Science',
    'Science fiction',
    'Science timelines',
    'Sector of the economy',
    'Self confidence',
    'Self Control and Self Discipline',
    'Self - Consciousness and Self - Concept',
    'Self - education and erudition',
    'Self - realization',
    'Social environment',
    'Social Psychology',
    'Society development',
    'Solar system and earth',
    'Space exploration',
    'Space - time',
    'Spirit and Spirituality',
    'Stars and black holes',
    'Strategic management',
    'Team and Group Efficiency',
    'Technology and Innovation',
    'The emergence and evolution of life',
    'The meaning of life and existentialism',
    'The quantum physics',
    'Training and Mentoring',
    'Universe and Multiverse',
    'Value and Ideal',
    'Warning',
    'Worldview and Worldview',
    'Worldview concepts',
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

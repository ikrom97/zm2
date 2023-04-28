import React from 'react';
import style from './style.module.css';
import Title from '@/components/ui/title/title';

function TagsScreen() {
  const tags = ['Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals', 'Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals', 'Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals', 'Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals', 'Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals', 'Eternal questions', 'Eternal questions', 'Love of life', 'Development of society', 'Development of society', 'Love of life', 'Worldview', 'Self-realization', 'Self-realization', 'Worldview', 'Morals and Ethics', 'Aims of Man', 'Aims of Man', 'Morals and Ethics', 'Directions of Thought', 'Value of Life', 'Value of Life', 'Directions of Thought', 'Values and Ideals', 'Humor and Irony', 'Humor and Irony', 'Values and Ideals', 'Values and Ideals'];

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

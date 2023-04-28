import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { navs } from '@/const';
import style from './style.module.css';
import Link from 'next/link';

function Navigation() {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);

  const setClassName = (path) =>
    router.pathname === path ? `${style.link} ${style.current}` : style.link;

  return (
    <nav className={style.nav}>
      <button className={style.button} type="button" onClick={() => setIsopen(!isOpen)}>
        <svg width="18" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1ZM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1Z" fill="#E2B65C" />
        </svg>
      </button>

      <ul className={`${isOpen ? style.list : `${style.list} ${style.hidden}`}`}>
        {navs?.map(({ title, path }) => (
          <li key={title} className={style.listItem}>
            <Link
              className={setClassName(path)}
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

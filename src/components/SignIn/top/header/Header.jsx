import React from 'react';
import Logo from './Logo';
import logoUrl from './logo.svg';
import style from './header.css';

export default function Header() {
  return (
    <div className={style.header}>
      <Logo url={logoUrl} width="120" height="80" className={style.logo} />
      <span className={style.headerSpan}>
        <b>WinSide</b>
      </span>
    </div>
  );
}

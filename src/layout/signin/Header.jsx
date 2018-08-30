import React from 'react';
import Logo from './Logo';
import logoUrl from './logo.svg';
import style from './header.css';

export default function Header() {
  return (
    <div className={style.header}>
      <Logo url={logoUrl} />
      <span id="">WinSide</span>
    </div>
  );
}

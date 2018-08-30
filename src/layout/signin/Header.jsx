import React from 'react';
import Logo from './Logo';
import logoUrl from './logo.svg';

export default function Header() {
  return (
    <div>
      <Logo url={logoUrl} />
      <span>WinSide</span>
    </div>
  );
}

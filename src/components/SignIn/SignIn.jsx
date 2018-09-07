import React from 'react';
import Top from './top/Top';
import style from './signin.css';
import Footer from '../Footer/Footer';

export default function SignIn() {
  return (
    <div className={style.signin}>
      <Top />
      <Footer />
    </div>
  );
}

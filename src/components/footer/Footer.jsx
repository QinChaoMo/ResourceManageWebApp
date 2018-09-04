import React from 'react';
import style from './footer.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className={style.footer}>
      <span>
        Copyright &copy;&nbsp;
        {year}
        &nbsp;WinSide All rights Reserved.
      </span>
    </div>
  );
}

export default Footer;

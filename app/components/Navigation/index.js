import React from 'react';
import styles from './styles.css';
import A from 'components/A';
import H3 from 'components/H3';
import Img from 'components/Img';
import dangnhap from 'containers/HomePage/btn_dangnhap.jpg';
import classNames from 'classnames';

function Navigation(){

  return(
    <header className={classNames(styles.navgation)}>
      <div className={classNames(styles.nav1)}>
        <A>
          <span className={styles.span_nav}>NƠI NHÂN DÂN ĐÓNG GÓP VÀ XÂY DỰNG CHÍNH QUYỀN</span></A></div>
          <nav className={classNames(styles.nav2)}>
          <ul className={styles.ul}>
              <li className={styles.li}><A className={styles.li.a} href="#">CHÍNH QUYỀN</A>
              </li>
              <li className={styles.li}><A className={styles.li.a} href="#">NGƯỜI DÂN</A></li>
              <li className={styles.li_dangnhap}><A href="#"><button>
                <Img src={dangnhap} alt="btn_dangnhap" className={styles.img_dangnhap}/></button></A></li>
          </ul></nav>
    </header>
  );
}

export default Navigation;

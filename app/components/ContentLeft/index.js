import React from 'react';
import styles from 'containers/HomePage/styles.css';
import Img from 'components/Img';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';
import List from 'components/List';
import messages_one from './messages';
import style from './styles.css';
import test from './index.html';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

class ContentLeft extends React.Component{

  openCity(evt){

  }

  render(){
    return(
        <div className={classNames(style.content_left)}>
           <div className={style.header_custom}>
             <p>
               <span className={style.span_cacdexuat}>Các đề xuất</span>
               </p>
           </div>
           <div >
             <div className={classNames(style.header_navigation)}>
               <div className={classNames(style.nav_goto,'w3-row') }>
                 <a href="javascript:void(0)">
                   <div  className={classNames(style.under_line,'w3-third tablink  w3-hover-light-grey ')}><span className={style.span_1}>Tiêu biểu</span></div>
                 </a>
                 <a href="javascript:void(0)" >
                   <div  className={classNames(style.under_line,'w3-third tablink  w3-hover-light-grey  ')}><span>Phổ biến</span></div>
                 </a>
                 <a href="javascript:void(0)" >
                   <div  className={classNames(style.under_line,'w3-third tablink  w3-hover-light-grey ')}><span>Mới đăng</span></div>
                 </a>
               </div>
             </div>
             <div >
                <List />
             </div>
           </div>
        </div>
    );
  }
}

export default ContentLeft;

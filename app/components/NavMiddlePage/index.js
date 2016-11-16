import React from 'react';
import styles from 'containers/HomePage/styles.css';
import A from 'components/A';
import H3 from 'components/H3';
import Img from 'components/Img';
import number_1 from 'containers/HomePage/num1.jpg';
import number_2 from 'containers/HomePage/num2.jpg';
import number_3 from 'containers/HomePage/num3.jpg';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import style from './styles.css';

function NavMiddlePage(){
  return(
    <div>
         <div className={classNames('text-center',style.div_groupNum)}>
           <div className={classNames('col-md-4 col-xs-12',style.div_num)}>
                  <div className={style.num1_img}>
                    <Img className={style.num_img} src={number_1} alt="react-boilerplate - Logo" />
                    <p className={style.p_under_num}>
                    <H3 >Đề xuất ý kiến</H3></p>
                    <div className={classNames(style.div_dexuat)}>
                      <p >Đưa ra đề xuất về vấn đề bạn muốn thay đổi</p>
                    </div>
                  </div>
           </div>
           <div className={classNames('col-md-4 col-xs-12',styles.div_num,style.number2)}>
               <div>
                  <Img className={style.num_img} src={number_2} alt="react-boilerplate - Logo" />
                  <p className={style.p_under_num}>
                  <H3 >Thu thập ý kiến ủng hộ</H3></p>
                  <div className={style.div_ungho}>
                      <p >Chia sẻ ý kiến của bạn với cộng đồng cùng ủng hộ ý kiến của bạn</p>
                  </div>
               </div>
           </div>
           <div className={classNames('col-md-4 col-xs-12',styles.div_num)}>
               <div className={style.num3_img}>
                   <Img className={style.num_img} src={number_3} alt="react-boilerplate - Logo" />
                   <p className={style.p_under_num}>
                   <H3 >Cơ quan chức năng<br/> tiếp thu và trả lời</H3></p>
                   <div className={style.div_coquan}>
                      <p>Nhận phản hồi chính thức từ cơ quan chức năng</p>
                   </div>
               </div>
           </div>
        </div>
        <div className={classNames('row',style.p_hr)}><hr/></div>
     </div>
  );
}

export default NavMiddlePage;

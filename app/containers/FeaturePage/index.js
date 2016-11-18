/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';
import driver from './cus_slide.jpg';
import styles from './styles.css';
import Img from 'components/Img';
import liked from './liked.jpg';
import fb_icon from './ic_face.jpg';
import email_icon from './ic_email.jpg';
import link_icon from './ic_link.jpg';
import icon_ac from './icon_ac.jpg';
import icon_up from './icon_up.jpg';
import icon_kt from './icon_kt.jpg';
import classNames from 'classnames';
import Style from 'components/List/styles.css';

export class FeaturePage extends React.Component {

  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
      <div className={styles.nav_one}>
          <div className={classNames(styles.header_left)}><font>MXH - CHÍNH QUYỀN</font></div>
          <div className={classNames(styles.header_right)}>
              <div className={styles.header_right_nav}>
                <ul><li className={styles.li1}>
                Viết ̣̣đề xuất
              </li><li className={styles.li2}>Tìm kiếm</li>
            <li className={styles.li3}><Img src={icon_ac} className={styles.img_account}/>Nguyễn Dức Vinh<Img src={icon_up} className={styles.img_account}/></li></ul></div>
          </div>
      </div>
      <div className={styles.hr_top}><hr/></div>
      <div className={styles.cus_body}>
      <div className={styles.cus_row}>
        <div className={styles.text_page}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sit amet consectetuer.</div>
      </div>
      <div className={styles.cus_row}>
        <div className={styles.group_text}><p className={styles.cycle}></p>
        <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh</span></p></div>
      </div>
      <div className={classNames('col-md-12 col-sm-12 container',styles.cus_row)}>
          <div  className={classNames(styles.div_content_left)} >
            <div id="myCarousel" className={classNames(styles.slide_cus,'carousel slide')} data-ride="carousel">
            <div className={'carousel-inner'} role="listbox">
              <div className={classNames('item active')}>
                <Img className={classNames(styles.cus_img)} src={driver} style={"height:200px;"}/>
              </div>
              <div className={classNames('item')}>
                <Img className={classNames(styles.cus_img)} src={driver} style={"height:200px;"}/>
              </div>
              <div className={classNames('item ')}>
                <Img className={classNames(styles.cus_img)} src={driver} style={"height:200px;"}/>
              </div>
              <div className={classNames('item ')}>
                <Img className={classNames(styles.cus_img)} src={driver} style={"height:200px;"}/>
              </div>
                </div>
      <a className={'left carousel-control'} href="#myCarousel" role="button" data-slide="prev">
        <span  aria-hidden="true"></span>
        <span className={'sr-only'}>Previous</span>
      </a>
    <a className={'right carousel-control'} href="#myCarousel" role="button" data-slide="next">
      <span  aria-hidden="true"></span>
      <span className={'sr-only'}>Next</span>
    </a></div>
              <div className={classNames('row')}>
                <p className={styles.p_content}><FormattedMessage {...messages.content1}/></p>
              </div>
              <div className={classNames('row')}>
                <p className={styles.p_content}><FormattedMessage {...messages.content2}/></p>
              </div>
              <div className={classNames('row')}>
                <p className={styles.p_content}><FormattedMessage {...messages.content3}/></p>
              </div>
            <div className={classNames('row')}><p className={styles.p_content}><span>Nunc nec neque</span></p></div>
            <div className={classNames('row',styles.p_row,styles.hr_pg)}><hr/>Thuộc lĩnh vực: <b>Giao thông vận tải, bộ y tế, bộ văn hóa</b><hr/></div>
            <div className={classNames('row',styles.p_row,styles.p_capnhap)}>Cập Nhập</div>
            <div className={classNames('row',styles.p_row)}>
                <div className={Style.div_left_db_2}>
                    <p className={Style.cycle_db}></p>
                    <p className={styles.name_traloi}><span className={Style.span_name}>Nguyễn Việt Hà, <i>Đại diện bộ GTVT trả lời</i></span></p>
                <div className={Style.div_content_db2}>
                    <p className={Style.header_content_db}><span>Lorem ipsum dolor sit amet, consecte adipiscing elit.</span></p>
                    <p className={styles.content_fix}>
                      <span>Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula egiet dolor. Asenean massa. Cum sociis natoque penatibus et magisn dis partureinet montest, Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula
                        nascetur ridiculus mus</span></p>
                    <div><p className={Style.seeExtend}><span>xem thêm</span></p>
                    </div>
                </div>
                </div>
            </div>
            <div className={classNames('row',styles.p_row,styles.binh_luan,styles.p_capnhap)}>Bình luận</div>
            <div className={classNames('row',styles.p_row)}>
              <form className={styles.form_bl}>
                   <div className="form-group">
                     <textarea className="form-control" rows="5" id="comment"></textarea>
                   </div>
                   <div className={classNames(styles.p_row,styles.div_gui)}>
                     <Button handleRoute={this.openHomePage}>
                       GỬI
                     </Button>
                   </div>
              </form>
            </div>
            <div className={classNames('row',styles.p_row)}>
              <div className={styles.div_left}>
                  <p className={styles.cycle}></p>
                  <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh<br/>15 phút trước</span>
                  </p>
                <div className={styles.div_content}>
                    <font>Một dấu hiệu nữa cần quan sát đó là tỷ lệ cử tri đi bỏ phiếu so với năm 2012, nhất là ở những khu vực tập trung đông người Mỹ gốc Phi, người gốc la tinh, cử tri trẻ tuổi và người gia trắng có học thức. Đây là chỉ báo đặc biệt quan trọng tại 4 bang không nghiêng hẳn theo đảng nào và sẽ có kết quả sớm nhất.</font>
                    <p className={styles.ic_liked}>
                      <Img src={liked} className={styles.like_img}/>
                    <span className={styles.liked_c}>1,000,000</span></p>
                    <hr/>
                </div>
              </div>
            </div>
            <div className={classNames('row',styles.p_row)}>
              <div className={styles.div_left}>
                  <p className={styles.cycle}></p>
                  <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh<br/>15 phút trước</span>
                  </p>
                <div className={styles.div_content}>
                    <font>Một dấu hiệu nữa cần quan sát đó là tỷ lệ cử tri đi bỏ phiếu so với năm 2012, nhất là ở những khu vực tập trung đông người Mỹ gốc Phi, người gốc la tinh, cử tri trẻ tuổi và người gia trắng có học thức. Đây là chỉ báo đặc biệt quan trọng tại 4 bang không nghiêng hẳn theo đảng nào và sẽ có kết quả sớm nhất.</font>
                      <p className={styles.ic_liked}>
                        <Img src={liked} className={styles.like_img}/>
                      <span className={styles.liked_c}>1,000,000</span></p>
                    <hr/>
                </div>
              </div>
            </div>
            <div className={classNames('row',styles.p_row)}>
              <div className={styles.div_left}>
                  <p className={styles.cycle}></p>
                  <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh<br/>15 phút trước</span>
                  </p>
                <div className={styles.div_content}>
                    <font>Một dấu hiệu nữa cần quan sát đó là tỷ lệ cử tri đi bỏ phiếu so với năm 2012, nhất là ở những khu vực tập trung đông người Mỹ gốc Phi, người gốc la tinh, cử tri trẻ tuổi và người gia trắng có học thức. Đây là chỉ báo đặc biệt quan trọng tại 4 bang không nghiêng hẳn theo đảng nào và sẽ có kết quả sớm nhất.</font>
                      <p className={styles.ic_liked}>
                        <Img src={liked} className={styles.like_img}/>
                      <span className={styles.liked_c}>1,000,000</span></p>
                    <hr/>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames('col-md-3 col-sm-12',styles.div_content_right)}>
            <div className={classNames('row')}>
              <p className={styles.luot_ky_ten}>Lượt ký tên</p>
              <hr className={classNames(styles.hr,styles.luotungho)}/>
              <p className={styles.luotungho}><span>1,234,000 người ủng hộ</span></p>
                <div className={classNames('w3-progress-container w3-round-xlarge',styles.myProgress)}>
                  <div className={classNames('w3-progressbar w3-round-xlarge',styles.myBar)}></div>
                </div>
              <p><span>đạt mốc ủng hộ 2,000,000</span></p>
            </div>
            <div className={classNames('row')}>
              <p className={styles.unghodexuat}><span>Lý do Tôi ủng hộ đề xuất này</span></p>
                <div className={classNames('form-group')}>
                  <textarea className={classNames('form-control',styles.form_ungho)} rows="5" id="comment"></textarea>
                </div>
            </div>
            <div className={classNames('row')}><a><Img src={icon_kt} alt="ky ten" className={styles.img_kyten}/></a></div>
            <div className={classNames('row')}>
              <div className={styles.div_share}>
                <a className={styles.div_img_1}><Img src={link_icon} alt="link-icon" className={styles.img_icon}/></a>
                <a className={styles.div_img_2}><Img src={email_icon} alt="email-icon" className={styles.img_icon}/></a>
                <a className={styles.div_img_3}><Img src={fb_icon} alt="fb-icon" className={styles.img_icon}/></a>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className={classNames('row',styles.close_comment)}></div>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(FeaturePage);

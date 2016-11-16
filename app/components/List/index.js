import React from 'react';

import styles from './styles.css';
import number_1 from './number_1.gif';
import number_2 from './number_2.gif';
import number_3 from './number_3.gif';
import motoDriver from './driver.gif';
import Img from 'components/Img';
import A from 'components/A';
import classNames from 'classnames';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className={classNames('row')}>
      <ul className={styles.listRight}>
        <li >
              <div className={classNames(styles.table_li)}>
                <div className={classNames(styles.div_left)}>
                <p className={styles.cycle}></p>
                <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh</span></p>
                <div className={styles.div_content}>
                  <p className={styles.header_content}><span className={styles.header_list}>Lorem ipsum dolor sit amet, consecte adipiscing elit.</span></p>
                  <p className={styles.content_1}><span className={styles.span_content}>Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula egiet dolor. asenean massa. Cum sociis natoque penatibus et magisn dis partureinet montest, nascetur ridiculus mus.</span></p>
                  <p className={styles.seeExtend}>xem thêm</p>
                </div>
              </div>
                <div className={classNames(styles.div_right)}>
                  <p className={styles.p_show}><Img className={styles.img_show} src={motoDriver} alt="react-boilerplate - img" /></p>
                  <p className={styles.p_per}><span>1,365,000 Người ủng hộ</span></p>
              </div></div>
          </li>
          <li>
            <div>
                <div className={styles.div_left_db}>
                    <p className={styles.cycle}></p>
                    <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh</span></p>
                <div className={styles.div_content_db}>
                    <p className={styles.header_content_db}><span className={styles.header_list}>Lorem ipsum dolor sit amet, consecte adipiscing elit.</span></p>
                    <p className={styles.span_content}>
                      <span className={styles.span_content}>Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula egiet dolor. asenean massa. Cum sociis natoque penatibus et magisn dis partureinet montest, nascetur ridiculus mus. Cum sociis natoque penatibus et magisn dis partureinet montest, nascetur ridiculus mus.</span><span  className={styles.p_per_db}>1,365,000 Người ủng hộ </span></p>
                    <div><p className={styles.seeExtend_db}>xem thêm</p>
                    </div>
                </div>
              </div></div>
              </li>
              <li >
                    <div className={classNames(styles.table_li)}>
                      <div className={classNames(styles.div_left)}>
                      <p className={styles.cycle}></p>
                      <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh</span></p>
                      <div className={styles.div_content}>
                        <p className={styles.header_content}><span className={styles.header_list}>Lorem ipsum dolor sit amet, consecte adipiscing elit.</span></p>
                        <p className={styles.content_1}><span className={styles.span_content}>Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula egiet dolor. asenean massa. Cum sociis natoque penatibus et magisn dis partureinet montest, nascetur ridiculus mus.</span></p>
                        <p className={styles.seeExtend}>xem thêm</p>
                      </div>
                    </div>
                      <div className={classNames(styles.div_right)}>
                        <p className={styles.p_show}><Img className={styles.img_show} src={motoDriver} alt="react-boilerplate - img" /></p>
                        <p className={styles.p_per}><span>1,365,000 Người ủng hộ</span></p>
                    </div></div>
                </li>
                <li >
                      <div className={classNames(styles.table_li)}>
                        <div className={classNames(styles.div_left)}>
                        <p className={styles.cycle}></p>
                        <p className={styles.li_name}><span className={styles.span_name}>Nguyễn Đức Vinh</span></p>
                        <div className={styles.div_content}>
                          <p className={styles.header_content}><span className={styles.header_list}>Lorem ipsum dolor sit amet, consecte adipiscing elit.</span></p>
                          <p className={styles.content_1}><span className={styles.span_content}>Lorem ipsum dolor sit amet, consecte adipiscing elit. Aenean commodo ligula egiet dolor. asenean massa. Cum sociis natoque penatibus et magisn dis partureinet montest, nascetur ridiculus mus.</span></p>
                          <p className={styles.seeExtend}>xem thêm</p>
                        </div>
                      </div>
                        <div className={classNames(styles.div_right)}>
                          <p className={styles.p_show}><Img className={styles.img_show} src={motoDriver} alt="react-boilerplate - img" /></p>
                          <p className={styles.p_per}><span>1,365,000 Người ủng hộ</span></p>
                      </div></div>
                  </li>
              <li className={classNames(styles.li_noidung)}>
                  <div className={styles.table_xemthem}>
                  <p><A><span className={styles.span_xemthem}>XEM THÊM</span></A></p>
              </div></li>
      </ul>
    </div>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;

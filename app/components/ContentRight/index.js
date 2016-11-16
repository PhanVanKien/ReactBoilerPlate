import React from 'react';
import styles from 'containers/HomePage/styles.css';
import A from 'components/A';
import H3 from 'components/H3';
import Img from 'components/Img';
import icon_search from 'containers/HomePage/icon_search.jpg';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';
import ListItem from 'components/ListItem';
import contentStyles from './styles.css';
import classNames from 'classnames';

function ContentRight(){
  return(
      <div className={classNames('col-md-3 col-xs-12',contentStyles.content_right)}>
          <div>
            <form>
              <div className={contentStyles.div_timdexuat}>
                <input className={classNames(contentStyles.form_search,'form-control ')}
                  type="text" placeholder="Tìm kiếm đề xuất" /></div>
                <button className={contentStyles.button_search}>
                  <Img src={icon_search} className={contentStyles.icon_imgSearch} alt="icon_search"/>
                  </button>
            </form>

          </div>
          <div className={contentStyles.cus_list_content}>
              <ListItem item="Các lĩnh vực"/>
              <hr className={contentStyles.hr}/>
              <ListItem item="Luật pháp"/>
              <ListItem item="Giao thông"/>
              <ListItem item="Văn hóa"/>
              <ListItem item="Giáo Dục"/>
              <ListItem item="Y tế"/>
              <ListItem item="Đầu tư"/>
              <ListItem item="Công nghệ"/>
              <ListItem item="Khoa học"/>
          </div>
      </div>
  );
}

export default ContentRight;

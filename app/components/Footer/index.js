import React from 'react';

import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.divP}>
        <p>
          <FormattedMessage {...messages.footerMessage1} /><br/>
          <FormattedMessage {...messages.footerMessage2}/>
        </p>
      </section>
    </footer>
  );
}

export default Footer;

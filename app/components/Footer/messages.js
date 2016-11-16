/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: 'boilerplate.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  footerMessage1: {
    id: 'boilerplate.components.Footer.footer1.message',
    defaultMessage: `
      © 2016, DÂN CHỦ.
    `,
  },
  footerMessage2: {
    id: 'boilerplate.components.Footer.footer2.message',
    defaultMessage: `
      Mạng kết nối nhân dân với chính quyền
    `,
  },
});

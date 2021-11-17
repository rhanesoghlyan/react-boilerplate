import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <Link to="/">
          <FormattedMessage {...messages.home} />
        </Link>
        <Link to="/about">
          <FormattedMessage {...messages.about} />
        </Link>
      </NavBar>
    </div>
  );
}

export default Header;

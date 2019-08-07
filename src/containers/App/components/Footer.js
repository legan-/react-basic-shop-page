import React from 'react';
import * as TYPES from 'prop-types';

Footer.propTypes = {
  year: TYPES.number.isRequired,
  name: TYPES.string.isRequired
};

function Footer({ year, name }) {
  return (
    <footer className='footer container'>
      { `© ${ year } - ${ name }` }
    </footer>
  );
}

export default Footer;
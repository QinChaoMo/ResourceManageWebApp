import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

const defaultProps = {
  width: 60,
  height: 40,
  alt: 'logo',
};
function Logo({
  url: logoUrl,
  width: logoWidth,
  height: logoHeight,
  alt: logoAlt,
}) {
  return (
    <img src={logoUrl} alt={logoAlt} width={logoWidth} height={logoHeight} />
  );
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;

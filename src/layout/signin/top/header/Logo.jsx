import React from 'react';
import PropTypes from 'prop-types';

function Logo({ url, width, height, alt, className }) {
  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  width: '80',
  height: '60',
  alt: 'logo',
};

export default Logo;

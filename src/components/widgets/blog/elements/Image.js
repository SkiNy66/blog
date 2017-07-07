import React from 'react';

const Image = ({ src, width, height, alt }) => (
  <img
    style={{ width: '100%', height: '200px' }}
    src = { src }
    width = { width }
    height = { height }
    alt = { alt }
  />
);

Image.defaultProps = {
  src: 'https://i.vimeocdn.com/portrait/1274237_300x300',
  width: '40px',
  height: '40px',
  alt: ''
};

Image.propTypes = {
  src: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  alt: React.PropTypes.string
};

export default Image;

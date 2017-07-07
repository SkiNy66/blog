import React from 'react';
import Image from './elements/Image';
// import { Image } from 'semantic-ui-react';
import Like from './elements/Like';
import TextBox from './elements/TextBox';
import { formatDate } from 'helpers/date';
import { Label } from 'semantic-ui-react';

const style = {
  margin: '20px',
  padding: '20px',
  width: '330px',
  height: '400px',
  backgroundColor: '#fff',
  MozBoxShadow: '1px 2px 20px 1px #d3d3d3',
  WebkitBoxShadow: '1px 2px 20px 1px #d3d3d3',
  BoxShadow: '1px 2px 20px 1px #d3d3d3',
};

const BlogItem = ({ image, text, author, createdAt, updatedAt, count, like }) => (
  <div style={ style }>
    <Image {...image} />
    <h2>
      <TextBox>{ text }</TextBox>
    </h2>
    <p>
      <TextBox>Создано: { formatDate(createdAt) }</TextBox>
    </p>
    <p>
      <TextBox>Обновлено: { formatDate(updatedAt) }</TextBox>
    </p>
    <div style={{ float: 'right' }}>
      <Label as='a' image>
        <img src='http://s.ecrater.com/stores/94943/4a157a769b8c3_94943n.jpg' />
        { author }
      </Label>
    </div>
    <div style={{ float: 'left' }}>
      <Like count={ count } like={ like }/>
    </div>
  </div>
);

BlogItem.defaultProps = {
  image: {
    src: 'https://i.vimeocdn.com/portrait/1274237_300x300',
    width: '40px',
    height: '40px',
    alt: ''
  },
  text: 'No text',
  author: 'No author',
  createdAt: '01.01.0001',
  updatedAt: '01.01.0001',
  count: 0
};

BlogItem.propTypes = {
  image: React.PropTypes.shape(Image.propTypes),
  text: React.PropTypes.string,
  author: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string,
  count: React.PropTypes.number
};

export default BlogItem;

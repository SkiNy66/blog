import React from 'react';
import Image from './elements/Image';
import Like from './elements/Like';
import TextBox from './elements/TextBox';
import { formatDate } from 'helpers/date';
import { Label } from 'semantic-ui-react';

const BlogItem = (
  {
    image,
    text,
    author,
    createdAt,
    updatedAt,
    count,
    like
  }) => (
  <div className='item'>
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
    <div className='right'>
      <Label as='a' image>
        <img src='http://s.ecrater.com/stores/94943/4a157a769b8c3_94943n.jpg' />
        { author }
      </Label>
    </div>
    <div className='left'>
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
  count: React.PropTypes.number,
  like: React.PropTypes.func.isRequired
};

export default BlogItem;

const DOM = React.DOM;

const { bind } = _;

const items = [ 
  { 
    image: {
      src: 'https://goo.gl/TrkQOh',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '1',
    text: 'в патруле))',
    author: 'Рыцарь',
    createdAt: '0089-01-23',
    updatedAt: '1379-03-17',
    count: 3
  },
  { 
    image: {
      src: 'https://goo.gl/TrkQOh',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '2',
    text: 'в патруле))',
    author: 'Рыцарь',
    createdAt: '0089-01-23',
    updatedAt: '1379-03-17',
    count: 56
  },
  { 
    image: {
      src: 'https://goo.gl/TrkQOh',
      width: '50px',
      height: '50px',
      alt: 'pic'
    },
    id: '3',
    text: 'в патруле))',
    author: 'Рыцарь',
    createdAt: '0089-01-23',
    updatedAt: '1379-03-17',
    count: 13
  }
];

const Image = ({...props}) => (
  <img { ...props } />
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

const TextBox = (props) => (
  <span>{props.children}</span>
);

TextBox.defaultProps = {
  text: 'No text'
};

TextBox.propTypes = {
  text: React.PropTypes.string
};

const covertTime = (formattingTime) => (
  moment(formattingTime).format('L')
);

covertTime.defaultProps = {
  formattingData: '01-01-0001'
};

covertTime.propTypes = {
  formattingData: React.PropTypes.string
};

const BlogItem = ({image, text, author, createdAt, updatedAt, count}) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{text}</TextBox>
    <p>
      <TextBox>Автор: {author}</TextBox>
    </p>
    <p>
      <TextBox>Создано: {covertTime(createdAt)}</TextBox>
    </p>
    <p>
      <TextBox>Обновлено: {covertTime(updatedAt)}</TextBox>
    </p>
    <Like count={count} />
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

class BlogList extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { items };
  }
  
  render() {
    const {items} = this.state;
    const elements = items.map((element) =>
      // React.createElement(BlogItem, {key: element.id, ...element})
     <BlogItem key={element.id} {...element} />
    );

    return <div>{elements}</div>
  }
};

BlogList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

class Like extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { count: props.count };
    
    this.handleClick = bind(this.handleClick, this);
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <p>
        <TextBox>Likes: { this.state.count } </TextBox>
        <button onClick={ this.handleClick }>Like</button>
      </p>
    )
  }
}

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: React.PropTypes.number
};

ReactDOM.render(
  React.createElement(BlogList, {items}),
  document.getElementById('app')
);

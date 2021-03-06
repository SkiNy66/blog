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
    text: 'в таверне))',
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
    text: 'на курорте))',
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

const Like = ({ count, like }) => (
  <p>
    <TextBox>Likes: { count } </TextBox>
    <button onClick={ like }>Like</button>
  </p>
);

const BlogItem = ({ image, text, author, createdAt, updatedAt, count, like }) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{ text }</TextBox>
    <p>
      <TextBox>Автор: { author }</TextBox>
    </p>
    <p>
      <TextBox>Создано: { covertTime(createdAt) }</TextBox>
    </p>
    <p>
      <TextBox>Обновлено: { covertTime(updatedAt) }</TextBox>
    </p>
    <Like count={ count } like={ like }/>
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

const BlogList = ({ items, like}) => (
  <div>
    { items.map((element) => <BlogItem key={element.id} {...element} like={ () => like(element.id) }/>) }
  </div>
);

class BlogPage extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { items };
    this.like = this.like.bind(this);
  }
  
  render() {
    const { items } = this.state;

    return (
      <div>
        <BlogList items={ items } like={ this.like } />,
        <PieChart 
          columns = { items.map((item) => [item.text, item.count]) }
        />,
      </div>
    )
  }
  
  like (item_id) {
    const { items } = this.state;
    const incrementedItemIndex = _.findIndex(items, { id: item_id });  
    const updatedItems = _.cloneDeep(items);
      
    ++updatedItems[incrementedItemIndex].count;
    
    this.setState({ items: updatedItems })
  }
};

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { 
        columns: this.props.columns,
        type : 'pie' 
      }
    })
  }
  
  componentWillUnmount() {
    this.chart.destroy();
  }
  
  componentWillReceiveProps(newProps){
    this.chart.load({columns: newProps.columns});
  }

  render() {
    return (
      <div ref='chart' />
    );
  }
}

ReactDOM.render(
  React.createElement(BlogPage, { items }),
  document.getElementById('app')
);

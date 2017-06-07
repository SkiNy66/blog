const DOM = React.DOM;

const Image = ({...props}) => (
  <img { ...props } />
);

const TextBox = (props) => (
  <span>{props.children}</span>
);

const BlogItem = ({image, text, author, created_at, updated_at}) => (
  <div>
    <Image {...image} />
    <br/>
    <TextBox>{text}</TextBox>
    <p>
      <TextBox>Автор: {author}</TextBox>
    </p>
    <p>
      <TextBox>Создано: {moment(created_at).format('L')}</TextBox>
    </p>
    <p>
      <TextBox>Обновлено: {moment(updated_at).format('L')}</TextBox>
    </p>
  </div>
);

const item = { 
  image: {
    src: 'http://www.seoded.ru/beginner/img/meta-tegi.jpg',
    width: '50px',
    height: '50px',
    alt: 'pic'
  },
  text: 'Sometext',
  author: 'Это Автор',
  created_at: '0089-01-23',
  updated_at: '1379-03-17'
};

ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app1')
);

ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app2')

);
ReactDOM.render(
  React.createElement(BlogItem, item),
  document.getElementById('app3')
);

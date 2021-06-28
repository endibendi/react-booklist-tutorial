import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to…",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/914BkcGCNgS._AC_UL200_SR200,200_.jpg",
    title: "Malibu Rising: A Novel",
    author: "Taylor Jenkins Reid",
  },
];

const Booklist = () => {
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // events in react
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

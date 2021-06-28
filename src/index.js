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
          return <Book key={book.id} book={book} />;
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

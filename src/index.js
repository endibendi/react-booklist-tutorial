import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup variables
const firstBook = {
  imgUrl:
    "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: An Easy & Proven Way to…",
  author: "James Clear",
};
const secoundBook = {
  imgUrl:
    "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
  title: "The Very Hungry Caterpillar",
  author: "Eric Carle",
};

const Booklist = () => {
  return (
    <>
      <section className="booklist">
        <Book
          img={firstBook.imgUrl}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secoundBook.imgUrl}
          title={secoundBook.title}
          author={secoundBook.author}
        />
      </section>
    </>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

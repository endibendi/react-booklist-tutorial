import ReactDom from "react-dom";

//CSS
import "./index.css";

const Booklist = () => {
  return (
    <>
      <section className="booklist">
        <Book />
      </section>
    </>
  );
};

const Book = () => {
  const title = "Atomic Habits: An Easy & Proven Way to…";
  const author = "James Clear";
  const imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg";

  return (
    <article className="book">
      <img src={imgUrl} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

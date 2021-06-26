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
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>Atomic Habits: An Easy & Proven Way to…</h1>
      <h4>James Clear</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

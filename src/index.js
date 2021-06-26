import ReactDom from "react-dom";

//CSS
import "./index.css";

const Booklist = () => {
  return (
    <>
      <section>
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
const Title = () => <h1>Atomic Habits: An Easy & Proven Way to…</h1>;
const Author = () => <h3>James Clear</h3>;

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

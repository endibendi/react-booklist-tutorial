import ReactDom from "react-dom";

//CSS
import "./index.css";
//books array import, this named import should match the exported objects name
import { books } from "./books";
import Book from "./Book";

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

ReactDom.render(<Booklist />, document.getElementById("root"));

export default Booklist;

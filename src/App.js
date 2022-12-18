import "./App.css";
import Message from "./components";

const user = {
  name: "Anton",
  message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, nulla.", 
};

function App() {
  return (
    <article className="MessageArticle">
      <Message sender={user} message={user} />
    </article>
  );
}

export default App;

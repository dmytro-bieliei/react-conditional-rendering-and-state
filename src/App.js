import "./App.css";
import Message from "./components";

const user = {
  name: "Anton",
  email: "anton@mail.com",
};

function App() {
  return (
    <article className="MessageArticle">
      <Message sender={user} />
    </article>
  );
}

export default App;

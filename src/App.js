import { Provider } from "react-redux";
import Home from "./containers/Home";
import store from "./redux/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

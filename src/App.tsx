import { Route, Switch } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { NotFound } from "./components/NotFound/NotFound";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Accordion />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

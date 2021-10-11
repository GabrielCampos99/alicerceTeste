import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { NotFound } from "./components/NotFound/NotFound";
import { Accordion } from "./components/Accordion/Accordion";
import { fetchData } from "./api";

function App() {
  const [filmes, setFilmes] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchedData = async () => {
      const dados = await fetchData();

      setFilmes(dados);
      console.log(filmes);
    };
    fetchedData();
    setLoading(false);
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Header />
          {loading && <h1 className="center">Carregando</h1>}
          {!loading && <Accordion filmes={filmes} />}
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

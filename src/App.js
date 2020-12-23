import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import routes from "./routes";
import ThemeContext from "./theme";
import { useDocumentTitle } from "./utils";

const router = (
  <Switch>
    {routes.map(route => {
      const { exact = true, path = "", component = () => { } } = route;
      return (
        <Route key={path} exact={exact} path={path}>
          {component}
        </Route>
      )
    })}
  </Switch>
);

function App() {
  const theme = useContext(ThemeContext);
  const styles = { background: theme.background, color: theme.foreground, height: '100vh' };
  useDocumentTitle('Quang Le');
  return (
    <div className="App">
      <Navbar />
      <div style={styles}>
        <Router>{router}</Router>
      </div>
    </div>
  );
}

export default App;

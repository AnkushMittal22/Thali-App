import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import MenuBar from "./Page/MenuBar";
import Checkout from "./Component/Checkout/Checkout";
import About from "./Page/About";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to={"/home"} />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/menu"} exact>
            <MenuBar />
          </Route>
          <Route path={"/menu/:Checkout"}>
            <Checkout />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route path={"*"}>
            <Redirect to={"/home"} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

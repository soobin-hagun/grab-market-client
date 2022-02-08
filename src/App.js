import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

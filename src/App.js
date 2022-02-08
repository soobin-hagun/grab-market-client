import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
  useHistory,
} from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Header from "./header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div id="body">
          <Switch>
            <Route exact={true} path="/">
              <MainPageComponent />
            </Route>
            <Route exact={true} path="/products/:id">
              <ProductPage />
            </Route>
            <Route exact={true} path="/upload">
              <UploadPage />
            </Route>
          </Switch>
        </div>
        <div id="footer"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";

function Header () {
    const history = useHistory();

    return(
        <div id="header">
          <div id="header-area">
            <Link to="/">
              <img src="/images/icons/logo.png" />
            </Link>
            <Button
              size="large"
              onClick={function () {
                history.push("/upload");
              }}
              icon={<DownloadOutlined />}
            >
              상품 업로드
            </Button>
          </div>
        </div>
    );
}

export default Header;
import React from "react"
import appCss from "./app.module.css"
import { Nav } from "react-bootstrap"
// import 
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      // <div className={appCss.test}>Hello there Mom Love Ya!
      <div>
        <Nav
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>;
      </div>
      // </div>
    )
  }
};

export default App;

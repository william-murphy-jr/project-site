import React from "react"
import appCss from "./app.module.css"
// export default () => <div>Hello Cruel world!</div>

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={appCss.test}>Hello there Mom Love Ya!</div>
    )
  }
};
// const App = () => {
//   return (
//     <div className={appCss.test}>Hello Mom</div>
//   )
// };

export default App;

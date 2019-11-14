import React from "react";
import "./style.css";
import Worship from "../Worship";
class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="col-10 mx-auto p-3 text-center">
          <Worship />
        </div>
      </div>
    );
  }
}

export default Wrapper;

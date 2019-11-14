import React from "react";
import "./style.css";
import Announce from "../Announcements";

class Worship extends React.Component {
  render() {
    return (
      <div className="py-5">
        <h1>CELEBRATION OF WORSHIP</h1>
        <h3>Call to Worship</h3>
        <h3>Greeting</h3>
        <h3>Songs of Prasie</h3>
        <ul className="list-group py-5">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
        </ul>
        <h3>Offering</h3>
        <h3>Announcements</h3>
        <Announce />
        <h3>The Lord's Prayer</h3>
      </div>
    );
  }
}

export default Worship;

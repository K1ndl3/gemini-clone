import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top" >
        <img onClick={() => setExtended(extended => !extended)}className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt=""/>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon}></img>
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extended ? <p>Activities</p> : null }
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

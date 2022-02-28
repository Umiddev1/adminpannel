import React from "react";
import './StaticSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Badge from '@mui/material/Badge';
function StaticSearch() {
  return (
    <div className="staticsearch">
      <div>
        <a className="staticsearch__search" href='#'><SearchIcon /></a>
        <input className="staticsearch__inp" type="text" placeholder="Search topics" />
      </div>
      <div className="staticsearch__icons">
        <ul className="staticsearch__list">
          <li className="staticsearch__item">
          <Badge badgeContent={4} color="warning" >
            <NotificationsNoneIcon />
          </Badge>
          </li>
          <li  className="staticsearch__item">
            <Badge badgeContent={3} color="primary">
              <ChatBubbleOutlineIcon />
            </Badge>
            </li>
          <li  className="staticsearch__item"><PowerSettingsNewIcon /></li>
        </ul>
      </div>
    </div>
  )
}
export default StaticSearch
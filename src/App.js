import React, {useState, useEffect}  from 'react';
import './App.css';


import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import chatListItem from './components/chatListItem';
import chatIntro from './components/chatIntro';
import chatWindow from './components/chatWindow';

export default  () => {

  const [chatlist, setChatList] = useState([{chatId: 1, title: 'Pedro', image: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg", image: ''}]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">

          <header>
            <img className="header-avatar" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt=""/>
            <div className="header-buttons">
              <div className="header-btn">
                  <DonutLargeIcon style = {{color: '#919191'}}/>
              </div>
              <div className="header-btn">
                  <ChatIcon style = {{color: '#919191'}}/>
              </div>
              <div className="header-btn">
                  <MoreVertIcon style = {{color: '#919191'}}/>
              </div>
            </div>
          </header>

          <div className="search">
            <div className="search-input">
            <SearchIcon fontSize = "small" style = {{color: '#919191'}}/>
            <input type = "search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
          </div>

        <div className="chatlist">
          {chatlist.map((item, key)=>(
            <chatListItem
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>

    </div>
    <div className="contentarea">
           {activeChat.chatId !== undefined &&
             <chatWindow />
            }
            {activeChat.chatId === undefined &&
              <chatIntro/>
            } 
      </div>
    </div>
  );
}
import React from 'react';
import './chatWindow.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="" />
                    <div className="chatWindow-name">Pedro</div>
                </div>

                <div className="chatWindow-headerbuttons">

                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>

            </div>
            <div className="chatWindow-body">

            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">

                <div className="chatWindow-btn">
                        <InsertEmoticonIcon style={{ color: '#919191' }} />
                    </div>

                </div>
                <div className="chatWindow-inputarea">
                    <input
                     className="chatWindow-input" 
                     type= "text"
                     placeholder="Digite uma mensagem"
                     />

                </div>      
                <div className="chatWindow-pos">
                <div className="chatWindow-btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>

                </div>
            </div>

        </div>
    );
}
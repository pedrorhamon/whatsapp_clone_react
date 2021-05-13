import React, {useState} from 'react';
import './chatWindow.css';
import messageItem from './messageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import EmojiPicker from 'emoji-picker-react';


export default ({user}) => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] =useState('');
    const [ listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: Pedro, body:'Pi pi pi'},
        {author: Rhamon, body:'Pi pi pi'},
        {author: Sousa, body:'Pi pi pi'}
    ]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null){
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    const handleSendClick = () => {
    }

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
                {list.map((item, key)=> (
                        <messageItem
                            key={key}
                            data={item}
         
                        />
                ))}

            </div>

            <div 
                className="chatWindow-emojiarea" 
                style={{height: emojiOpen? '200px': '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">

                <div className="chatWindow-btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen?40:0}}
                
                >
                        <CloseIcon style={{ color: '#919191' }} />
                    </div>

                <div className="chatWindow-btn"
                        onClick={handleOpenEmoji}
                >
                        <InsertEmoticonIcon style={{ color: emojiOpen?'#009688':'#919191' }} />
                    </div>

                </div>
                <div className="chatWindow-inputarea">
                    <input
                     className="chatWindow-input" 
                     type= "text"
                     placeholder="Digite uma mensagem"
                     value= {text}
                     onChange={e=>setText(e.target.value)}
                     />

                </div>      
                <div className="chatWindow-pos">

                    {text === '' &&
                <div onClick={handleMicClick} className="chatWindow-btn">
                        <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
                    </div>
                    }

                    {text !== '' &&
                <div onClick={handleSendClick} className="chatWindow-btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                    }

                </div>
            </div>

        </div>
    );
}
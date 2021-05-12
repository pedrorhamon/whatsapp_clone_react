import React from 'react';
import './chatListItem.css';

export default ({onClick}) => {
    return (
        <div className="chatListItem"
            onClick={onClick}
        >
            <img className="chatListItem-avatar" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="" />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">Pedro Rhamon</div>
                    <div className="chatListItem-date">16:08</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Olá, seu caga pelado</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
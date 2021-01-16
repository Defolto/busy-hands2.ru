import React from 'react'
import '../../styles/rightCol/chat.scss'
import avatar from '../../server/img/avatar.jpg'

export class Chat extends React.Component{
    render(){
        return(
            <div className="chat">
                <div className="chat-users">
                    <div className="chat-users__select">
                        <img src={avatar} alt="foto"/>
                        <div className="chat-users__info">
                            <p className="chat-users__name">Егоров</p>
                            <p className="chat-users__lastMessage">Тут последнее сообщение</p>
                        </div>
                    </div>
                    <div className="chat-users__select">
                        <img src={avatar} alt="foto"/>
                        <div className="chat-users__info">
                            <p className="chat-users__name">Егоров</p>
                            <p className="chat-users__lastMessage">Тут последнее сообщение</p>
                        </div>
                    </div>
                    <div className="chat-users__select">
                        <img src={avatar} alt="foto"/>
                        <div className="chat-users__info">
                            <p className="chat-users__name">Егоров</p>
                            <p className="chat-users__lastMessage">Тут последнее сообщение</p>
                        </div>
                    </div>
                </div>
                <div className="chat-messages">
                    <div className="chat-messages__wrapper">
                        <div className="out">
                            <p>Привет)</p>
                            <span>14:19</span>
                        </div>
                        <div className="in">
                            <p>Пока</p>
                            <span>14:19</span>
                        </div>
                        <div className="out">
                            <p>Почему?</p>
                            <span>14:19</span>
                        </div>
                    </div>
                    <form className="chat-messages__submit">
                        <input type="text" placeholder="Введите сообщение"/>
                        <input type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        )
    }
}
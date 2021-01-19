import React from 'react'
import '../../styles/rightCol/chat.scss'
import avatar from '../../server/img/maksim.jpg'
import io from 'socket.io-client'
import { User } from '../../models/User';

/** Виджет для чата*/
export class Chat extends React.Component{
    /** 
     * Хранение всей необходимой информации про чаты пользователя и хранение истории переписки с выбранным пользователем
     * @constructor
     * @this {Chat}
    */
    constructor(props){
        super(props);
        this.socket = io();
        this.state ={
            message: '',
            userChats: 'ky',
            activeUserChat: '',
            historyMessages: []
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.writeDate = this.writeDate.bind(this);
    }

    /**
     * После обновления состояния будут сделаны: <br>
     * 1) в this.state.historyMessages запишется стартовое сообщение <br>
     * 2) регистрация слушателя события sendMessage через Socket.io <br>
     * 2) загрузка пользователей, с которыми есть чат <br>
     * @this {Chat}
     */
    componentDidMount(){
        const now = new Date();
        let time = now.getHours() + ':' + now.getMinutes();
        const firstMessage = {
            date: time,
            text: 'Можете начать чат',
            way: 'notification'
        }
        let newHistoryMessages = this.state.historyMessages;
        newHistoryMessages.push(firstMessage);
        this.setState({
            historyMessages: newHistoryMessages
        })

        let pastHistoryMessages = this.state.historyMessages;
        const upadte = (data) =>{
            this.setState(data)
        }
        const youName = this.props.user.name;

        this.socket.on('sendMessage', function(msg, name) {
            const now = new Date();
            let time = now.getHours() + ':' + now.getMinutes();
            let objectMessage;
            if (name == youName) {
                objectMessage = {
                    date: time,
                    text: msg,
                    way: 'out'
                }
            }else{
                objectMessage = {
                    date: time,
                    text: msg,
                    way: 'in'
                }
            }
            let newHistoryMessages = pastHistoryMessages;
            newHistoryMessages.push(objectMessage);
            upadte(newHistoryMessages);
        });    

        const updateUserChats = (users, activeUserChat) =>{
            this.setState({
                userChats: users,
                activeUserChat: activeUserChat
            })
        }
        const youEmail = this.props.user.email;
        
        fetch('/getUsersChat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date:{
                    chats: this.props.user.chats
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            let activeUserChat = '';
            let userChats = res.map((object, index)=>{
                let userChat = new User(object);
                if (index == 0) {
                    activeUserChat = userChat.email;
                }
                return(<div key={userChat.email} className={`chat-users__select ${index == 0 ? "chat-users__active" : ""}`}>
                            <img src={userChat.getUrlImg(2)} alt="foto"/>
                            <div className="chat-users__info">
                                <p className="chat-users__name">{userChat.name}</p>
                                <p className="chat-users__lastMessage">{userChat.getLastMessage(youEmail)}</p>
                            </div>
                        </div>)
            })
            updateUserChats(userChats, activeUserChat)
        });
    }

    /** 
     * Запись данных в this.state
     * @param {object} event - отлавливает от кого пришло событие
     * @this {Chat}
    */
    writeDate(event){
        this.setState({message: event.target.value});
    }

    /**
     * Отправка сообщения в следующие этапы: <br>
     * 1) проверка наличия сообщения и отправка события sendMessage через Socket.io <br>
     * 2) очистка поля ввода сообщения <br>
     * @this {Chat}
     */
    sendMessage(event){
        event.preventDefault();
        if (this.state.message != '') {
            this.socket.emit('sendMessage', this.state.message, this.props.user.name);
            this.setState({
                message: ''
            })
        }
    }
    
    /**
     * 1) создание блока пользователей с которыми есть чат <br> 
     * 2) создание блока чата <br>
     * *используется функциональный компонент Messages для генерации сообщений
     */
    render(){
        console.log(this.state.activeUserChat);
        return(
            <div className="chat">
                <div className="chat-users">
                    {this.state.userChats}
                </div>
                <div className="chat-messages">
                    <div className="chat-messages__wrapper">
                        <Messages messages={this.state.historyMessages} activeUserChat={this.state.activeUserChat}/>
                    </div>
                    <form className="chat-messages__submit" onSubmit={this.sendMessage}>
                        <input type="text" placeholder="Введите сообщение" value={this.state.message} onChange={this.writeDate}/>
                        <input type="submit" value="Отправить"/>
                    </form>
                </div>
            </div>
        )
    }
}

/**
 * генерация сообщения для блока чата, компонента Chat
*/
function Messages(props){
    try {
        const messages = props.messages.map((msg, index)=>{
            if (msg.way === 'out') {
                return <div key={index} className="out">
                            <p>{msg.text}</p>
                            <span>{msg.date}</span>
                        </div>
            }else if(msg.way === 'notification'){
                return <div key={index} className="notification">
                            <p>{msg.text}</p>
                        </div>
            }else{
                return <div key={index} className="in">
                            <p>{msg.text}</p>
                            <span>{msg.date}</span>
                        </div>
            }
        })
        return messages;
    } catch (error) {
        return <p>Ошибка с сообщениями</p>
    }
}
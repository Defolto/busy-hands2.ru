import React, { Fragment } from 'react'
import {render} from 'react-dom'
import { Header } from './components/Header.jsx'
import './styles/general.scss'
import './styles/fancybox.scss'
import '@fancyapps/fancybox'
import io from 'socket.io-client';
import { Registered } from './components/Registered.jsx'
import {User} from './models/User'
import { LeftMain } from './components/left/leftMain.jsx'
import { RightMain } from './components/right/RightMain.jsx'
import { setHeightChat, setHeightMain } from './functions/scripts.js'

/** Основной компонент*/
class BusyHands extends React.Component{
    /** 
     * Хранение всей необходимой информации о пользователе
     * @constructor
     * @this {BusyHands}
    */
    constructor(props){
        super(props);
        this.state = {
            registered: false,
            sendAlert: false,
            messageError: '',
            user: ''
        },
        this.socket = io()
    }

    /**
     * После обновления состояния будут сделаны: <br>
     * 1) setHeightMain() и setHeightChat() для адаптации экрана <br>
     * 2) отправка события show через Socket.io <br>
     * 3) регистрация слушателя события show через Socket.io для отображения пользователей, которые зашли
     * @this {BusyHands}
     */
    componentDidUpdate(){
        if (this.state.user != '') {
            setHeightMain();
            setHeightChat();
            let youName = this.state.user.name;
            this.socket.emit('show', youName);
            this.socket.on('show', function(name) {
                if (name != youName) {
                    alert(`${name} в сети`)
                }
            });
        }
    }

    /**
     * Вход пользователя в случае удачной проверки. Проверка проходит в компоненте Registered, метод checkLogin()
     */
    loginIn = (user, loginInBool)=>{
        if (loginInBool) {
            const newUser = new User(user);
            this.setState({
                registered: true,
                user: newUser,
                messageError: ''
            })
        }else{
            this.setState({
                messageError: 'Ошибка. Проверьте ввод данных'
            })
        }
    }

    /**
     * Будущий метод для скрытия уведомления от новых пользователей
     */
    hideAlert = () =>{
        this.setState({
            sendAlert: false
        })
    }

    /**
     * Если this.state.registered == false, то выйдет окно входа <br> 
     * Если this.state.registered == true, то выйдет приложение
     */
    render(){
        if (this.state.registered) {
            return(
                <Fragment>
                    <Header user={this.state.user} />
                    <main>
                        <LeftMain />
                        <RightMain user={this.state.user} />
                    </main>
                    <footer>Сделано Максимом</footer>
                    {this.state.sendAlert ? <ShowAlert hideAlert={this.hideAlert} name={this.state.sendAlert}/> : ''}
                </Fragment>
            )
        } else {
            return <Registered loginIn={this.loginIn} messageError={this.state.messageError}/>
        }
    }
}

/**
 * Будущий компонент, отображающий уведомления в нижнем правом углу
*/
function ShowAlert(props){
    return(
        <div className="modal">
            <p>{props.name} в сети</p>
            <button onClick={()=>props.hideAlert()}>Закрыть</button>
        </div>
    )
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
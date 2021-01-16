import React, { Fragment } from 'react'
import {render} from 'react-dom'
import { Header } from './components/Header.jsx'
import './styles/general.scss'
import './styles/fancybox.scss'
import '@fancyapps/fancybox'
import img from './img/foto.jpg'
import io from 'socket.io-client';
import { Registered } from './components/Registered.jsx'
import {User} from './models/User'
import {bd} from './server/emulation'
import { LeftMain } from './components/left/leftMain.jsx'
import { RightMain } from './components/right/RightMain.jsx'
import { setHeightChat, setHeightMain } from './functions/scripts.js'

// const socket = io();
// let youName = prompt("Ваше имя?");
// socket.emit('show', youName);
// socket.on('show', function(name) {
//     if (name != youName) {
//         alert(`${name} в сети`)
//     }
// });

/** Основной компонент*/
class BusyHands extends React.Component{
    /** 
     * Хранение всей необходимой информации
     * @constructor
     * @this {BusyHands}
    */
    constructor(props){
        super(props);
        this.state = {
            registered: true,
            user: new User(bd[0])
        }
    }

    componentDidMount(){
        setHeightMain();
        setHeightChat();
    }

    /**
     * Вход пользователя в случае удачной проверки. Проверка проходит в компоненте Registered.jsx, метод checkLogin()
     * @param {object} user - передача объекта для создания экземпляра класса
     * @param {boolean} loginIn - результат проверки из компонета Registered.jsx, метод checkLogin()
     * @this {BusyHands}
     */
    loginIn = (user, loginIn)=>{
        if (loginIn) {
            const newUser = new User(user);
            this.setState({
                registered: true,
                user: newUser
            })
        }
    }

    render(){
        if (this.state.registered) {
            return(
                <Fragment>
                    <Header user={this.state.user} />
                    <main>
                        <LeftMain />
                        <RightMain />
                    </main>
                    <footer>Сделано Максимом</footer>
                </Fragment>
            )
        } else {
            return <Registered loginIn={this.loginIn}/>
        }
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
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

// const socket = io();
// let youName = prompt("Ваше имя?");
// socket.emit('show', youName);
// socket.on('show', function(name) {
//     if (name != youName) {
//         alert(`${name} в сети`)
//     }
// });

/**
 * Проверка того, что документация работает.
 */
class BusyHands extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registered: true,
            user: ''
        }
    }

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
                    <Header />
                    <main>
                        Тут чуть позже будет основной контент
                    </main>
                </Fragment>
            )
        } else {
            return <Registered loginIn={this.loginIn}/>
        }
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
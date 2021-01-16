import React from 'react'
import '../styles/registered.scss'
import {bd} from '../server/emulation'

export class Registered extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            error: false
        }

        this.checkLogin = this.checkLogin.bind(this);
        this.writeDate = this.writeDate.bind(this);
    }

    checkLogin(event){
        event.preventDefault();
        for (let i = 0; i < bd.length; i++) {
            if (this.state.email === bd[i]["email"]) {
                if (this.state.password == bd[i]["password"]) {
                    this.props.loginIn(bd[i], true)
                    return;
                }else{
                    alert("Пароль с ошибкой")
                    return;
                }
            }
        }
        alert("Пользователя нет")
    }

    writeDate(event){
        if (event.target.type === 'email') {
            this.setState({email: event.target.value});
        } else if(event.target.type === 'password') {
            this.setState({password: event.target.value});
        }
    }

    render(){
        return(
            <div className="registered">
                <h1>Busy-hands.ru</h1>
                <form onSubmit={this.checkLogin}>
                    <input type="email" value={this.state.email} placeholder="email" onChange={this.writeDate}/>
                    <input type="password" value={this.state.password} placeholder="password" onChange={this.writeDate}/>
                    <label>
                        <input type="checkbox" name="Запомнить меня?" id=""/>
                        <p>Запомнить меня</p>
                    </label>
                    <input type="submit" value="Войти" />
                </form>
            </div>
        )
    }
}
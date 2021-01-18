import React from 'react'
import '../styles/registered.scss'
import {bd} from '../server/emulation'

/** Компонент окна регистрации*/
export class Registered extends React.Component{
    /** 
     * Хранение всей необходимой информации для регистрации
     * @constructor
     * @this {Registered}
    */
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

    /** 
     * Проверка на существование такого пользователя в базе данных
     * @param {object} event - отлавливает от кого пришло событие
     * @this {Registered}
    */
    checkLogin(event){
        event.preventDefault();
        for (let i = 0; i < bd.length; i++) {
            if (this.state.email === bd[i]["email"]) {
                if (this.state.password == bd[i]["password"]) {
                    this.props.loginIn(bd[i], true)
                    return;
                }else{
                    this.props.loginIn('', false)
                    return;
                }
            }
        }
        this.props.loginIn('', false)
    }

    /** 
     * Запись данных в this.state
     * @param {object} event - отлавливает от кого пришло событие
     * @this {Registered}
    */
    writeDate(event){
        if (event.target.type === 'text') {
            this.setState({email: event.target.value});
        } else if(event.target.type === 'password') {
            this.setState({password: event.target.value});
        }
    }

    /** 
     * Вывод окна входа
     * @this {Registered}
    */
    render(){
        return(
            <div className="registered">
                <h1>Busy-hands.ru</h1>
                <form onSubmit={this.checkLogin}>
                    <p className="error">{this.props.messageError}</p>
                    <input type="text" value={this.state.email} placeholder="email" onChange={this.writeDate}/>
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
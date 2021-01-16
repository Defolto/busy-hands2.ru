import React from 'react'
import setting from '../img/setting.png'
import avatar from '../img/avatar.jpg'
import '../styles/header.scss'

/**
 * Проверка того, что документация работает в header.
 */
export class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="header-companyName">{this.props.user.company}</div>
                <div className="header-user">
                    <img className="header-user__avatar" src={avatar} alt="ваше фото"/>
                    <p className="header-user__name">{this.props.user.name}</p>
                    <img className="header-user__setting" src={setting} alt=""/>
                </div>
            </header>
        )
    }
}
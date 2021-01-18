import React from 'react'
import setting from '../img/setting.png'
import '../styles/header.scss'

/**
 * Компонент для отображения шапки
 */
export class Header extends React.Component{
    /** 
     * Вывод шапки
     * @this {Header}
    */
    render(){
        return(
            <header className="header">
                <div className="header-companyName">{this.props.user.company}</div>
                <div className="header-user">
                    <img className="header-user__avatar" src={this.props.user.getUrlImg(1)} alt="ваше фото"/>
                    <p className="header-user__name">{this.props.user.name}</p>
                    <img className="header-user__setting" src={setting} alt=""/>
                </div>
            </header>
        )
    }
}
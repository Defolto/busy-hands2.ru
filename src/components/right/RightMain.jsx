import React from 'react'
import { Chat } from './Chat.jsx'
import '../../styles/rightCol/nav.scss'

/** Компонент правой части экрана. Содержит в себе меню виджетов и сам блок виджета*/
export class RightMain extends React.Component{
    /** 
     * Хранение информации про активный виджет
     * @constructor
     * @this {RightMain}
    */
    constructor(props){
        super(props);
        this.state = {
            widget: "chat"
        }
    }

    /**
     * С помощью switch выбирается активный виджет
     */
    render(){
        switch (this.state.widget) {
            case "chat":
                return( <div className="rightCol">
                            <nav>
                                <ul>
                                    <li>Чат</li>
                                    <li>Задачи</li>
                                    <li>Напоминания</li>
                                </ul>
                                <div className="staff">
                                    Сотрудники: 5 7
                                </div>
                            </nav>
                            <div className="widget">
                                <Chat user={this.props.user} />
                            </div>
                        </div>)
            default:
                break;
        }
    }
}
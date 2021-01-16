import React from 'react'
import { Chat } from './Chat.jsx'
import '../../styles/rightCol/nav.scss'


export class RightMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            widget: "chat"
        }
    }

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
                                <Chat />
                            </div>
                        </div>)
            default:
                break;
        }
    }
}
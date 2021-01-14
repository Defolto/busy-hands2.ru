import React, { Fragment } from 'react'
import {render} from 'react-dom'
import { Header } from './components/Header.jsx'
import './styles/general.scss'
import './styles/fancybox.scss'
import '@fancyapps/fancybox'
import img from './img/foto.jpg'

/**
 * Проверка того, что документация работает.
 */
class BusyHands extends React.Component{
    render(){
        return <Fragment>
            <Header />
            <a href={img} data-fancybox="images" data-caption="My caption">
                <img src={img} alt="" />
            </a>
        </Fragment>
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
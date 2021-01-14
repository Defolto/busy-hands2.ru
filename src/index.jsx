import React, { Fragment } from 'react'
import {render} from 'react-dom'
import { Header } from './components/Header.jsx'
import './styles/general.scss'

/**
 * Проверка того, что документация работает.
 */
class BusyHands extends React.Component{
    render(){
        return <Fragment>
            <Header />
            <p>Привет мир</p>
        </Fragment>
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
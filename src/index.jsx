import React, { Fragment } from 'react'
import {render} from 'react-dom'
import './styles/general.scss'

class BusyHands extends React.Component{
    render(){
        console.log(5);
        return <p>Привет мир!</p>
    }
}

render(<BusyHands />, document.querySelector('#Busy-hands'))
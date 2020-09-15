import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TargetGist from  './components/TargetGist'
import Welcome from  './components/Welcome'
import Layout from  './components/Layout'
import  './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faEye)

const App = () => {
   
    return (
        <Router>
            <div >
                <Layout />
                <div className = "container container-shadow-one ">
                    <Route path = "/index" component = { TargetGist } />
                    <Route path = "/" exact component = { Welcome }  />
                </div>
            </div>
        </Router>
    )
}

export default App
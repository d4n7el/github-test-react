import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

import TargetGist from  './components/GistList'
import Layout from  './components/Layout'
import Gist from  './components/Gist'
import  './index.css'

library.add(faCheckSquare, faCoffee, faEye)

const App = () => {
   
    return (
        <Router>
            <div >
                <Layout />
                <div className = "container container-shadow-one ">
                    <Route path = "/gists" exact component = { TargetGist } />
                    <Route path = "/gists/:id" exact component = { Gist }  />
                </div>
            </div>
        </Router>
    )
}

export default App
import React from 'react'
import { HashRouter, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

import TargetGist from  './components/GistList'
import Navbar from  './components/Navbar'
import Gist from  './components/Gist'
import  './index.css'

library.add(faCheckSquare, faCoffee, faEye)

const App = () => {
   
    return (
        <HashRouter basename='/'>
            <div >
                <Navbar />
                <div className = "container container-shadow-one ">
                    <Route path = "/" exact component = { TargetGist } />
                    <Route path = "/gists" exact component = { TargetGist } />
                    <Route path = "/gists/:id" exact component = { Gist }  />
                </div>
            </div>
        </HashRouter>
    )
}

export default App
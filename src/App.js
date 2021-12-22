import React, { Component } from 'react'
import NavBar from './compo/NavBar'
import News from './News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<News pageSize={5} category="general" />} />
                </Routes>
                <Routes>
                    <Route exact path="/business" element={<News pageSize={5} category="business" />} />
                </Routes>
                <Routes>
                    <Route exact path="/entertainment" element={<News pageSize={5} category="entertainment" />} />
                </Routes>
                <Routes>
                    <Route exact path="/health" element={<News pageSize={5} category="health" />} />
                </Routes>
                <Routes>
                    <Route exact path="/science" element={<News pageSize={5} category="science" />} />    
                </Routes>
                <Routes>
                    <Route exact path="/sports" element={<News pageSize={5} category="sports" />} />
                </Routes>
                <Routes>
                    <Route exact path="/technology" element={<News pageSize={5} category="technology" />} />
                </Routes>
            </Router>
        )
    }
}
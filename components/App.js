import React from 'react';
import List from './List';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const App = () => {

    return (
        <>
        <BrowserRouter>
        <h1>ToDo List</h1>
        <button><Link to="/all">All</Link></button>
        <button><Link to="/done">Done</Link></button>
        <button><Link to="/notdone">Not-Done</Link></button>
            <Routes>
                <Route path="/all" exact element={<List mode="all"/>}></Route>
                <Route path="/done" exact element={<List mode="done"/>}></Route>
                <Route path="/notdone" exact element={<List mode="notdone"/>}></Route> 
            </Routes>
        </BrowserRouter>
        </>
    )
};

export default App;
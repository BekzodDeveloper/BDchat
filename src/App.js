import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {

    let postsInApp = [
        {id:1, message:"Hello, I'm Bekzod Developer!", likesCount:18, disLikesCount:8},
        {id:2, message:"Hello, I'm Front-end Developer!", likesCount:11, disLikesCount:22},
        {id:3, message:"Hello, I'm Junior Front-end Developer!", likesCount:101, disLikesCount:32},
        {id:4, message:"Hello,!", likesCount:8, disLikesCount:9}
    ]

    let dialogsInApp = [
        {id: 1, name: "Bekzod"},
        {id: 2, name: "Abdulaziz"},
        {id: 3, name: "Sardor"},
        {id: 4, name: "Ibrohim"}
    ]

    let messagesInApp = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hey!"},
        {id: 2, message: "Hey!"},
        {id: 2, message: "Hey!"}
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/profile' component={Profile}></Route>*/}
                    {/*<Route exact path='/dialogs' component={Dialogs}></Route>*/}
                    <Route path='/news' component={News}></Route>
                    <Route path='/music' component={Music}></Route>
                    <Route path='/settings' component={Settings}></Route>

                    <Route exact path='/profile' render={ () => <Profile posts={postsInApp}/>}></Route>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogsInApp} messages={messagesInApp}/>}></Route>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;

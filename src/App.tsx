import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import LeftMenuBar from "./components/LeftMenuBar/LeftMenuBar";
import ProfileZone from "./components/ProfileZone/ProfileZone";
import SettingsBox from "./components/Settings/SettingsBox";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import Users from "./components/Users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePageContainer from "./components/ProfileZone/ProfileInfo/ProfilePageContainer";


const App = () => {
    return (
        <div className="backgroundZone">
            <Route component={Header}/>
            <div className="socialPage">
                <Route component={LeftMenuBar}/>
                <Route component={Friends}/>
                <div className="socialPageContent">
                    <Route path="/profile" component={ProfileZone}/>
                    <Route path="/test/:userId" component={ProfilePageContainer}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Route component={SettingsBox}/>
                <Route component={Footer}/>
            </div>
        </div>

    );
}

export default App;

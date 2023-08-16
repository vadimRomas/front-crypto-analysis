import {useEffect, useState} from "react";
import {userServices} from "../../services/userServices";
import {useNavigate} from "react-router-dom";
import "./user.css"
import {UserUpdate} from "./UserUpdate";
import {MainCryptoAPIKeys} from "./CryptoAPIKeys/MainCryptoAPIKeys";
import {Tab, Tabs} from "react-bootstrap";
import {MainUserBots} from "./UserBots/MainUserBots";
// todo add which user have bots, balance, how much  заробили  bots

export const UserProfile = () => {
    const navigate = useNavigate()

    const deleteUser = () => {
        userServices.delete()
            .then(() => alert("DELETED!"))
            .catch(error => alert(error));
    };

    const logout = () => {
        localStorage.removeItem('refresh');
        localStorage.removeItem('access');
        navigate('/', {replace: true});
    }

    return (
        <div> {/* className={'user-profile'}*/}
            <div>{/* className={'user-menu'}*/}
                    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="User Data">
        <UserUpdate/>
      </Tab>
      <Tab eventKey="profile" title="Your Bots">
        <MainUserBots/>
      </Tab>
      <Tab eventKey="longer-tab" title="Cryptocurrency Exchange API Keys">
        <MainCryptoAPIKeys/>
      </Tab>
      <Tab eventKey="contact" title="History Orders" disabled>
        <UserUpdate/>
      </Tab>
    </Tabs>
                {/*<div className={'menu-item'}><div onClick={event => setComponent(<UserUpdate/>)}>User Data</div></div>*/}
                {/*<div className={'menu-item'}><div onClick={event => setComponent(<UserUpdate/>)}>Your Bots</div></div>*/}
                {/*<div className={'menu-item'}><div onClick={event => setComponent(<MainCryptoAPIKeys/>)}>Cryptocurrency Exchange API Keys</div></div>*/}
                {/*<div className={'menu-item'}><div onClick={event => setComponent(<UserUpdate/>)}>History Orders</div></div>*/}
                {/*<div className={'menu-item'}><div onClick={event => logout()}>Logout</div></div>*/}
            </div>
        </div>

    );
}

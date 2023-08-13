import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Dashboard} from "./componets/Dashboard/Dashboard";
import {UserRegister} from "./pages/User/UserRegister";
import {UserLogin} from "./pages/User/UserLogin";
import {MyNavbar} from "./MyNavbar";
import {TradingViewChart} from "./pages/tradingView/TradingViewChart";
import {TradingViewAnalysis} from "./pages/tradingView/TradingViewAnalysis";
import {UserProfile} from "./pages/User/UserProfile";
import {FourWindows} from "./pages/tradingView/FourScreen/FourWindows";
import {KitComponent} from "./pages/ourAnalysis/KitComponent";
import {Instruction} from "./pages/instruction/Instruction";
import {Communicate} from "./pages/communicate/Communicate";
import {TradingBot} from "./pages/tradingBot/TradingBot";
import Depth from "./pages/ourAnalysis/Depth";
import {MainCryptoAPIKeys} from "./pages/User/CryptoAPIKeys/MainCryptoAPIKeys";

function App() {
    const time = localStorage.getItem('timeFrame');
    const symbol = localStorage.getItem('symbol');

    if (!time) localStorage.setItem('timeFrame', JSON.stringify({tv: '1', value: '1m', label: '1 minute'}));
    if (!symbol) localStorage.setItem('symbol', JSON.stringify({value: 'BTCUSDT', label: 'BTCUSDT'}));

    return (
        <div className="App">
            <MyNavbar/>
            <Router>
                <Routes>
                    {/*Todo change dynamic url (symbol, timeframe)*/}
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/user/register" element={<UserRegister/>}/>
                    <Route path="/user/login" element={<UserLogin/>}/>
                    <Route path="/user/profile" element={<UserProfile/>}/>
                    <Route path="/TradingView/chart" element={<TradingViewChart/>}/>
                    <Route path="/TradingView/analysis" element={<TradingViewAnalysis/>}/>
                    <Route path="/TradingView/4/screen" element={<FourWindows/>}/>
                    <Route path="/analysis/kit" element={<KitComponent/>}/>
                    <Route path="/instruction" element={<Instruction/>}/>
                    <Route path="/communicate" element={<Communicate/>}/>
                    <Route path="/bot" element={<TradingBot/>}/>
                    <Route path="/depth" element={<Depth/>}/>
                    <Route path="/user/api_keys" element={<MainCryptoAPIKeys/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

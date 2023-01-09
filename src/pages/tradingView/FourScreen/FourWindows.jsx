import React from "react";
import TradingViewWidget, {Themes} from "react-tradingview-widget";

export const FourWindows = () => {

    return (
        <div style={{height: "94vh"}}>
            <div style={{display: "flex",height: "50%"}}>

                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        symbol="BINANCE:BTCUSDT"
                        interval="15"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        symbol="BINANCE:DOGEUSDT"
                        interval="15"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
            </div>
            <div style={{display: "flex",height: "50%"}}>
                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        symbol="BINANCE:BTCUSDT"
                        interval="15"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        symbol="BINANCE:DOGEUSDT"
                        interval="15"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
            </div>
        </div>


    );
}

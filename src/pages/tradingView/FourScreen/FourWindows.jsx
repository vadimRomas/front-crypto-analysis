import React from "react";
import TradingViewWidget, {Themes} from "react-tradingview-widget";

export const FourWindows = () => {

    return (
        <div style={{height: "94vh"}}>
            <div style={{display: "flex",height: "50%"}}>

                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        studies={["RSI@tv-basicstudies"]}
                        symbol="BINANCE:BTCUSDT"
                        interval="1"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        studies={["RSI@tv-basicstudies"]}
                        symbol="BINANCE:ETHUSDT"
                        interval="1"
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
                        studies={["RSI@tv-basicstudies"]}
                        symbol="BINANCE:CRVUSDT"
                        interval="1"
                        timezone="Etc/UTC"
                        theme={Themes.DARK}
                        locale="en"
                        autosize
                    />
                </div>
                <div style={{width: "50%", height: "100%"}}>
                    <TradingViewWidget
                        studies={["RSI@tv-basicstudies"]}
                        symbol="BINANCE:XRPUSDT"
                        interval="1"
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

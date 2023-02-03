import {AdvancedChart} from "react-tradingview-embed";
import React from "react";
import type {SymbolInterface} from "../../interface/SymbolInterface";
// import {TimeFrame} from "../../interface/TimeFrame";
// import {Modal} from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";

export const TradingViewChart = () => {
    let symbol: SymbolInterface = JSON.parse(localStorage.getItem('symbol'));
    // let time: TimeFrame = JSON.parse(localStorage.getItem('timeFrame'));

    return (
        <div className='father-wrapper' style={{height: '94vh'}}>
            <div className='wrapper-chart'>
                <AdvancedChart
                    widgetProps={{
                        height: "100%",
                        theme: "dark",
                        interval: 15,
                        symbol: `BINANCE:${symbol.value}`,
                        allow_symbol_change: true,
                        studies: ["RSI@tv-basicstudies"],
                    }}
                />
            </div>
        </div>
    )
}

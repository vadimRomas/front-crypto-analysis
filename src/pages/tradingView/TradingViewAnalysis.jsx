import React, {useState} from "react";
import {AdvancedChart, TechnicalAnalysis, TickerTape} from "react-tradingview-embed";
import {Button} from "react-bootstrap";
import {MoreInformation} from "./MoreInformation";
// import {TimeFrame} from "../../interface/TimeFrame";
// import type {SymbolInterface} from "../../interface/SymbolInterface";

export const TradingViewAnalysis = () => {
    const [moreInformation, setMoreInformation] = useState(false);
    let symbol = JSON.parse(localStorage.getItem('symbol'));
    let time = JSON.parse(localStorage.getItem('timeFrame'));

    return (
        <div className='main' style={{background: "#131722", height: "94vh"}}>
            <TickerTape/>
            <div className='AC-and-TA-p' style={{display: "flex", width: "100%"}}>
                <div className='AC' style={{width: "100%"}}>
                    <AdvancedChart widgetProps={{
                        theme: "dark",
                        symbol: symbol.value,
                        // interval: time.tv,
                        timezone: "Etc/UTC",
                        allow_symbol_change: false,
                        hide_side_toolbar: true,
                        hide_top_toolbar: true
                    }}/>
                </div>
                <div className="TA-and-p" style={{width: "100%"}}>
                    <div className='TA' style={{paddingRight: "30%", paddingLeft: "30%"}}>
                        <TechnicalAnalysis
                            widgetProps={{
                                symbol: `BINANCE:${symbol.value}`,
                                interval: '15m',
                                showIntervalTabs: false,
                            }}/>
                    </div>

                    <p className="text-inff" style={{color: "#b2b5be", paddingRight: "20%", paddingLeft: "20%"}}>
                        This gauge displays a real-time technical analysis overview for your selected
                        timeframe. Based on the most popular technical indicators, such as
                        Moving Averages, Oscillators and Pivots.
                    </p>
                </div>
            </div>

            {moreInformation ? <MoreInformation symbol={symbol}/> :
                <Button style={{background: '#131722'}} onClick={event => setMoreInformation(true)}>More...</Button>}
            {moreInformation ? <Button style={{background: '#131722'}}
                                       onClick={event => setMoreInformation(false)}>less...</Button> : " "}

            {/*<Modal show={isLoading} fullscreen={fullscreen} onHide={() => setIsLoading(false)}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Warning</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>We run search <Icon.Bicycle/>. Please wait two minutes <Icon.Heart/>.</Modal.Body>*/}
            {/*</Modal>*/}

        </div>
    );
}

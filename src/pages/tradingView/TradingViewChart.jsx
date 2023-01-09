import {AdvancedChart} from "react-tradingview-embed";
import React from "react";
import type {SymbolInterface} from "../../interface/SymbolInterface";
import {TimeFrame} from "../../interface/TimeFrame";
// import {Modal} from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";

export const TradingViewChart = () => {
    let symbol: SymbolInterface = JSON.parse(localStorage.getItem('symbol'));
    let time: TimeFrame = JSON.parse(localStorage.getItem('timeFrame'));

    return (
        <div className='father-wrapper' style={{height: '94vh'}}>
            <div className='wrapper'>
                <AdvancedChart
                    widgetProps={{
                        height: '100%',
                        theme: "dark",
                        interval: 15,
                        symbol: `BINANCE:${symbol.value}`,
                        allow_symbol_change: true,
                    }}
                />
            </div>
        </div>
    )
}

//     {/*<Modal show={isLoading} fullscreen={fullscreen} onHide={() => setIsLoading(false)}>*/}
//             {/*    <Modal.Header closeButton>*/}
//             {/*        <Modal.Title>Warning</Modal.Title>*/}
//             {/*    </Modal.Header>*/}
//             {/*    <Modal.Body>We run search <Icon.Bicycle/>. Please wait two minutes <Icon.Heart/>.</Modal.Body>*/}
//             {/*</Modal>*/}
//         // </div>
//     )
// }
//         // <div className='wrapper' >
//         <AdvancedChart widgetProps={{
//                 height: '100%',
//                 "theme": "dark",
//                 symbol: "BINANCE:BTCUSDT",
//                 allow_symbol_change: true,
//         }}/>
//
//     {/*<Modal show={isLoading} fullscreen={fullscreen} onHide={() => setIsLoading(false)}>*/}
//             {/*    <Modal.Header closeButton>*/}
//             {/*        <Modal.Title>Warning</Modal.Title>*/}
//             {/*    </Modal.Header>*/}
//             {/*    <Modal.Body>We run search <Icon.Bicycle/>. Please wait two minutes <Icon.Heart/>.</Modal.Body>*/}
//             {/*</Modal>*/}
//         // </div>

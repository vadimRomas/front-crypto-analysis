import {InfoAboutCrypto} from "../Symbols/InfoAboutCrypto";
import {AdvancedChart} from "react-tradingview-embed";
import React from "react";
import {Button} from "react-bootstrap";

export function Dashboard() {

    // const go_to = (where) => {
    // navigate(where)
    // }
    return (
        <div style={{background: 'rgb(19, 23, 34)'}}>
            <header>
                <div className='main_text' style={{color: 'white', justifyContent: 'center'}}>
                    <h1>Welcome to our website dedicated to trading bots!</h1>
                    <p style={{textAlign: 'center'}}>
                        In the world of financial markets, speed and efficiency can be crucial factors for success.
                        That's why more and more traders are turning to automated solutions such as trading bots to gain
                        an edge in competitive conditions.

                        Our website is the place where you will find everything you need to understand and utilize
                        trading bots. We offer a wide range of information that will help you understand how these bots
                        work, how they can be used to automate your trading, and how to achieve the best results with
                        their help.

                        Our team of experts has studied and tested numerous trading bots, and we understand the
                        importance of having access to a reliable and effective solution. Therefore, our website
                        provides objective reviews of trading bots, comparisons of their functionality, cost, and
                        reliability. We also provide useful tips on selecting and configuring trading bots to help you
                        avoid common mistakes and achieve better results.

                        Regardless of your experience and capital size, our website is a trusted source of information
                        and support that will help you harness the full power of trading bots. We constantly update our
                        resources to ensure you receive up-to-date and reliable information.

                        Join our community of traders who utilize trading bots to achieve their financial goals. Unlock
                        the potential of automation and gain an edge in the market with us!

                        We invite you to start your journey in the world of trading bots now.
                    </p>
                    <Button variant="primary">Get Started</Button>


                </div>
                <div className="graphik">
                    <AdvancedChart widgetProps={{
                        theme: "dark",
                        symbol: 'BINANCE:BTCUSDT',
                        // interval: time.tv,
                        timezone: "Etc/UTC",
                        allow_symbol_change: false,
                        hide_side_toolbar: true,
                        hide_top_toolbar: true
                    }}/>
                </div>
                {/*<InfoAboutCrypto />*/}
            </header>
        </div>
    );
}

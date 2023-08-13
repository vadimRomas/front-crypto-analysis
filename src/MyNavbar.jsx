import {Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Select from 'react-select';
import {Fragment, useEffect, useState} from "react";
import {timeFrame} from "./state/timeFrame";
import * as Icon from "react-bootstrap-icons";
import {GetSymbols} from "./componets/Symbols/GetSymbols";

export const MyNavbar = () => {
    const [token, setToken] = useState();

    const currentTimeFrame = JSON.parse(localStorage.getItem('timeFrame'));

    useEffect(() => {
        const access = localStorage.getItem('access');
        setToken(access);
    }, [])

    const changeTimeFrame = (value) => localStorage.setItem('timeFrame', JSON.stringify(value));
    const expand = 'lg'

    return (
        <Navbar style={{height: '6vh'}} key={expand} bg="dark" variant="dark" expand={expand}>
            <Container fluid>
                <Navbar.Brand href="/">Crypto Analysis</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Navbar.Offcanvas
                    style={{background: '#131722', color: '#e9ecef'}}
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    bg="dark"
                >
                    <Offcanvas.Header closeButton>
                        {/*<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>*/}
                        {/*    Crypto Analysis*/}
                        {/*</Offcanvas.Title>*/}
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <NavDropdown title="TradingView PRO" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/TradingView/chart">Chart</NavDropdown.Item>
                                <NavDropdown.Item href="/TradingView/analysis">Analysis TradingView</NavDropdown.Item>
                                <NavDropdown.Item href="/TradingView/4/screen">Four Windows</NavDropdown.Item>
                                <NavDropdown.Item href="/bot">Trading bot</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Our Analysis">
                                <NavDropdown.Item href="/">Chart</NavDropdown.Item>
                                <NavDropdown.Item href="/analysis/kit">Kit</NavDropdown.Item>
                                <NavDropdown.Item href="/bot">Trading bot</NavDropdown.Item>
                                <NavDropdown.Item href="/communicate">Communicate</NavDropdown.Item>
                            </NavDropdown>
                            {/*<Nav.Link href="/aws">AWS S3</Nav.Link>*/}
                            <Nav.Link href="/instruction">Instruction</Nav.Link>
                            <Fragment>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={currentTimeFrame || timeFrame[0]}
                                    isDisabled={false}
                                    isLoading={false}
                                    isClearable={true}
                                    isRtl={false}
                                    isSearchable={true}
                                    name="time frame"
                                    options={timeFrame}
                                    onChange={changeTimeFrame}
                                />
                            </Fragment>
                            {/* eslint-disable-next-line react/jsx-pascal-case */}
                            {/*<div className="select-symbol">*/}
                            {/*    <GetSymbols/>*/}
                            {/*</div>*/}
                        </Nav>
                        {!token ? <Nav>
                            <Nav.Link href="/user/login">Log in</Nav.Link>
                            <Nav.Link eventKey={2} href="/user/register">
                                Reg in
                            </Nav.Link>
                        </Nav> : <Nav.Link href="/user/profile"><Icon.Person color='white' width="100%"/></Nav.Link>}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        // <Navbar style={{height: '7vh'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="/">Crypto Analysis</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <NavDropdown title="Payment" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="/payment">Payment</NavDropdown.Item>
        //                     <NavDropdown.Item href="/payment/history">Payment History</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <NavDropdown title="TradingView PRO" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="/TradingView/chart">Chart</NavDropdown.Item>
        //                     <NavDropdown.Item href="/TradingView/analysis">Analysis TradingView</NavDropdown.Item>
        //                     <NavDropdown.Item href="/TradingView/4/screen">Four Windows</NavDropdown.Item>
        //                     <NavDropdown.Item href="#">Trading bot</NavDropdown.Item>
        //
        //                 </NavDropdown>
        //                 <NavDropdown title="Our Analysis">
        //                     <NavDropdown.Item href="/">Chart</NavDropdown.Item>
        //                     <NavDropdown.Item href="/analysis/kit">Kit</NavDropdown.Item>
        //                     <NavDropdown.Item href="#">Trading bot</NavDropdown.Item>
        //                     <NavDropdown.Item href="#">Communicate</NavDropdown.Item>
        //                 </NavDropdown>
        //                 {/*<Nav.Link href="/aws">AWS S3</Nav.Link>*/}
        //                 <Nav.Link href="/instruction">Instruction</Nav.Link>
        //
        //                 <Fragment>
        //                     <Select
        //                         className="basic-single"
        //                         classNamePrefix="select"
        //                         defaultValue={currentTimeFrame || timeFrame[0]}
        //                         isDisabled={false}
        //                         isLoading={false}
        //                         isClearable={true}
        //                         isRtl={false}
        //                         isSearchable={true}
        //                         name="time frame"
        //                         options={timeFrame}
        //                         onChange={changeTimeFrame}
        //                     />
        //                 </Fragment>
        //                 {/* eslint-disable-next-line react/jsx-pascal-case */}
        //                 <div className="select-symbol">
        //                     <GetSymbols />
        //                 </div>
        //             </Nav>
        //             {!token ? <Nav>
        //                 <Nav.Link href="/user/login">Log in</Nav.Link>
        //                 <Nav.Link eventKey={2} href="/user/register">
        //                     Reg in
        //                 </Nav.Link>
        //             </Nav> : <Nav.Link href="/user/profile"><Icon.Person color='white' size="10%"/></Nav.Link>}
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}

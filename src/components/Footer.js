import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const Footer = () => {
    const socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'];

    const socialMediaButtons = socialMedia.map((name) => {
        const className = `bi bi-${name} text-white`;
        return (
            <Col className="social-media-container p-2 ">
                <i className={className}></i>
            </Col>
        );
    })
    return (
        <Container fluid className="footer-menu-container align-items-center">
            <Row>
                <Col xs={3}className="social-media d-grid align-items-center">
                    <Stack gap={3} className="social-media-stack">
                        <h1 className="h1-footer-text"><span className="footer-text">PMW</span></h1>
                        <Row>
                            {socialMediaButtons}
                        </Row>
                    </Stack>
                </Col>

                <Col xs={1} className="contact-info">
                    <Stack className="contact-stack">
                            <div className="text title-text">Contact</div>
                            <Stack gap={2} className="contact-num-email">
                                    <span className="text number">(123) 456-7890</span>
                                    <span className="text email">testing@pmw.com</span>

                            </Stack>
                            <Stack className="contact-address">
                                <span className="text address"> 123 Main St Anywhere, FL 12345</span>
                            </Stack>
                    </Stack>
                </Col>

                <Col xs={6} className="menus">
                    <Row>
                        <Col className="owners-menu">
                            <Stack className="menu">
                                <div className="text title-text">Owners</div>
                                <Stack gap={1} className="menu-options">
                                    <span className="text">Owner Login</span>
                                    <span className="text ">Owner Resources</span>
                                    <span className="text ">Owner FAQs</span>
                                </Stack>
                            </Stack>
                            
                        </Col>    
                        
                        <Col className="residents-menu ">
                            <Stack className="menu">
                                <div className="text title-text ">Residents</div>
                                <Stack gap={1} className="menu-options ">
                                    <span className="text ">Resident Login</span>
                                    <span className="text ">Resident Resources</span>
                                    <span className="text ">Resident FAQs</span>
                                    <span className="text ">Resident Benefits</span>
                                </Stack>
                            </Stack>
                            
                        </Col>

                        <Col className="property-menu ">
                            <Stack className="menu">
                                <div className="text title-text ">Property Management</div>
                                <Stack gap={1} className="menu-options ">
                                    <span className="text ">Residential</span>
                                    <span className="text ">Multi-family</span>
                                    <span className="text ">Landlord Protection</span>
                                </Stack>
                            </Stack>
                        </Col>

                        <Col className="real-estate-menu ">
                            <Stack className="menu">
                                <div className="text title-text ">Real Estate</div>
                                <Stack gap={1} className="menu-options ">
                                    <span className="text ">Buyers</span>
                                    <span className="text ">Sellers</span>
                                    <span className="text ">Education</span>
                                </Stack>
                            </Stack>
                        </Col>

                        <Col className="calculator-menu ">
                            <Stack className="menu">
                                <div className="text title-text ">Calculators</div>
                                <Stack gap={1} className="menu-options ">
                                    <span className="text ">What's My Home Worth?</span>
                                    <span className="text ">ROI Calculator</span>
                                    <span className="text ">Rent vs Sell Calculator</span>
                                    <span className="text ">Vacancy Loss Calculator</span>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Container>  
    );
};

export default Footer;
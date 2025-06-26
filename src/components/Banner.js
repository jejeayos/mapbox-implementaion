import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Banner = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const displayDirection = window.innerWidth < 786 ? 'btn-group-vertical' : '';

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <Container fluid className="banner-container">
            <h4><span className='text services-text'>Experience the PMW</span><span className='cursive-text services-text'>difference</span></h4>
            <ButtonGroup className={displayDirection + ' gap-3'}>
                <Button size="sm" variant="light" className="services rounded-pill text-nowrap p-3">Property Management Services</Button>
                <Button size="sm" variant="light" className="services rounded-pill text-nowrap p-3">Real Estate Services</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Banner;
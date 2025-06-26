import React, { useEffect, useRef , useState } from 'react';
import mapboxgl from 'mapbox-gl';
import cities from '../cities.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Map = () => {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    const popup = new mapboxgl.Popup({ 
        closeButton: false,
        closeOnClick: false,
        closeOnMove: true,
    });

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamVqZWF5b3MiLCJhIjoiY21jNjM4dmMzMHluMjJsb2kya3Zid2hwZCJ9.kEjrnukstHaSA4NF7gkm8g'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/jejeayos/cmc8scjcd01f101r7bgk6hybt',
            center: windowWidth < 1200 ? [-94.626816, 39.027683] : [-94.626816, 38.883516], // starting position [lng, lat]
            zoom: 9.5 // starting zoom
        });

        mapRef.current.on('click', (event) => {
            redirectToCityPage(event);
        });

        mapRef.current.on('mouseover', 'rentvine', (event) => {
            showPopup(event);
        });

        mapRef.current.on('mouseleave', 'rentvine', () => {
            mapRef.current.getCanvas().style.cursor = '';
            popup.remove();
        });

        return () => {
            mapRef.current.remove()
        }
    });

    const redirectToCityPage = (evt) => {
        const features = mapRef.current.queryRenderedFeatures(evt.point, {
        });
        if (!features.length) {
            return;
        }

        const feature = features[0];
        const cityName = feature.properties.name;
        const urlCityName = cityName.replace(/\s+/g, '-').toLowerCase();
        const origin = window.location.origin;

        window.location.replace(origin + `/${urlCityName}`);
    };

    const showPopup = (evt) => {
        mapRef.current.getCanvas().style.cursor = 'pointer';

        if (!evt.features.length) {
            return;
        }

        const feature = evt.features[0];

        popup.setLngLat(feature.geometry.coordinates)
        .setHTML(
            `<h3 >${feature.properties.name}</h3>`
        )
        .addTo(mapRef.current);
    };

    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    const numberCol = () => {
        if (windowWidth >= 1200) {
            return 8; // Large and up
        } else if (windowWidth>= 768) {
            return 4; // Medium
        } else {
            return 2; // Below medium
        }
    };

    const cityRows = chunkArray(cities, numberCol());
    
    const cityButtons = cityRows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-3 mt-3">
            {row.map((city, cityIndex) => {
                const redirectLink = `/${city.name.replace(/\s+/g, '-').toLowerCase()}`;
                
                return (
                    <Col key={city.id || cityIndex} className="city-button-col">
                        <Button
                            variant='light'
                            className="city-name rounded-pill text-nowrap p-3"
                            href={redirectLink}
                        >
                            {city.name}
                        </Button>
                    </Col>
                );
            })}
        </Row>
    ));

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
        <>
            <Container fluid className='map-contianer' id='map-container' ref={mapContainerRef} />
            <Container fluid="xxl" id='cities' className='cities-container d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <h3><span className='cursive-text cities'>local</span><span className='text cities'>experts, expansive service area</span></h3>
                </div>
                <ButtonGroup className="d-grid justify-content-center align-items-center" role="group" aria-label="Basic outlined example">
                    {cities.length > 0 && cityButtons}
                </ButtonGroup>
            </Container>
        </>
    );
}

export default Map;
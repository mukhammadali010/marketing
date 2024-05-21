import React, { useEffect, useState } from 'react';

// Define API keys for Yandex Maps and OpenWeatherMap
const YANDEX_MAPS_API_KEY = '78eb91a1-8baf-4f28-be21-30ad54e78407';
const OPENWEATHERMAP_API_KEY = 'd58082d2702339083a04cf97256b417f';

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [windDirection, setWindDirection] = useState(0);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        // Load Yandex Maps API script dynamically
        if (!document.querySelector(`script[src*="api-maps.yandex.ru"]`)) {
            const script = document.createElement('script');
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAPS_API_KEY}&lang=en_US`;
            script.async = true;
            script.onload = initializeMap;
            document.body.appendChild(script);
        }
    }, []);

    // Initialize Yandex map
    const initializeMap = () => {
        ymaps.ready(() => {
            const myMap = new ymaps.Map('map', {
                center: [41.2995, 69.2401],
                zoom: 12,
                controls: ['zoomControl'],
            });

            myMap.behaviors.disable('scrollZoom');
            setMap(myMap);
            fetchWindDirection();
        });
    };

    // Fetch wind direction data
    const fetchWindDirection = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=${OPENWEATHERMAP_API_KEY}`
            );
            const data = await response.json();
            setWindDirection(data.wind.deg);
        } catch (error) {
            console.error('Failed to fetch wind direction data:', error);
        }
    };

    // Calculate levels based on traffic data
    const calculateLevels = (point) => {
        const trafficData = point.trafficData ?? Math.random() * 10;
        const toxicFumeData = point.toxicFumeData ?? Math.random() * 10;

        return {
            trafficLevel: trafficData.toFixed(1),
            toxicLevel: toxicFumeData.toFixed(1),
        };
    };

    // Create a shape with wind direction
    const createShape = (center, initialRadius, point) => {
        const { trafficLevel, toxicLevel } = calculateLevels(point);
        const hintContent = `Traffic Level: ${trafficLevel}/10\nToxic Level: ${toxicLevel}/10`;

        // Set color based on traffic and toxic levels
        const color =
            trafficLevel > 7 || toxicLevel > 7
                ? 'rgba(255, 0, 0, 0.8)'
                : trafficLevel > 4 || toxicLevel > 4
                ? 'rgba(255, 165, 0, 0.8)'
                : 'rgba(0, 255, 0, 0.8)';

        const shape = new ymaps.Circle(
            [center, initialRadius],
            { hintContent },
            {
                strokeColor: color,
                strokeWidth: 3,
                fillColor: color.replace('0.3', '0.3'),
                draggable: false,
            }
        );

        // Set rotation angle based on wind direction
        shape.options.set('rotationAngle', windDirection);

        return shape;
    };

    // Animate a shape
    const animateShape = (shape, speed) => {
        let radius = shape.geometry.getRadius();
        const animate = () => {
            radius += speed;
            shape.geometry.setRadius(radius);

            if (radius < 2000) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    // Add and animate shapes based on traffic points
    const addAndAnimateShapes = (trafficPoints, speed = 0.5) => {
        // Remove existing circles
        circles.forEach(shape => map.geoObjects.remove(shape));
        setCircles([]);

        // Create and animate new shapes
        const newShapes = trafficPoints.map(point => {
            const center = [point.latitude, point.longitude];
            const initialRadius = 50;

            const shape = createShape(center, initialRadius, point);
            map.geoObjects.add(shape);
            animateShape(shape, speed);

            return shape;
        });

        setCircles(newShapes);
    };

    // Traffic points data
    const trafficPoints = [
        { latitude: 41.362456, longitude: 69.294729, trafficData: 8, toxicFumeData: 6 },
        { latitude: 41.336479, longitude: 69.276565, trafficData: 6, toxicFumeData: 4 },
        { latitude: 41.278203, longitude: 69.245112, trafficData: 9, toxicFumeData: 8 },
        { latitude: 41.311941, longitude: 69.241405, trafficData: 5, toxicFumeData: 2 },
        { latitude: 41.346802, longitude: 69.203026, trafficData: 7, toxicFumeData: 3 },
        { latitude: 41.3200, longitude: 69.2650, trafficData: 2, toxicFumeData: 1 },
    ];

    // Handle button click
    const handleGenerate = () => {
        if (map) {
            addAndAnimateShapes(trafficPoints, 0.5);
        }
    };

    return (
        <div>
            {/* Map container */}
            <div id="map" style={{ width: '100%', height: '500px' ,zIndex: -999  }}></div>
            {/* Generate button */}
            <button onClick={handleGenerate}  className="btnGenerate">
                Generate
            </button>
        </div>
    );
};

export default MapComponent;

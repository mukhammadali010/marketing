import React, { useEffect, useState } from 'react';

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        // Load the Yandex Maps API script dynamically
        if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?apikey=b1f5e1c4-eb4c-4c38-bb54-e93afa79d36c&lang=en_US';
            script.async = true;
            script.onload = () => {
                ymaps.ready(() => {
                    // Initialize the map
                    const myMap = new ymaps.Map('map', {
                        center: [41.2995, 69.2401],
                        zoom: 12
                    });

                    // Set the map state
                    setMap(myMap);

                    console.log('Map initialized:', myMap);
                });
            };
            document.body.appendChild(script);
        }
    }, []);

    // Function to create a circle with a specified color at a given point
    const createCircle = (center, initialRadius, color) => {
        const circle = new ymaps.Circle([
            center, // Center coordinates (latitude, longitude)
            initialRadius // Initial radius in meters
        ], {
            hintContent: 'Toxic smoke spread area',
        }, {
            strokeColor: color, // Custom color with 80% opacity
            strokeWidth: 3, // Width of the circle's border
            fillColor: color.replace('0.8', '0.3') // Change opacity for fill color
        });

        return circle;
    };

    // Function to animate the expansion of a circle
    const animateCircle = (circle, speed) => {
        let radius = circle.geometry.getRadius();

        const animate = () => {
            radius += speed; // Increment radius based on specified speed
            circle.geometry.setRadius(radius);

            // Continue animation until a max radius (e.g., 2000 meters) is reached
            if (radius < 2000) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    // Function to add circles at specified traffic points and animate them
    const addAndAnimateCircles = (trafficPoints, speed = 0.5) => {
        // Remove existing circles from the map
        circles.forEach((circle) => map.geoObjects.remove(circle));
        setCircles([]);

        // Create and animate new circles at each traffic point
        const newCircles = trafficPoints.map((point) => {
            const center = [point.latitude, point.longitude];
            const initialRadius = 50; // Initial radius in meters
            const color = point.color; // Specify the color based on the point's data

            // Create a circle with the specified color
            const circle = createCircle(center, initialRadius, color);

            // Add the circle to the map
            map.geoObjects.add(circle);

            // Animate the circle's expansion with specified speed
            animateCircle(circle, speed);

            return circle;
        });

        // Update the circles state with the new circles
        setCircles(newCircles);
    };

    // Define an array of 6 traffic points across the map with color information
    const trafficPoints = [
        { latitude: 41.3624564206374, longitude: 69.29472898636432, color: 'rgba(255, 255, 0, 0.8)' }, // Yellow color
        { latitude: 41.336478561809685, longitude: 69.27656530137705, color: 'rgba(255, 0, 0, 0.8)' }, // Red color
        { latitude: 41.27820314252165, longitude: 69.2451116444077, color: 'rgba(255, 255, 0, 0.8)' }, // Yellow color
        { latitude: 41.311941235284046, longitude: 69.24140534275567, color: 'rgba(255, 0, 0, 0.8)' }, // Red color
        { latitude: 41.34680240120471, longitude: 69.20302556074161, color: 'rgba(255, 255, 0, 0.8)' }, // Yellow color
        { latitude: 41.3200, longitude: 69.2650, color: 'rgba(255, 0, 0, 0.8)' } // Red color
    ];

    // Add and animate the circles when the map is loaded
    useEffect(() => {
        if (map) {
            // Add and animate circles with the specified speed
            addAndAnimateCircles(trafficPoints, 0.5);
        }
    }, [map]);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;

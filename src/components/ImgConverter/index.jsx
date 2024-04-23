import React, { useState } from 'react';

function ImageManipulation() {
    // State variables
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [resultData, setResultData] = useState({ red: null, green: null, blue: null });
    const [displayChannel, setDisplayChannel] = useState('');
    const [tolerance, setTolerance] = useState(50);
    const [adjustment, setAdjustment] = useState(50);

    // Handle file input for the first image
    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImage1(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Handle file input for the second image
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImage2(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Function to mix the two images and calculate the difference in color channels
    const applyFilter = () => {
        if (!image1 || !image2) return;

        // Create Image objects for both input images
        const img1 = new Image();
        const img2 = new Image();

        // Set sources for Image objects
        img1.src = image1;
        img2.src = image2;

        // Wait for both images to load before processing
        img1.onload = () => {
            img2.onload = () => {
                // Create canvases for each image and the result
                const canvas1 = document.createElement('canvas');
                const canvas2 = document.createElement('canvas');
                const resultCanvas = document.createElement('canvas');

                // Set canvas dimensions based on the images
                canvas1.width = img1.width;
                canvas1.height = img1.height;
                canvas2.width = img2.width;
                canvas2.height = img2.height;
                resultCanvas.width = img1.width;
                resultCanvas.height = img1.height;

                // Get canvas contexts
                const ctx1 = canvas1.getContext('2d');
                const ctx2 = canvas2.getContext('2d');
                const resultCtx = resultCanvas.getContext('2d');

                // Draw the images onto the respective canvases
                ctx1.drawImage(img1, 0, 0);
                ctx2.drawImage(img2, 0, 0);

                // Retrieve image data from both images
                const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
                const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

                // Create image data objects for each channel (red, green, blue)
                const redChannelData = resultCtx.createImageData(resultCanvas.width, resultCanvas.height);
                const greenChannelData = resultCtx.createImageData(resultCanvas.width, resultCanvas.height);
                const blueChannelData = resultCtx.createImageData(resultCanvas.width, resultCanvas.height);

                // Calculate tolerance and adjustment values
                const tol = tolerance;
                const adj = adjustment;

                // Iterate through each pixel and calculate the difference in color channels
                for (let y = 0; y < canvas1.height; y++) {
                    for (let x = 0; x < canvas1.width; x++) {
                        const index = (y * canvas1.width + x) * 4;

                        // Retrieve RGB values from both images
                        const r1 = imageData1.data[index];
                        const g1 = imageData1.data[index + 1];
                        const b1 = imageData1.data[index + 2];
                        const r2 = imageData2.data[index];
                        const g2 = imageData2.data[index + 1];
                        const b2 = imageData2.data[index + 2];

                        // Calculate differences in RGB values
                        const diffR = Math.abs(r1 - r2);
                        const diffG = Math.abs(g1 - g2);
                        const diffB = Math.abs(b1 - b2);

                        // Apply tolerance and adjustment to the difference
                        const applyTolerance = (diff) => {
                            return diff <= tol ? diff * (adj / 100) : 0;
                        };

                        // Calculate the result for each color channel
                        redChannelData.data[index] = applyTolerance(diffR);
                        greenChannelData.data[index] = applyTolerance(diffG);
                        blueChannelData.data[index] = applyTolerance(diffB);

                        // Set alpha channel to 255 (fully opaque)
                        redChannelData.data[index + 3] = 255;
                        greenChannelData.data[index + 3] = 255;
                        blueChannelData.data[index + 3] = 255;
                    }
                }

                // Convert the image data objects to data URLs
                resultCtx.putImageData(redChannelData, 0, 0);
                const redDataURL = resultCanvas.toDataURL();

                resultCtx.putImageData(greenChannelData, 0, 0);
                const greenDataURL = resultCanvas.toDataURL();

                resultCtx.putImageData(blueChannelData, 0, 0);
                const blueDataURL = resultCanvas.toDataURL();

                // Set the state with the red, green, and blue data URLs
                setResultData({
                    red: redDataURL,
                    green: greenDataURL,
                    blue: blueDataURL,
                });
            };
        };
    };

    // Function to display the selected color channel
    const showChannel = (channel) => {
        setDisplayChannel(channel);
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Image Manipulation Program</h1>

            {/* File input controls */}
            <div style={{ marginBottom: '20px' }}>
                <input type="file" accept="image/*" onChange={handleFileChange1} />
                <input type="file" accept="image/*" onChange={handleFileChange2} />
                <br />
                <label>Tolerance: </label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={tolerance}
                    onChange={(e) => setTolerance(parseInt(e.target.value))}
                />
                <br />
                <label>Adjustment: </label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={adjustment}
                    onChange={(e) => setAdjustment(parseInt(e.target.value))}
                />
                <br />
                <button onClick={applyFilter}>Apply Filter</button>
            </div>

            {/* Display color channel buttons */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => showChannel('red')}>Show Red</button>
                <button onClick={() => showChannel('green')}>Show Green</button>
                <button onClick={() => showChannel('blue')}>Show Blue</button>
            </div>

            {/* Display the selected color channel */}
            <div>
                {displayChannel && resultData[displayChannel] && (
                    <img
                        src={resultData[displayChannel]}
                        alt={`Channel ${displayChannel}`}
                        style={{ display: 'block', margin: '20px auto', border: '2px solid #000' }}
                    />
                )}
            </div>
        </div>
    );
}

export default ImageManipulation;

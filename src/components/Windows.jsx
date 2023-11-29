// Your Next.js component

const windowsCoordinates = [
    { top: '100px', left: '50px' },
    { top: '150px', left: '200px' },
    // Add more coordinates as needed
  ];
  
  const Windows = () => {
    return (
      <div className="cityscape-container absolute w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
        <img
          src="https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg"
          alt="Cityscape"
          className="w-full h-full object-cover"
        />
        {/* {windowsCoordinates.map((coordinates, index) => (
          <div
            key={index}
            className="window absolute w-16 h-16 bg-yellow-500 border-2 border-gray-800" // Example styling, adjust as needed
            style={{ top: coordinates.top, left: coordinates.left }}
          ></div>
        ))} */}
      </div>
    );
  };
  
  export default Windows;
  
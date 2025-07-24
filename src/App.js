import React, { useEffect, useState } from 'react';
import './App.css'; // Optional: if you want to separate styles

const DiceNewTicketView = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  const boxX = 118; // X position in px
  const boxY = 290; // Y position in px
  const boxSize = 158; // Initial width and height in px)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <img
        src="RedoneCropped.png"
        alt="Cropped Ticket"
        style={styles.croppedTicket}
      />
      <img
        src="GrowingBox.png"
        alt="Growing Box"
        className='growing-box'
        style={{
          top: window.outerWidth * (538/728), 
          left: '50%',
          width: boxSize,
          height: boxSize,
        }}
      />
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>Hot Dog Sunday</p>
        <p style={styles.bottomText}>Current time: {currentTime}</p>
      </div>
    </div>
  );
};

const getFormattedTime = () => {
  const now = new Date();
  return now.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
};

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  croppedTicket: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    display: 'block',
  },
  growingBox: {
    position: 'absolute',
    transformOrigin: 'center',
    opacity: 1,
  },
  bottomBar: {
    textAlign: 'center',
    paddingBottom: '40px',
  },
  bottomText: {
    color: '#B9B9B9',
    fontSize: '13px',
    margin: '4px 0',
  },
};

export default DiceNewTicketView;

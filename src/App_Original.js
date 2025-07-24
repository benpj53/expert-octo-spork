import React, { useEffect, useState } from 'react';
// import './DiceTicketView.css'; // Optional: if you want to separate styles

const DiceTicketView = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Top bar */}
      <div style={styles.header}>
        <div style={styles.iconWrapper}>
          <img
                  src="left_arrow.png"
                  alt="Left Arrow Circle"
                  style={styles.leftArrow}
                />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }} />
      </div>

      {/* Ticket card */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          {/* Top Section */}
          <div style={styles.cardTop}>
            <div style={styles.cardTopLeft}>
              <h3 style={styles.title}>General Admission</h3>
            </div>
            <div>
              <img
                src="info.png"
                alt="Info Circle"
                style={styles.infoCircle}
              />
            </div>
          </div>
          <p style={styles.caption}>1 OF 1</p>

          <div style={{ flex: 1 }} />

          {/* QR Code and Name */}
          <div style={styles.qrContainer}>
            <img
              src="HotDogQRCode.jpg"
              alt="QR Code"
              style={styles.qrImage}
            />
            <p style={styles.name}>Ben Johnson</p>
          </div>

          <div style={{ flex: 1 }} />

          {/* Footer Details */}
          <div style={styles.footerRow}>
            <div style={styles.footerColumn}>
              <p style={styles.caption}>WHERE</p>
              <p style={styles.footerText}>El Cid</p>
            </div>
            <div style={styles.footerColumnRight}>
              <p style={styles.caption}>WHEN</p>
              <p style={styles.footerText}>4:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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
  header: {
    display: 'flex',
    padding: '15px',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    paddingLeft: '10px',
  },
  icon: {
    fontSize: '30px',
    color: 'white',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: '79vh',
    color: 'black',
    boxSizing: 'border-box',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTopLeft: {
    flex: 1,
  },
  title: {
    margin: 0,
    fontWeight: '600',
  },
  caption: {
    fontSize: '11px',
    color: 'black',
    margin: 0,
  },
  infoCircle :{
    width: '20px', 
    height: '20px', 
    objectFit: 'contain',
  },
  leftArrow :{
    width: '30px', 
    height: '30px', 
    objectFit: 'contain', 
  },
  qrContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  qrImage: {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
  },
  name: {
    marginTop: '8px',
    fontSize: '14px',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  footerColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  footerText: {
    fontWeight: '600',
    fontSize: '14px',
    margin: 0,
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

export default DiceTicketView;

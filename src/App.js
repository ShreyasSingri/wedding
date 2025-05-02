import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <br />
      <img src={require('./1.png')} alt="Wedding Invitation" style={{ height: "150px" }} />
      <h1>Shreyas Weds Sankalpa</h1>
      <h2>Save the date:</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Reception:</h3>
          <h4>14th May 2025</h4>
          <h4>7:00 PM onwards </h4>
        </div>
        <div>
          <h3>Muhrutham:</h3>
          <h4>15th May 2025</h4>
          <h4>10:30 AM onwards </h4>
        </div>
      </div>
      <br />
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/1OYCPWgxFChXv5Ds6rixtK6oFOX7GqPaV/preview"
          title="Google Drive Video"
          className="video-iframe"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </div>
      <br />
      <br />
      <FlipClockCountdown
        style={{ justifySelf: 'center' }}
        className="flip-clock"
        to={new Date('2025-05-15T05:00:00Z')}
        labels={['Days', 'Hours', 'Minutes', 'Seconds']}
        showSeparators={false}
        labelStyle={{ color: '#b2f7ef' }}
        separatorStyle={{ size: '0px' }}
        digitBlockStyle={{ color: '#006D77', background: '#FFDDD2' }}
      />
      <h2>Venue:</h2>
      <h3>Vasavi Convention Hall</h3>
      <p>4, Vanivilas Rd, Beside to Vasavi Vidyanikethan High School, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
      <br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3648916621173!2d77.573611274841!3d12.948487087364704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ec317ff977%3A0x8c8ae92292729817!2sVasavi%20Convention%20Center!5e0!3m2!1sen!2sin!4v1743265812525!5m2!1sen!2sin"
        title='Google Maps'
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br />
      <br />
      <h2>Awaiting your presence<br />Join us to make our day Special & Memoreable!!!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

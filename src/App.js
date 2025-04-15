import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <br />
      <img src={require('./1.png')} alt="Wedding Invitation" style={{height:"150px"}} />
      <h1 style={{marginTop:"0px"}}>Shreyas Weds Sankalpa</h1>
      <h1>Save the date:</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Reception:</h2>
          <h3>14th May 2025</h3>
          <h3>7:00 PM onwards </h3>
        </div>
        <div>
          <h2>Muhrutham:</h2>
          <h3>15th May 2025</h3>
          <h3>10:30 AM onwards </h3>
        </div>
      </div>
      {/* <iframe src="https://drive.google.com/file/d/10HXhe3UGZRlcp2yO5J8wXQ_x-BC7EjYj/preview"loading="lazy" width="640" height="360" allow="autoplay" title="Wedding Invitation Video"></iframe> */}
      <div className="video-container">
      <iframe
        src="https://drive.google.com/file/d/1FvzkVhckOwI5i1C_r2-zx15_9_9luZoD/preview"
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
      <p>4, Vanivilas Rd, Beside to Vasavi Vidyanikethan High School,<br/> Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3648916621173!2d77.573611274841!3d12.948487087364704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ec317ff977%3A0x8c8ae92292729817!2sVasavi%20Convention%20Center!5e0!3m2!1sen!2sin!4v1743265812525!5m2!1sen!2sin"
        title='Google Maps'
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br />
        <br />
        <h2>Awaiting your presence</h2>
    </div>
  );
}

export default App;

import '../styles/App.css';
import circle from '../svg/circle.svg';
import head from '../svg/head.svg';
import timer from '../svg/timer.svg';
import logo from '../svg/logo.svg';
import dot from '../svg/dot.svg';
import twitter from '../svg/twitter.svg';
import discord from '../svg/discord.svg';
import { ReactSVG } from 'react-svg';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import FlipClock from 'x-react-flipclock'

function App() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const endOfTomorrow = tomorrow.toISOString().split('.')[0] + 'Z';

  return (
    <div className="App">
      <div className='container'>
        <div className='circle-container'>
          <ReactSVG className='circle' src={circle} />
          <ReactSVG className='logo' src={logo} />
        </div>
        <div className='rectangle-container'>
          <ReactSVG className='rectangle' src={head} />
          <h1 className='title'>Firefly playing soon</h1>
          <ReactSVG className='dot first-dot' src={dot} />
          <ReactSVG className='dot second-dot' src={dot} />
        </div>

        <ReactSVG className='timer' src={timer} />

        {/* <FlipClock
          type="countdown"
          count_to={endOfTomorrow}
          units = {[
            {
              type: 'DAY',
              title: 'day',
            },
            {
              type: 'HOUR',
              title: 'hour',
            },
            {
              type: 'MIN',
              title: 'min',
            },
            {
              type: 'seconds',
              title: 'SEC',
            }
          ]}
        /> */}

        <div className='contacts'>
          <h2 className='links-title'>Join our community!</h2>
          <div className='links'>
            <a href="https://discord.gg/fireflydex" target="_blank" rel="noopener noreferrer">
              <ReactSVG className='timer' src={discord} />
            </a>
            <a href="https://twitter.com/FireFlydexZK" target="_blank" rel="noopener noreferrer">
              <ReactSVG className='timer' src={twitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

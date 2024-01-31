import "../styles/App.css";
import circle from "../svg/circle.svg";
import head from "../svg/head.svg";
import timer from "../svg/timer.svg";
import logo from "../svg/logo.svg";
import dot from "../svg/dot.svg";
import twitter from "../svg/twitter.svg";
import discord from "../svg/discord.svg";
import { ReactSVG } from "react-svg";
import FlipCountdown from "@rumess/react-flip-countdown";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="circle-container">
					<ReactSVG className="circle" src={circle} />
					<ReactSVG className="logo" src={logo} />
				</div>
				<div className="rectangle-container">
					<ReactSVG className="rectangle" src={head} />
					<h1 className="title shining">Firefly playing soon</h1>
					<ReactSVG className="dot first-dot shining" src={dot} />
					<ReactSVG className="dot second-dot shining" src={dot} />
				</div>
				<div className="clock">
					<ReactSVG className="timer" src={timer} />
					<div className="flipClock">
						<FlipCountdown
							hideYear
							hideMonth
							theme="dark"
							titlePosition="bottom"
							dayTitle="Days"
							hourTitle="Hours"
							minuteTitle="Min"
							secondTitle="Sec"
							endAt={"2024-02-07 00:00:00"}
						/>
					</div>
				</div>

				<div className="contacts">
					<h2 className="links-title">Join our community!</h2>
					<div className="links">
						<a
							href="https://discord.gg/fireflydex"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ReactSVG className="timer" src={discord} />
						</a>
						<a
							href="https://twitter.com/FireFlydexZK"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ReactSVG className="timer" src={twitter} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

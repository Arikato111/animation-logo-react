import { FC, useEffect, useState } from 'react'
import './App.css'

const App: FC = () => {
  const [nowTime, setNowTime] = useState({
    second: 0,
    minute: 0,
    hour: 0
  })
  const [reverseClock, setReverseClock] = useState(false)
  const changeTime = () => {
    const getTime = new Date();
    let hour = getTime.getHours();
    if (hour > 12) hour -= 12;
    setNowTime({
      second: getTime.getSeconds(),
      minute: getTime.getMinutes(),
      hour: hour
    });
    setTimeout(() => {
      changeTime()
    }, 1000);
  }
  useEffect(() => {
    changeTime()
  }, [])
  return <main className="block">
    <div
      style={reverseClock ? { transform: `rotate(-${nowTime.second * 6}deg)` } : {}}
      id="radius" className="radius">
      <div style={{ transform: `rotate(${nowTime.second * 6}deg) translate(0, -50%)` }} id="second" className="clock" />
      <div style={{ transform: `rotate(${nowTime.minute * 6}deg) translate(0, -50%)` }} id="min" className="clock" />
      <div style={{ transform: `rotate(${nowTime.hour * 30}deg) translate(0, -50%)` }} id="hour" className="clock" />
      <div className="num12">XII</div>
      <div className="dot" />
    </div>
    <p>
      <button onClick={() => setReverseClock(!reverseClock)}>reverse</button>
    </p>
  </main>
}

export default App
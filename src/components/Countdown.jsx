import { useEffect, useState } from 'react';
import ShowCounter from "./ShowCounter";
import ExpiredNotice from "./ExpiredNotice"

let useCountdown = (targetDate) => {
    let countDownDate = new Date(targetDate).getTime();

    let [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        let interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

let getReturnValues = (countDown) => {
    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    days = days >= 0 && days < 10 ? '0' + days : days;
    hours = hours >= 0 && hours < 10 ? '0' + hours : hours;
    minutes = minutes >= 0 && minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds >= 0 && seconds < 10 ? '0' + seconds : seconds;

    return [days, hours, minutes, seconds];
};

let CountdownTimer = (props) => {
    let [days, hours, minutes, seconds] = useCountdown(props.targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
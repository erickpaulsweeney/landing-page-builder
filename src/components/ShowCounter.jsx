function ShowCounter(props) {
    return (
        <div className="container-countdown">
            <div className="col-days">
                <div className="days-val">{props.days}</div>
                <div className="days-text">Days</div>
            </div>
            <div className="col-hours">
                <div className="hours-val">{props.hours}</div>
                <div className="hours-text">Hours</div>
            </div>
            <div className="col-minutes">
                <div className="minutes-val">{props.minutes}</div>
                <div className="minutes-text">Minutes</div>
            </div>
            <div className="col-seconds">
                <div className="seconds-val">{props.seconds}</div>
                <div className="seconds-text">Seconds</div>
            </div>
        </div>
    )
}

export default ShowCounter;
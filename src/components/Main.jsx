import { useState } from "react";
import CountdownTimer from "./Countdown";

function Main(props) {
    let year = new Date().getFullYear().toString();
    let month = (new Date().getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    let day = new Date().getDate().toString();
    let hour = new Date().getHours().toString();
    let minute = new Date().getMinutes().toString();
    // console.log(year, month, day, hour, minute)
    
    let pencil = "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80";
    let wavy = "https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

    let [main, setMain] = useState('');
    let [secondary, setSecondary] = useState('');
    let [subtext, setSubtext] = useState('');
    let [button, setButton] = useState('');
    let [date, setDate] = useState(`${year}-${month}-${day}T${hour}:${minute}`);
    let [picture, setPicture] = useState('');
    let [border1, setBorder1] = useState(null);
    let [border2, setBorder2] = useState(null);
    let [border3, setBorder3] = useState(null);
    let [border4, setBorder4] = useState(null);
    let [border5, setBorder5] = useState(null);
    let [error, setError] = useState('none');
    let [msg, setMsg] = useState('');
    let [finished, setFinished] = useState(false);

    let handleSubmit = (ev) => {
        ev.preventDefault();
        if (main.length === 0) {
            setBorder1('3px solid red');
            setMsg('Text should have at least one character');
            setError('block');
            return;
        }
        if (secondary.length === 0) {
            setBorder2('3px solid red');
            setMsg('Text should have at least one character');
            setError('block');
            return;
        }
        if (subtext.length === 0) {
            setBorder3('3px solid red');
            setMsg('Text should have at least one character');
            setError('block');
            return;
        }
        if (button.length === 0) {
            setBorder4('3px solid red');
            setMsg('Text should have at least one character');
            setError('block');
            return;
        }
        if (picture.length === 0) {
            setBorder5('3px solid red');
            setMsg('One image should be selected');
            setError('block');
            return;
        }
        setFinished(true);
        return;
    }

    return (

        <div className="container-all-form" style={{ backgroundImage: picture.length > 0 ? `url(${picture})` : null }}>
            {!finished &&
                <>
                    <div className="error-msg" style={{ display: error }}>{msg}</div>
                    <div className="container-form">
                        <div className="title">Build Your Landing Page</div>
                        <form onSubmit={handleSubmit} className="form-proper">
                            <label htmlFor="main-headline">Main Headline</label>
                            <input type="text" name="main-headline" value={main} placeholder="Offer of the Decade!"
                                style={{ border: border1 }}
                                onChange={(el) => setMain(el.target.value)}
                                onFocus={() => {
                                    setBorder1(null);
                                    setError('none');
                                }} />

                            <label htmlFor="secondary-headline">Secondary Headline</label>
                            <input type="text" name="secondary-headline" value={secondary} placeholder="Save 90%"
                                style={{ border: border2 }}
                                onChange={(el) => setSecondary(el.target.value)}
                                onFocus={() => {
                                    setBorder2(null);
                                    setError('none');
                                }} />

                            <label htmlFor="subtext">Subtext</label>
                            <input type="text" name="subtext" value={subtext} placeholder="Only for today!"
                                style={{ border: border3 }}
                                onChange={(el) => setSubtext(el.target.value)}
                                onFocus={() => {
                                    setBorder3(null);
                                    setError('none');
                                }} />

                            <label htmlFor="button-text">Button Text</label>
                            <input type="text" name="button-text" value={button} placeholder="Buy now!"
                                style={{ border: border4 }}
                                onChange={(el) => setButton(el.target.value)}
                                onFocus={() => {
                                    setBorder4(null);
                                    setError('none');
                                }} />

                            <label htmlFor="promo-end">When will the promo end?</label>
                            <input type="datetime-local" name="promo-end" value={date} placeholder={date} min={date}
                                onChange={(el) => setDate(el.target.value)} />

                            <div className="container-pictures">
                                <input type="radio" id="pencil" name="picture" value={pencil}
                                    style={{ outline: border5 }}
                                    onChange={() => {
                                        setPicture(pencil);
                                        setBorder5(null);
                                        setError('none');
                                    }} />
                                <img className="option pencil-img" src={pencil} alt="Pencil" />
                                <input type="radio" id="wavy" name="picture" value={wavy}
                                    style={{ outline: border5 }}
                                    onChange={() => {
                                        setPicture(wavy);
                                        setBorder5(null);
                                        setError('none');
                                    }} />
                                <img className="option wavy-img" src={wavy} alt="Wavy Blue" />
                            </div>

                            <button type="submit" className="submit-button">Start Timer</button>
                        </form>
                    </div>
                </>
            }

            {finished &&
                <div className="container-main">
                    <div className="finished-headline">{main}</div>
                    <div className="finished-secondary">{secondary}</div>
                    <div className="finished-subtext">{subtext}</div>
                    {/* <div className="container-countdown">{date}</div> */}
                    <CountdownTimer targetDate={date} />
                    <div className="finished-button">{button}</div>
                </div>
            }
        </div>
    )
}

export default Main;
import React, {useEffect, useState} from 'react'


export function CounterHook() {
    const [number, setNumber] = useState(101);
    const [step, setStep] = useState(1);
    const [color, setColor] = useState('green');

    useEffect(() => {
        console.log('COMPONENT LOADED');
    }, []);

    useEffect(() => {
        if (number % 2 === 0) {
            setColor('red')
        } else {
            setColor('green')
        }
    }, [number]);

    const inc = () => {
        setNumber(number + step);
    };

    const dec = () => {
        setNumber(number - step);
    };

    const onStepChange = (event) => {
        setStep(Number(event.target.value));
    };

    const countStyle = {
        color: color,
        fontSize: "2rem"
    };

    return (
        <div>
            <div style={countStyle}>COUNT: {number}</div>
            <input type="text" value={step} onChange={onStepChange}/>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )
}


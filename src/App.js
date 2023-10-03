import './App.css';
import React, {useEffect, useState} from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => {
        setToggle(prevState => !prevState);
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('Delayed action!')
            setData({});
        }, 1000);
    }, []);

    return (
        <div>
            <Navbar/>
            <AppRouter/>
            <div>
                <h1>Hello world!</h1>
                <button style={{color: 'red'}} className={"buttonClass"} onClick={onClick} data-testid={"button-test-id"}>Click!
                </button>
                <input type={"text"} placeholder={"input value..."} data-testid={"input-test-id"}
                       onChange={(e) => setValue(e.target.value)}/>
                <h2 data-testid={"text-test-id"}>{value}</h2>
                {data && <div>Data ready!</div>}
                {toggle && <div data-testid={"toggle-div-test-id"}>Button toggled!</div>}
            </div>
        </div>
    );
}

export default App;

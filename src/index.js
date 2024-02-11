import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Comp() {
    const [text, setText] = useState("Don't change this input's value!");
    const [inputValue, setInputValue] = useState("72548125636");
    const [textFontSize, setTextFontSize] = useState(12);
    const [index, setIndex] = useState(-1);
    const angerColors = ["green", "blue", "pink", "purple", "red"];

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setText("Why are you changing the value???");
        setTextFontSize(prevSize => prevSize + 4);
    }

    useEffect(() => {
        if (index === 4) {
            return () => { };
        }
        setIndex(prevIndex => prevIndex + 1);
    }, [textFontSize])

    return (
        <form>
            <h1 style={{ fontSize: textFontSize }}>{text}</h1>
            <input type="text" value={inputValue} onChange={handleChange} />
            <h2>Anger level</h2>
            <div style={{ width: "200px", height: "200px", backgroundColor: angerColors[index] }}></div>
        </form>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Comp />);
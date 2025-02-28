import React from "react";

function DisplayWindow({ expression, result, history }) {
    return (
    <div className="displayWindow">
        <p className="history">               
                <button>{history}</button>
        </p>
        <p className="expression">{expression}</p>
        <p className="result">{result}</p>
    </div>
    );
}

export default DisplayWindow;
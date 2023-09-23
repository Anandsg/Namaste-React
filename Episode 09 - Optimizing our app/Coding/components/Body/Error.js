import React from "react";
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return (
        <div>
            <h3>Something went wong!!</h3>
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    );
};

export default Error;
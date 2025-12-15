import React from "react";
import { Button } from "./Button";

const BackNext = ({ back, next }) => {

    if (back == null) {
        return (
            <div className="flex flex-row my-5 gap-4">
                <Button buttonStyle="btn--secondary" link={`${next}`}>Next</Button>
            </div>
        )
    }
    else if (next == null) {
        return (
            <div className="flex flex-row my-5 gap-4">
                <Button buttonStyle="btn--secondary" link={`${back}`}>Back</Button>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-row my-5 gap-4">
                <Button buttonStyle="btn--secondary" link={`${back}`}>Back</Button>
                <Button buttonStyle="btn--secondary" link={`${next}`}>Next</Button>
            </div>
        );
    }
};

export default BackNext;
import React from "react";
import { Button } from "./Button";

const BackNext = ({ back, next }) => {

    if (back == null) {
        return (
            <div className="flex flex-row m-10 gap-4">
                <Button buttonStyle="btn--secondary" link={`/subjects/math/aa/${next}`}>Next</Button>
            </div>
        )
    }
    else if (next == null) {
        return (
            <div className="flex flex-row m-10 gap-4">
                <Button buttonStyle="btn--secondary" link={`/subjects/math/aa/${back}`}>Back</Button>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-row m-10 gap-4">
                <Button buttonStyle="btn--secondary" link={`/subjects/math/aa/${back}`}>Back</Button>
                <Button buttonStyle="btn--secondary" link={`/subjects/math/aa/${next}`}>Next</Button>
            </div>
        );
    }
};

export default BackNext;
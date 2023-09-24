import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { WORK, REST, WORK_SECONDS, REST_SECONDS } from "./pomodoro";

const Pomodoro = () => {
    const [intervalType, setIntervalType] = useState(WORK);

    return (
        <>
        <div className="flex flex-col items-center pt-6">
            <div className="card w-96 bg-neutral text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Saturday Practice</h2>
                    <p>9/23/2023</p>
                    <p>30 min</p>
                    <ol>
                        <li>Arbans #3</li>
                        <li>Arbans #5</li>
                    </ol>
                </div>
            </div>
        </div>
            <Link to={"/session/new"}><button className="btn btn-neutral">+</button></Link>

        </>
    );
};

Pomodoro.defaultProps = {};
Pomodoro.propTypes = {};

export default Pomodoro;

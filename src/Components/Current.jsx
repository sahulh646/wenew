import React from "react";

const Current = ({ current, location }) => {
    return (
        <>
            <div className="container mt-5">
                <h4 className="text-light text-center mb-5">Current Weather of {location.name}, {location.region}, {location.country}</h4>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img className="float-start" src={current.condition.icon} style={{ maxWidth: 32 }} />
                            <div>
                                <h5 className="card-title">{current.condition.text}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Temp(in C): {current.temp_c}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Temp(in F): {current.temp_f}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Humidity: {current.humidity}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wind degree: {current.wind_degree}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wind dir: {current.wind_dir}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wind speed(kph): {current.wind_kph}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">UV: {current.uv}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Current;
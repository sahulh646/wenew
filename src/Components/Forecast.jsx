import React from "react";

const Forecast = ({ forecast, location }) => {
    return (
        <>
            <div className="container mt-5">
                <h4 className="text-light text-center mb-5">Forecast Weather of {location.name}, {location.region}, {location.country}</h4>
                {forecast.forecastday.map((data, index) => {
                    return (
                        <div className="accordion accordion-flush mt-2" id="accordionFlush">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${index}`}
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        <div class="d-flex flex-row align-items-center mb-2">
                                            <div class="p-2 me-5">{data.date}</div>
                                            <div class="p-2 me-5"><img src={data.day.condition.icon} />{data.day.condition.text}</div>
                                            <div class="p-2 me-5">Min Temp(in C): {data.day.mintemp_c}</div>
                                            <div class="p-2 me-5">Max Temp(in C): {data.day.maxtemp_c}</div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id={`${index}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlus">
                                    <div className="accordion-body">
                                        {data.hour.map((data)=> {
                                            return(
                                                <>
                                                <h6>{data.time}    Temp(in C)</h6>
                                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{width: `${data.temp_c}%`}}>{data.temp_c}%</div>
                                        </div>
                                                </>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Forecast;
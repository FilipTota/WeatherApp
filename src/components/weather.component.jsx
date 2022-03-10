import React from 'react'

const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1 className={'text-white'}>{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1 text-white`}></i>
                </h5>
                {props.temp_celsius ? (<h1 className="py-2 text-white">{props.temp_celsius}&deg;</h1>): null}
                {
                    /*show min and max temp*/
                    minMaxTemp(props.temp_min, props.temp_max)
                }
                <h4 className="py-3 text-white">{props.description}</h4>
            </div>
        </div>
    )
}

const minMaxTemp = (min, max) => {
    if(min && max) {
        return(
            <h3>
                <span className="px-4 text-white">{min}&deg;</span>
                <span className="px-4 text-white">{max}&deg;</span>
            </h3>
        )
    }
}

export default Weather
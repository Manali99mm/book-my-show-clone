import React from 'react'

const Cast = (props) => {
    return (
        <div>
            <div className="flex flex-col flex-wrap items-center">
                <div className="w-32 h-32">
                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-xl text-gray-800">{props.name}</h1>
                <h3 className="text-md text-gray-600">as {props.role}</h3>
            </div>
        </div>
    )
}

export default Cast

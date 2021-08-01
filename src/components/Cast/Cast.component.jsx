import React from 'react'

const Cast = (props) => {
    return (
        <div>
            <div className="flex flex-col flex-wrap items-center">
                <div className="w-32 h-32">
                    <img
                        src={props.image || "https://support.logmeininc.com/assets/images/care/topnav/default-user-avatar.jpg"}
                        alt={props.title}
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-lg px-1 text-gray-800">{props.name}</h1>
                <h3 className="text-sm px-1 text-gray-600">{props.isCrew ? "" : "as"} {props.role}</h3>
            </div>
        </div>
    )
}

export default Cast

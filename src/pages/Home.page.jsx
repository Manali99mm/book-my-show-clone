import React from 'react'

import EntertainmentCardSlider from '../components/EntertainmentCard/EntertainmentCard.component'

export default function HomePage() {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-5 mx-6">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
}

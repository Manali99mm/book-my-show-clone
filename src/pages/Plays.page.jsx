import React from 'react'

// Component
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component'
import Poster from '../components/Poster/Poster.component'

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4 lg:px-12 lg:mt-10 mb-5">
                <div className="w-full lg:flex lg:flex-row-reverse lg:gap-5">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Jodhpur</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-tupqbclnvy-portrait.jpg"
                                    title="Admission - 31st July (Saturday)"
                                    subtitle="English &bull; ₹199"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311722-urgmtpdxwg-portrait.jpg"
                                    title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                                    subtitle="Tamil &bull; ₹199"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312471-qfafrtpddx-portrait.jpg"
                                    title="Tvk Cultural presents Ponniyin Selvan"
                                    subtitle="Tamil &bull; ₹300"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-tupqbclnvy-portrait.jpg"
                                    title="Admission (31st July - 1st August)"
                                    subtitle="English &bull; ₹199"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/12 hidden lg:block">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilters title="Language" tags={["Telugu", "Tamil", "English"]} />
                            <PlaysFilters title="Categories" tags={["Theatre"]} />
                            <PlaysFilters title="Genres" tags={["Drama", "Comedy", "Mythological", "Adaptation", "Historical"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plays

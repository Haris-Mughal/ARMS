function PlanetLast() {
    return (
        <>
            {/* <div id="top-sec">
                <div id="water-sec">
                    <div id="water-per">Water Percentage</div>
                    <div id="circle-div">71%</div>
                </div>
                <div className="rec-div">
                    <div id="specie-text">8.7 Million Estimated Species</div>
                    <img
                        className="species-graph"
                        src="/Species Card.png"
                        alt=""
                    />
                </div>
            </div>
            <hr />
            <div id="mid-sec" className="w-[90%]  ">
                <img
                    className="song-card w-[80%] rounded-lg"
                    src="/astronauts.jpeg"
                />
            </div> */}
            {/* <div className="space-y-4 text-center p-4 max-w-md mx-auto gap-5">
                <div className="flex justify-center gap-4">
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6 w-1/2">
                        <h2 className="text-lg font-semibold">Oxygen Level</h2>
                        <p className="text-4xl font-bold">92%</p>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6 w-1/2">
                        <h2 className="text-lg font-semibold">Oxygen Level</h2>
                        <p className="text-4xl font-bold">92%</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-lg font-semibold">
                        Remaining Time for Mission
                    </h2>
                    <p className="text-2xl font-bold">
                        230 d : 14 h : 30 m : 7 s
                    </p>
                </div>

                <div className="flex justify-center gap-4 bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-lg font-semibold">Oxygen Level</h2>
                    <p className="text-4xl font-bold">92%</p>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-lg font-semibold">
                        Real-Time Graph Chart
                    </h2>
                </div>
            </div> */}

            <div className="flex flex-col w-[90%] p-4 gap-4">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-center items-center  border border-white glass w-[45%] h-[70px] gap-2">
                        <div className="">Oxygen Level</div>
                        <div>92%</div>
                    </div>
                    <div className="flex flex-col justify-center items-center  border border-white glass w-[45%] h-[70px] gap-2 ">
                        <div>Water Level</div>
                        <div>86%</div>
                    </div>
                </div>
                <div className="border flex justify-center items-center  border-white glass h-[70px] ">
                    Food Level 78%
                </div>
                <div className="flex flex-col justify-center items-center  border border-white glass h-[80px] gap-2 ">
                    <div>Remaining Time for Mission</div>
                    <div>230 d : 14 h : 30 m : 7 s</div>
                </div>
            </div>

            <hr />
            <div id="sound-sec">
                <div>
                    <img src="/Sound Icon.png" alt="sound" />
                </div>
                <div className="sound-waves">
                    <div>Sound in Earth</div>
                    <div className="playing">
                        {[...Array(15)].map((_, idx) => (
                            <div
                                key={idx}
                                className={`greenline line-${(idx % 5) + 1}`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src="/Play Icon.png" alt="sound" />
                </div>
            </div>
        </>
    );
}

export default PlanetLast;


// function PlanetLast() {
//     return (
//         <>
//             <div className="space-y-4 text-center p-4 max-w-md mx-auto gap-5">
//                 {/* Top Row */}
//                 <div className="flex justify-center gap-4">
//                     <div className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6 w-1/2">
//                         <h2 className="text-lg font-semibold">Oxygen Level</h2>
//                         <p className="text-4xl font-bold">92%</p>
//                     </div>
//                     <div className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6 w-1/2">
//                         <h2 className="text-lg font-semibold">Oxygen Level</h2>
//                         <p className="text-4xl font-bold">92%</p>
//                     </div>
//                 </div>

//                 {/* Remaining Time Panel */}
//                 <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-2xl shadow-xl p-6">
//                     <h2 className="text-lg font-semibold">
//                         Remaining Time for Mission
//                     </h2>
//                     <p className="text-2xl font-bold">
//                         230 d : 14 h : 30 m : 7 s
//                     </p>
//                 </div>

//                 {/* Middle Oxygen Panel */}
//                 <div className="flex justify-center gap-4 bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-6">
//                     <h2 className="text-lg font-semibold">Oxygen Level</h2>
//                     <p className="text-4xl font-bold">92%</p>
//                 </div>

//                 {/* Real-Time Chart */}
//                 <div className="bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-2xl shadow-xl p-6">
//                     <h2 className="text-lg font-semibold">
//                         Real-Time Graph Chart
//                     </h2>
//                 </div>
//             </div>

//             <hr className="my-6 border-gray-700" />

//             {/* Music Section */}
//             <div
//                 id="sound-sec"
//                 className="flex items-center justify-around p-4 bg-gray-800 rounded-lg shadow-lg"
//             >
//                 <div>
//                     <img
//                         src="/Sound Icon.png"
//                         alt="sound"
//                         className="w-10 h-10"
//                     />
//                 </div>
//                 <div className="sound-waves text-white text-center">
//                     <div className="text-sm font-semibold">Sound in Earth</div>
//                     <div className="playing flex gap-1 mt-2">
//                         {[...Array(15)].map((_, idx) => (
//                             <div
//                                 key={idx}
//                                 className={`greenline line-${(idx % 5) + 1}`}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>
//                 <div>
//                     <img
//                         src="/Play Icon.png"
//                         alt="play"
//                         className="w-10 h-10"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default PlanetLast;

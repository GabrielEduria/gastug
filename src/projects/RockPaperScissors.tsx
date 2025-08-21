import {
  	FaHandRock,
    FaHandPaper,
    FaHandScissors
} from 'react-icons/fa'




export default function RockPaperScissors() {
    return (
            <div className="relative">
                <h2 className="text-white text-center text-3xl font-medium sm:text-5xl sm:font-bold pb-10">Rock Paper Scissors</h2>
                <div className="text-white text-2xl flex justify-around w-full gap-8 lg:gap-20 pb-20">
                    <p> Your Score: <span id="player-score" className="text-yellow-500">0</span></p>
                    <p> Opponent Score: <span id="computer-score" className="text-yellow-500">0</span></p>   
                </div>
                <div className="flex justify-around p-10">
                    <div id="rock" className="cursor-pointer hover:scale-105 transition duration-0.1s hover:opacity-80">
                    <FaHandRock className="text-yellow-500 text-7xl"/>
                    <p className="text-center text-white text-3xl font-bold">ROCK</p>
                    </div>
                    <div id="paper" className="cursor-pointer hover:scale-105 transition duration-0.1s hover:opacity-80">
                    <FaHandPaper className="text-yellow-500 text-7xl"/>
                    <p className="text-center text-white text-3xl font-bold">Paper</p>
                    </div>
                    <div id="scissors" className="cursor-pointer hover:scale-105 transition duration-0.1s hover:opacity-80">
                    <FaHandScissors className="text-yellow-500 text-7xl"/>
                    <p className="text-center text-white text-3xl font-bold">Rock</p>
                    </div>
                </div>

               {
                <div className="border border-white">
                    <p id="">You won!</p>
                </div>
                }
            </div>
    )
}
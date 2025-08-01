import {
  	FaHandRock,
    FaHandPaper,
    FaHandScissors
} from 'react-icons/fa'


export default function RockPaperScissors() {
    return (
            <div>
                <div className="flex justify-around px-3 gap-3">
                  
                    <FaHandRock className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100}/>
                    <FaHandPaper className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100} />
                    <FaHandScissors className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100} />
                </div>
            </div>
    )
}
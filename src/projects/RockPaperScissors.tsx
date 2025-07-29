import {
  	FaHandRock,
    FaHandPaper,
    FaHandScissors
} from 'react-icons/fa'


export default function RockPaperScissors() {

    return (
            <div>
                <div className="flex justify-center gap-3">
                    <div>
                      
                    <FaHandRock className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100}/>
                    </div>
                    <FaHandPaper className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100} />
                    <FaHandScissors className="text-yellow-500 cursor-pointer hover:scale-105 transition duration-0.3s" size={100} />
                </div>
            </div>
    )
}
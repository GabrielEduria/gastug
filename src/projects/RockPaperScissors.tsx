import {
  	FaHandRock,
    FaHandPaper,
    FaHandScissors
} from 'react-icons/fa'
export default function RockPaperScissors() {

    return (
            <div>
                <div className="flex gap-3">
                    <FaHandRock />
                    <FaHandPaper />
                    <FaHandScissors />
                </div>
            </div>
    )
}
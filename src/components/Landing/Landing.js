import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import me from './Me.jpg';


const Landing = () => {
    return (
            <div className="landing">
                <img src={me} alt="Kevin"className="me-icon"></img>
                <h2 className="quiz-intro">How well does Kevin fit with Everfi?</h2>
                <Link to='/takequiz/' id="start-quiz">
                    <h3>Start Quiz</h3>
                </Link>
            </div>
    );
}

export default Landing;
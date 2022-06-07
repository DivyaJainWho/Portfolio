import React from "react";
import './Projects.css'
import Taufa from '../../images/Taufa.PNG'
import TODO from '../../images/TODO.PNG'
import reduxtodo from '../../images/reduxtodo.PNG'

const Projects =()=>{
return (
    <div>
    <div className="proj">
        <div className="ex1">
            <h1 className="title">Ratabase360</h1>
            <p className="des">Insurance Rating Application (September 07, 2020 - Present)</p><br/>
            <p className="jobdes">Contributing to Ratabase - (An insurance rating and underwriting
software which enables insurance agents and consumer to generate
policy price quotes in real time) as a full stack developer. Tech skills -Dotnet, Sql, React.Js, Html, Css, Javascript
</p>
        </div>
        <div className="ex1">
            <h1 className="title">Speaker Verification System</h1>
            <p className="des">Final Year College Project  (January 02, 2020 - June 01, 2020)</p><br/>
            <p className="jobdes">Developed a Speaker Verification System using GUI in MATLAB in which
identity of a person is verified from the characteristics of voice.
</p>
        </div>
        <div className="ex1">
            <h1 className="title">Shortest Path Detection Robot</h1>
            <p className="des">College Project  (November 01, 2017 - January 01, 2018)</p><br/>
            <p className="jobdes">Made a line following bot which traverses a random path. With the
knowledge of path after traversal, the robot will be placed at any point
on the path. Given coordinates on the path bot has to reach that point
from initial position taking shortest path.
</p>
        </div>
    </div>
    <div className="basicprojects">Basic Projects</div>
    <div className='ui link projs'>
            <div className='ex3'>
                <a href="https://dj-taufa-shopping-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={Taufa} alt="taufa app" className="img"></img><br/>
                <div className='projname'>Taufa Shopping App</div>
                </a>
            </div>
            <div className='ex3'>
                <a href="https://divyajaindj-todoapp.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src={TODO} alt="todo app" className="img"></img><br/>
                <div className='projname'>Todo App</div>
                </a>
            </div>
            <div className='ex3'>
                <a href="https://dj-todoredux.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src={reduxtodo} alt="todo app" className="img"></img><br/>
                <div className='projname'>Redux Todo App</div>
                </a>
            </div>
        </div>
    </div>
)
}

export default Projects;
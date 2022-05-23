import React from "react";
import './Projects.css'

const Projects =()=>{
return (
    <div className="proj">
        <div className="ex1">
            <h1 className="title">Ratabase360</h1>
            <p className="des">Insurance Rating Application (September 07, 2020 - Present)</p><br/>
            <p className="jobdes">Contributing to Ratabase - (An insurance rating and underwriting
software which enables insurance agents and consumer to generate
policy price quotes in real time) as a full stack developer. Tech skills -Dotnet, Sql, React.Js, Html, Css, Javascript
</p>
        </div>
        <div className="ex2">
            <h1 className="title">Speaker Verification System</h1>
            <p className="des">Final Year College Project  (January 02, 2020 - June 01, 2020)</p><br/>
            <p className="jobdes">Developed a Speaker Verification System using GUI in MATLAB in which
identity of a person is verified from the characteristics of voice.
</p>
        </div>
        <div className="ex2">
            <h1 className="title">Shortest Path Detection Robot</h1>
            <p className="des">College Project  (November 01, 2017 - January 01, 2018)</p><br/>
            <p className="jobdes">Made a line following bot which traverses a random path. With the
knowledge of path after traversal, the robot will be placed at any point
on the path. Given coordinates on the path bot has to reach that point
from initial position taking shortest path.
</p>
        </div>
    </div>
)
}

export default Projects;
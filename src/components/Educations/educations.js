import React from "react";
import './education.css'
import student from '../../images/student.jpg'

const Education =() =>{
    return (
        <div className="education">
            <div className="edcolumn">
                <div className="card">
                    <p className="student"><img src={student} alt="student"></img></p>
                    <h3 className="grade">BE (EEE)  🎓</h3>
                    <p className="school">Birla Institute Of Technology,Mesra</p>
                    <p className="year">(2016-2020)</p>
                    <p className="marks">8.43</p>
                </div>
            </div>
            <div className="edcolumn">
                <div className="card">
                    <p className="student"><img src={student} alt="student"></img></p>
                    <h3 className="grade">12th  🎓</h3>
                    <p className="school">Gyan Kunj Sr. Sec. School , Loharu</p>
                    <p className="year">(2014-2015)</p>
                    <p className="marks">92.4%</p>
                </div>
            </div>
            <div className="edcolumn">
                <div className="card">
                    <p className="student"><img src={student} alt="student"></img></p>
                    <h3 className="grade">10th 🎓</h3>
                    <p className="school">Gyan Kunj Sr. Sec. School , Loharu</p>
                    <p className="year">(2012-2013)</p>
                    <p className="marks">93.2%</p>
                </div>
            </div>
        </div>
    )
}

export default Education;
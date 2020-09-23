import React from 'react';
import './App.css';
import FunCard from "./component/FunCard";
import ClassCard from "./component/ClassCard";

function App() {
    let heading="ReactJs By Naveen"
    let employees=[
        {
            id:1,
            name:"Mozammil",
            age:25,
            designation:"Full stack developer"
        },
        {
            id:2,
            name:"Paras",
            age:24,
            designation:"Game Developer"
        }
    ]
    return (
    <div>
        <div className="App">
            <nav className="main-nav">
                <a href="/">Welcome to React Components</a>
            </nav>
            {/*we want to pass employees array first object to the functional component and second Object in class Component*/}
            <FunCard info={heading} msg="Good Morning" employee={employees[0]}/>
            <ClassCard info={heading} employee={employees[1]}/>
        </div>
    </div>

  );
}

export default App;

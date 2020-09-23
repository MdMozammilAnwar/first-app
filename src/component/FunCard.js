import React from "react";
import './FunCard.css'
function  FunCard(props) {
    //internal style
    // let style={
    //     color:"red",
    //     backgroundColor:"white"
    // }
    // let heading="Online ReactJs"
    console.log(props)
    let {id,name,age,designation}=props.employee;
    return(

        <div>
            {/*inline style*/}
            {/*<h1 style={{color:"white", backgroundColor:"black"}}>Welcome to funcard</h1>*/}
        {/*    internal style*/}
        {/*    <h1 style={style}>Welcome to funcard</h1>*/}
        {/*    external style*/}
        {/*    <h1 className="fun">Welcome to funcard</h1>*/}


        {/*Lets create Card view*/}



        <div className="card">
            <div className="card-body">
                <h3>{props.info}</h3>
                <p>{props.msg}</p>
                <p>{new Date().toDateString()}</p>
                <p>{new Date().toLocaleTimeString()}</p>
               <ul>
                   <li>Id :{id}</li>
                   <li>Name :{name}</li>
                   <li>Age :{age}</li>
                   <li>Designation :{designation}</li>
               </ul>
            </div>
        </div>
        </div>
    )
}

export default FunCard;
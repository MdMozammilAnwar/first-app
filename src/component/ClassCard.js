import React from "react";
class ClassCard extends  React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {id,name,age,designation}=this.props.employee
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3>{this.props.info}</h3>
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
        );
    }
}
export default ClassCard
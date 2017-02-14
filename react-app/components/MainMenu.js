import React from "react"
import {Link} from "react-router"

export default class MainMenu extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    <Link className="btn btn-lg btn-default button-main-menu" to="/addFolder">
                        <span className="glyphicon glyphicon-plus glyphicon-main-menu"/>
                    </Link>
                    <br/>
                    <small>Add folder</small>
                </div>
                <br/>

                <div className="row text-center">
                    <Link className="btn btn-lg btn-default button-main-menu" to="/addNote">
                        <span className="glyphicon glyphicon-pencil glyphicon-main-menu"/>
                    </Link>
                    <br/>
                    <small>Add note</small>
                </div>
                <br/>

                <div className="row text-center">
                    <Link className="btn btn-lg btn-default button-main-menu" to="/removeFolder">
                        <span className="glyphicon glyphicon-remove glyphicon-main-menu"/>
                    </Link>
                    <br/>
                    <small>Remove folder</small>
                </div>
                <br/>
            </div>
        )
    }
}

import React from "react"
import {connect} from "react-redux"

import MainMenu from "../components/MainMenu"
import FoldersList from "../components/FoldersList"
import SearchForm from "../components/SearchForm"
import FilesList from "../components/FilesList"


class MainPage extends React.Component {

    // prop types for components used in this container
    static propTypes = {
        someObject: React.PropTypes.object
    }


    constructor(props) {
        super(props);
        // do some work in constructor
        // if (this.props.hotelList.status != LOADED) {
        //     this.props.loadData(this.props.search)
        // }

    }


    // 'main' render function
    render() {
        return (
            <div>
                <div className="col-sm-1">
                    <MainMenu />
                </div>
                <div className="col-sm-4">
                    <FoldersList />
                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <SearchForm/>
                    </div>
                    <br/>
                    <div className="row">
                        <FilesList />
                    </div>
                </div>
            </div>
        )
    }

}


// smart components are aware of the store
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(state => {

        // mapStateToProps
        // map application state to this container's props
        return {}

    },
    // mapDispatchToProps
    // when function is passed you can handle the dispatch()es of certain ACTIONS yourself
    dispatch => {
        return {}

    })(MainPage)

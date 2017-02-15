import React from "react"
import {Link} from "react-router"
import _ from "lodash"

import {ROOT_FOLDER_ID} from "../constants/appSettings"

export default class MainMenu extends React.Component {

    static propTypes = {
        folders: React.PropTypes.array.isRequired,
        activeFolderId: React.PropTypes.number.isRequired,
        deleteFolders: React.PropTypes.func.isRequired,
        setActiveFolder: React.PropTypes.func.isRequired,

        activeNoteId: React.PropTypes.number,
        deleteNote: React.PropTypes.func.isRequired,
        setActiveNote: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    isRemoveFolderButtonDisabled = () => {
        return !this.props.activeFolderId || this.props.activeFolderId === ROOT_FOLDER_ID;
    }

    isRemoveNoteButtonDisabled = () => {
        return !this.props.activeNoteId;
    }

    removeFolder = () => {
        this.props.deleteFolders([this.props.activeFolderId, ...this.getFolderChildren(this.props.activeFolderId)]);
        this.props.setActiveFolder(ROOT_FOLDER_ID);
    }

    removeNote = () => {
        this.props.deleteNote(this.props.activeNoteId);
        this.props.setActiveNote(null);
    }

    getFolderChildren = (folderId) => {
        let childrenIds = [];
        let childFolders = _.filter(this.props.folders, el => el.parentId == folderId);
        childFolders.map(folder => {
            childrenIds.push(folder.id);
        })

        childrenIds.map(childId => childrenIds.push(...this.getFolderChildren(childId)));
        return childrenIds;
    }

    render() {
        let disableRemoveFolderBtn = this.isRemoveFolderButtonDisabled() ? " disabled" : "";
        let disableRemoveNoteBtn = this.isRemoveNoteButtonDisabled() ? " disabled" : "";

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
                    <Link className={"btn btn-lg btn-default button-main-menu" + disableRemoveFolderBtn}
                          onClick={this.removeFolder}>
                        <span className="glyphicon glyphicon-remove glyphicon-main-menu"/>
                    </Link>
                    <br/>
                    <small>Remove folder</small>
                </div>
                <br/>

                <div className="row text-center">
                    <Link className={"btn btn-lg btn-default button-main-menu" + disableRemoveNoteBtn}
                          onClick={this.removeNote}>
                        <span className="glyphicon glyphicon-remove-circle glyphicon-main-menu"/>
                    </Link>
                    <br/>
                    <small>Remove file</small>
                </div>
            </div>
        )
    }
}

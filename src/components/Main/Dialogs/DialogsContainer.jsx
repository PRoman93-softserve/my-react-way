import React from "react";
import {sendMessageActionCreator,} from "../../../state/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messageData:state.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody)=> {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

export default
compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
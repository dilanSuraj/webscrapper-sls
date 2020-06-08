import React from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";
import moment from 'moment';

const Notifications = (props) => {

    const {notifications} = props;

    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {
                            notifications && notifications.map((notification) => {
                                return (
                                    <li key={notification.id}>
                                        <span className="pink-text">
                                            {notification.user}
                                        </span>
                                        <span>
                                            {notification.content}
                                        </span>
                                        <div className="grey-text note-date">
                                            {moment(notification.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'notifications', limit: 3, orderBy:['time', 'desc']
    }])
)(Notifications);
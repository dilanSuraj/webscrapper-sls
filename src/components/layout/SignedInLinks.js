import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
const SignedInLinks = (props) => {
    const { profile } = props;
    return (
        <ul className="right">
            <li>
                <NavLink to="/createproject">New project</NavLink>
            </li>
            <li>
                <a to="/" onClick={props.signout}>Log out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signOut())
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
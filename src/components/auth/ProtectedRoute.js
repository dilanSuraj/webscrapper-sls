import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { auth, path } = rest;
    return (
        <Route {...rest} render={
            (props) => {
                if (!auth.uid) {
                    return <Redirect to={
                        {
                            pathname: "/signin",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
                else {
                    return <Component {...props} />
                }

            }
        } />
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProtectedRoute);
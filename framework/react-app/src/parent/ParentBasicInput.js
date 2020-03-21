import React, { Component } from 'react';
import AppBasicInput from "../components/AppBasicInput";

class AppParentBasicInput extends Component {

    render() {
        return (
            <AppBasicInput msg={'I am message'} />
        );

    }
}

export default AppParentBasicInput;

import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';


class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.callback} style={this.props.style}>
                <Text style={this.props.textStyle}> {this.props.name} </Text>
            </TouchableOpacity >

        )
    }
}

MyButton.propTypes = {
    name: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    boxStyle: PropTypes.object,
    textStyle: PropTypes.object

};

export default MyButton

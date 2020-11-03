import React from 'react'
import { Text, View } from 'react-native'

export default function (props) {
    return (
        <View style={{ flex: 1 }}>
            <Text> {this.props.timestamp} </Text>
            <Text> {this.props.lat} </Text>
            <Text> {this.props.lon} </Text>

        </View>
    )
}

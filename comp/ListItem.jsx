import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function (props) {
    return (
        <View style={style.container}>
            <Text style={style.timestamp}> {props.timestamp} </Text>
            <Text style={style.coords}> {props.lat} </Text>
            <Text style={style.coords}> {props.lon} </Text>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20
    },
    timestamp: {
        fontSize: 20
    },
    coords: {
        fontSize: 16,
        color: 'grey'
    }
})

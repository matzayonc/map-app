import React from 'react'
import { Text, View } from 'react-native'

export default function (props) {
    {console.log('a')}
    return (<Text style={{marginTop: 100}}>AAA</Text>)
    (
        <View style={{ flex: 1 }}>
            <Text> aaa </Text>

            <Text> {props.timestamp} </Text>
            <Text> {props.lat} </Text>
            <Text> {props.lon} </Text>

        </View>
    )
}

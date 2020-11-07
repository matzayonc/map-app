import React from 'react'
import { Text, View, StyleSheet, Switch } from 'react-native'

export default function (props) {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={style.timestamp}> {props.timestamp} </Text>
                <Switch 
                    style={{ flex: 1, alignSelf: 'flex-end' }} 
                    value={props.value} 
                    onValueChange={props.callback}>

                </Switch>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={style.coords}> {props.lat} </Text>
                <Text style={style.coords}> {props.lon} </Text>
            </View>

        </View >

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

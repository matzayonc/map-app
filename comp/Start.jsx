import React, { Component } from 'react'
import { Text, View } from 'react-native'

import MyButton from './MyButton'



export class Start extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 0x009688 }}>
                    <Text style={{ flex: 1, color: 'white', textAlign: 'center', textAlignVertical: 'bottom', fontSize: 42 }}>GeoMap App</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 0x009688 }}>
                    <Text style={{ flex: 1, color: 'white', textAlign: 'center', textAlignVertical: 'top', fontSize: 18 }}>find and save your position</Text>
                </View>

                <View style={{ flex: 2, backgroundColor: 'white' }}>
                    <MyButton name='aa' textStyle={{ flex: 1, color: 0x673ab7, textAlign: 'center', textAlignVertical: 'center' }}></MyButton>
                </View>

            </View>
        )
    }
}

export default Start

/*
<Text style={{ flex: 1, color: 0x673ab7, textAlign: 'center', textAlignVertical: 'center' }}>START</Text>

*/
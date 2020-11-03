import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import Item from './ListItem'


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = { points: [{ t: 100, lat: 50.083, lon: 20.030 }] }
    }

    render() {


        return (
            <View style={style.whole}>
                <View style={{flex: 1}}>
                    <View style={style.header}>
                        <TouchableOpacity style={style.headerEl}><Text style={style.headerEl}>Pobierz</Text></TouchableOpacity>
                        <TouchableOpacity style={style.headerEl}><Text style={style.headerEl}>Usuń</Text></TouchableOpacity>                    
                    </View>
                    <TouchableOpacity style={style.headerEl} onPress={()=>this.props.navigation.navigate("map", {points: this.state.points})}>
                        <Text style={style.headerEl}>Mapa</Text>
                    </TouchableOpacity>                    

                </View>

                <View style={style.content}>

                <Text>POINSs</Text>

                    {this.state.points.map(i => {
                        <Item timestamp={i.t} lat={i.lat} lon={i.lon} />
                    })}

                </View>

            </View >
        )
    }
}

const style = StyleSheet.create({
    whole: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row'
    },
    content: {
        flex: 7
    },
    headerEl: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: 'center'
    }
})
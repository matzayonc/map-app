import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import Item from './ListItem'
import MyButton from './MyButton'


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = { points: [{ t: 100, lat: 50.083, lon: 20.030 }] }
    }

    render() {


        return (
            <View style={style.whole}>
                <View style={{ flex: 1 }}>
                    <View style={style.header}>
                        <MyButton boxStyle={style.headerEl} textStyle={style.headerEl}>Pobierz</MyButton>
                        <MyButton boxStyle={style.headerEl} textStyle={style.headerEl}>Usuń</MyButton>

                    </View>
                    <MyButton callback={() => this.props.navigation.navigate("map", { points: this.state.points })} textStyle={style.headerEl} boxStyle={style.headerEl}>Mapa</MyButton>


                </View >


                <View style={style.content}>

                    <Text>POINSs</Text>

                    {this.state.points.map(i => {
                        return <Item key={i.t} timestamp={i.t} lat={i.lat} lon={i.lon} />
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
import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, Switch, AsyncStorage } from 'react-native'

import * as Location from "expo-location";


import Item from './ListItem'
import MyButton from './MyButton'
import { FlatList, PinchGestureHandler } from 'react-native-gesture-handler';



export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = { points: [], allMarked: false }

    }

    componentDidMount = async () => {
        try {
            let p = await AsyncStorage.getItem('points');
            p = JSON.parse(p)

            this.setState({ points: p.map(i => { i.marked = false; return i }) })
        } catch (error) {
            console.log('didnt find any saved points')
        }
    }

    dump = async () => await AsyncStorage.setItem('points', JSON.stringify(this.state.points));


    getPosition = async () => {
        let pos = {}
        try {
            pos = await Location.getCurrentPositionAsync({})
        } catch (error) {
            alert('Error getting location')
            return
        }

        Alert.alert(
            "Pozycja",
            "Pozycja pobrana. Zapisać?",
            [
                { text: 'Anuluj', style: 'cancel' },
                {
                    text: "OK", onPress: () => {

                        const p = { marked: false, t: pos.timestamp, lat: pos.coords.latitude, lon: pos.coords.longitude, key: pos.timestamp + Math.random() }
                        this.setState({ points: this.state.points.concat([p]) }, () => this.dump())
                    }
                }
            ],
            { cancelable: false }
        );
    }


    remove = async () => {
        console.log(this.state.points)
        this.setState({ points: this.state.points.filter(i => !i.marked), allMarked: false }, () => this.dump())
    }



    render() {
        return (
            <View style={style.whole}>
                <View style={{ flex: 1 }}>
                    <View style={style.header}>
                        <MyButton callback={this.getPosition.bind(this)} boxStyle={style.headerEl} textStyle={style.headerEl}>Pobierz</MyButton>
                        <MyButton callback={this.remove.bind(this)} boxStyle={style.headerEl} textStyle={style.headerEl}>Usuń</MyButton>

                    </View>
                    <View style={style.header}>
                        <View style={{ flex: 1 }} />
                        <MyButton
                            callback={() => this.props.navigation.navigate("map", { points: this.state.points })}
                            textStyle={style.headerEl}
                            boxStyle={style.headerEl}
                        >Mapa</MyButton>
                        <Switch
                            value={this.state.allMarked}
                            onValueChange={() => {
                                let on = this.state.allMarked
                                this.setState({ points: this.state.points.map(i => { i.marked = !on; return i }), allMarked: !on })
                            }}
                            style={{ flex: 1 }} />


                    </View>



                </View >


                <View style={style.content}>


                    <FlatList
                        data={this.state.points}
                        renderItem={({ item }) => <Item key={item.key} timestamp={item.t} lat={item.lat} lon={item.lon} />} />
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
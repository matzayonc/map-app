import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


import MapView from 'react-native-maps';
import * as Location from "expo-location";

export default function (props) {

	alert(JSON.stringify(props.route.params.points))

	return (
		<MapView
			style={{ flex: 1 }}
			initialRegion={{
				latitude: 50.061610,
				longitude: 19.937295,
				latitudeDelta: 0.1,
				longitudeDelta: 0.1,
			}}
		>
			{props.route.params.points.map((point, index) =>
				<MapView.Marker
					key={'point' + index}
					coordinate={{
						latitude: point.lat,
						longitude: point.lon,
					}}
					title={"pos"}
					description={"opis"}
				/>
			)}

		</MapView>

	)	
		
}



/* /src/screens/Screen.js */
import React from "react"
import {Text, View, StyleSheet} from "react-native"


const s = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#bbbbbb",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:28,
        color:"#222222",
        textAlign:"center",
    }

});

const Screen = ({name})=>(
    <View style={s.container}>
        <Text style = {s.text}>
            this is the "{name}" Screen.
        </Text>
    </View>
);

export default Screen;

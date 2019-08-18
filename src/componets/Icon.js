import React from 'react'
import {Text} from 'react-native'

const IconMap = {
    "home": "♡",
    "search": "♢",
    "favourites": "♧",
    "profile": "♤"
};

const Icon = ({name, color, style, ...props})=>{
    const icon = IconMap[name];

    return <Text style={[{fontSize:26, color}, style]}>{icon}</Text>;


}

export default Icon;
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;


export default class RegistCell extends Component {

	constructor(props) {
    super(props);
  }

  render() {

    // const {name, full_name} = this.props.item.item || {};
    let name = this.props.item.item.name;
    let full_name = this.props.item.item.owner.node_id;

    console.log(`===>message cell props, ${name}, ${full_name}`, this.props.item.item)

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => console.log('item clicked')}
          style={styles.touchable}>
          <View style={styles.touchableInside}>
            {/* <Image
              source={require('./img/graphql_wx.jpg')}
              style={styles.image}
              resizeMode='stretch'/> */}
            <View style={styles.insideView}>
              <Text style={styles.insideText}>{name}</Text>
              <Text style={styles.insideText}>{full_name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: { 
    alignItems: 'stretch', 
    justifyContent: 'center', 
    backgroundColor: 'white', 
    paddingHorizontal: 10, 
    paddingTop: 10,
  },
  touchable: {
    backgroundColor: 'yellow', 
    alignItems: 'stretch', 
    justifyContent: 'center',
    height: 250,
  },
  touchableInside: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: 'blue', 
    borderRadius: 10, 
    overflow: 'hidden'
  },
  image: { 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    backgroundColor: 'red', 
    width: SCREEN_WIDTH - 20, 
    height: 150 
  },
  insideView: { 
    flex: 1, 
    justifyContent: 'space-around', 
    alignSelf: 'stretch', 
    alignItems: 'flex-start', 
    paddingVertical: 20, 
    marginHorizontal: 20 
  },
  insideText: { 
    textAlign: 'left', 
    backgroundColor: 'yellow' 
  },
 }
 );
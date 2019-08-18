/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, AppRegistry, ActivityIndicator, FlatList, SectionList, ScrollView, Text, View, Image, StyleSheet, TextInput, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var REQUEST_URL =
"https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class Greeting extends Component
{
    render(){
        return(
        <View style={{alignItems:"center", marginTop:50}}>
            <Text style = {this.props.style}>Hello, {this.props.name}</Text>
         </View>
         );
    }

}

class Blink extends Component{
    state = {bShowText: true }
    componentDidMount(){
        setInterval(()=>{
            this.setState(previousState=>{
                return {bShowText:!previousState.bShowText};
            });
        }, 1000);
    }

    render()
    {
        if(!this.state.bShowText){
            return null;
        }
        return (<Text>{this.props.text}</Text>);
    }

}

class Banana extends Component{
    render()
    {
        let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
            <Image source = {pic} style={{width:193, height:110}} />

        );
    }

}

class HelloWorldApp extends Component
{
    render()
    {
        return (
            <View style = {{flex:1, justifyContent:"center",alignItems: "center"}}>
                <Text style= {styles.red}>"Hello just red"</Text>
                <Greeting style = {styles.bigBlue} name = "Bob Blue" />
                <Greeting style = {[styles.red, styles.bigBlue]} name = "Jianmin big Blue" />
                <Greeting style = {[styles.bigBlue, styles.red, {fontSize:45}]} name = "Bye big Red" />

                <Banana />
                <Blink text = "fgaefea sdfaef frasef" />
            </View>

            );

        }

}

class TestHeight extends Component{
    render()
    {
        return (
            <View>
                <View style = {{height:50, width:50, backgroundColor:"powderblue"}}></View>
                <View style = {{height:100, width:100, backgroundColor:"skyblue"}}></View>
                <View style = {{height:150, width:150, backgroundColor:"steelblue"}}></View>
            </View>
        );

    }
}

class TestFlex extends Component{
    render()
    {
        return (
            <View style = {{height:300}}>
                <View style = {{flex:1, backgroundColor:"powderblue"}}></View>
                <View style = {{flex:2, backgroundColor:"skyblue"}}></View>
                <View style = {{flex:3, backgroundColor:"steelblue"}}></View>
            </View>
        );
    }
}

class FlexDirectionBasics extends Component{


    render()
    {
        return(
                <View style = {{
                flex:1,
                flexDirection:'column',
                justifyContent:'space-evenly',
                alignItems:"flex-start"}}>
                    <View style = {{height:50, width:50, backgroundColor:"powderblue"}}></View>
                    <View style = {{height:50, width:50, alignSelf:"center", backgroundColor:"skyblue"}}></View>
                    <View style = {{height:50, width:50,  backgroundColor:"steelblue"}}></View>
                </View>
        );

    }
}

class PizzaTranslator extends Component
{
    state = {text:''}
    render()
    {
        return(
             <View style = {{padding:10}}>
                 <TextInput style = {{height:40}}
                     placeholder = "Type here to translate."
                     onChangeText={(text)=>this.setState({text})}
                     value = {this.state.text}
                 />
                 <Text style = {{padding:10, fontSize:40}}>
                    {this.state.text.split(' ').map((word)=>word && 'A').join(' ')}
                 </Text>
                 <Button
                   onPress={() => {
                     Alert.alert("You have pressed the button!!!");
                   }}
                   title="PressMe"
                 />
             </View>

         );
    }

}


class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles1.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles1.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles1.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

class ScrollViewTest extends Component
{
      render(){
              return(
                <View style = {{flex:1}}>
                <ScrollView style= {{flex:2}}> 
                    <Text style={{fontSize:96}}>Scroll me plz</Text>
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Text style={{fontSize:96}}>If you like</Text>
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Text style={{fontSize:96}}>Scrolling down</Text>
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Text style={{fontSize:96}}>What's the best</Text>
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Text style={{fontSize:96}}>Framework around?</Text>
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    <Text style={{fontSize:80}}>React Native</Text>
                </ScrollView>
                <View style={styles2.container}>
                    <FlatList data = {[
                      {key: 'Devin'},
                      {key: 'Jackson'},
                      {key: 'James'},
                      {key: 'Joel'},
                      {key: 'John'},
                      {key: 'Jillian'},
                      {key: 'Jimmy'},
                      {key: 'Julie'},]}
                      renderItem={({item})=><Text style={styles2.itemstyle}>{item.key}</Text>}/>
                </View>
                </View>
              );
      }

}
const styles1 = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


const styles = StyleSheet.create({
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize: 30,
    },
    red:{
        color:'red',
    }
});

const styles2 = StyleSheet.create(
  {
    container:
    {
      flex:1,
      paddingTop:22
    },
    itemstyle:
    {
      padding:10,
      fontSize:18,
      height:44,

    }

  }
)

const styles3 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles3.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'F', data: ['Fackson', 'Fames', 'Fillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'H', data: ['Hackson', 'Fames', 'Fillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles3.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles3.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class FetchExample extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {isLoading:true}
    }

    componentDidMount(){

      return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response)=>response.json())
      .then((reponseJson)=>
      {
        this.setState({
          isLoading:false,
          dataSource: reponseJson.movies,
        }, function(){});
      }).catch((error)=>{
        console.error(error);
      });
    }

    render()
    {
        if(this.state.isLoading)
        {
          return(<View style={{flex: 1, padding: 20}}>
            <ActivityIndicator />
            </View>);
        }

        return (
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList data = {this.state.dataSource}
            renderItem={({item})=><Text>{item.title},{item.releaseYear}</Text>}
            keyExtractor={(item, index)=>item.id} />
          </View>
        );

    }

}



var styles5 = StyleSheet.create(
  {
    container:
    {
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#F5FCFF",
    },
    rightContainer:
    {
      flex:1,
    },

    thumbnail:
    {
      width:53,
      height:81,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    list: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
  });


class HomeScreen extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        data:[],
        loaded:false,
      };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);

    }

    componentDidMount()
    {
      this.fetchData();
    }

    fetchData(){
      fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseJson)=>
      {
        this.setState({
          loaded:true,
          data:this.state.data.concat(responseJson.movies),
        });
      });
    }

    render()
    {
      if(!this.state.loaded)
      {
        return this.renderLoading();
      }


      return (
        <FlatList data = {this.state.data}
        renderItem = {this.renderMovie}
        style = {styles5.list}
        keyExtractor= {item=>item.id}/>
      );

    }

    renderLoading()
    {
      return (
        <View style = {styles5.container}>
            <Text>
              We are loading issues!!!!
             </Text>
        </View>
      )
    }

    renderMovie({item})
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    //item不能换成其他的参数名
    {
      return (
        <View style = {styles5.container}>
          <Image source={{uri:item.posters.thumbnail}} style={styles5.thumbnail}/>
          <View style={styles5.rightContainer}>
            <Text style={styles5.title}>{item.title}</Text>
            <Text style={styles5.year}>{item.year}</Text>
          </View>
        </View>
      );
    }
}

export default HomeScreen;

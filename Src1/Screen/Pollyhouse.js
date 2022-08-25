import {
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    View,
    onPress,
    ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  //import {Dropdown} from 'react-native-material-dropdown';
  
  const {height, width} = Dimensions.get('window');
  
  const Pollyhouse = ({navigation}) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <ImageBackground
            style={styles.backgr}
            source={require('../Screen/Image/backg.jpeg')}>
            <View style={styles.poly}>
            <View style={styles.poly1}>

            <View style={styles.poly2}>
            <Image source={require('../Screen/Image/cloud.jpeg')} style={styles.img}/>
            
            </View>
            <View style={styles.poly3}>

            <Text style={{color:'grey',fontSize:15}}>August 25,Thu</Text>

            <Text style={{color:'black',fontSize:20}}>Cloudy</Text>
            
            </View>
            
            </View>
            <View style={styles.hu}>
            <View style={styles.hu1}>
            <Text style={{color:'black',fontSize:20,textAlign:'center'}}>54%</Text>
            <Text style={{color:'grey',fontSize:15,textAlign:'center'}}>Humidity</Text>

       
            
            </View>
            <View style={styles.hu1}>
            <Text style={{color:'black',fontSize:20,textAlign:'center'}}>11%</Text>
            <Text style={{color:'grey',fontSize:15,textAlign:'center'}}>Temperature</Text>
            
            </View>
            <View style={styles.hu1}>
            <Text style={{color:'black',fontSize:20,textAlign:'center'}}>0.5,cm</Text>
            <Text style={{color:'grey',fontSize:15,textAlign:'center'}}>Precipitation</Text>
            
            </View>
            
            </View>
            
            </View>

           

           
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Pollyhouse;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height * 1,
      width: width * 0.6,
      backgroundColor: 'white',
    },
  
    txt: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    backgr: {
      height: height * 1,
      width: width * 1,
    },
    poly:{
        height:height*0.15,
        width:width*0.9,
        alignSelf:'center',
        marginTop:20,
      //  backgroundColor:'red',
      
    },
    poly1:{
        height:height*0.06,
        width:width*0.9,
        alignSelf:'center',
        
      //  backgroundColor:'red',
       
      
        flexDirection:'row'
    },
    poly2:{
        height:height*0.057,
        width:width*0.15,
        alignSelf:'center',
        
       // backgroundColor:'red',
        margin:5,
        justifyContent:'center'
   

    },
    poly3:{
        height:height*0.06,
        width:width*0.5,
        alignSelf:'center',
        
      justifyContent:'center'
  
    },
    img:{
        height:height*0.05,
        width:width*0.14,
        alignSelf:'center',
        borderRadius:100,
    },
    hu:{
        height:height*0.08,
        width:width*0.9,
        alignSelf:'center',
       // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between'
    },
  
    hu1:{
        height:height*0.08,
        width:width*0.3,
        alignSelf:'center',
       // backgroundColor:'white',
        justifyContent:'center',
    }
  
  });
  
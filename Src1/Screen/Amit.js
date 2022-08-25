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
} from 'react-native';
import React, {useState} from 'react';
//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const Amit = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.maincontainer}>
          <View>
            <View style={styles.container}>
            <View style={styles.txt1}>
            <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
              <Text style={styles.txt2}>×</Text>
            </TouchableOpacity>
          </View>
          <View >
          <Text style={styles.ebull}>E-bulls Account Login</Text>
          </View>
          <View style={styles.pbtn}>
          <View style={styles.ebtn}>
          <Text style={styles.txte}>Email</Text>
          
          </View>
          <View style={styles.p1btn}>
          <Text style={styles.txtp}>Phone Number</Text>
          
          </View>
          
          </View>

            <View style={styles.inputview}>
              <Text style={styles.txt}>Email</Text>
              <View style={styles.inputview1}>
                <View style={styles.inputview2}>
                  <Image
                    source={require('../Screen/Image/sms1.jpeg')}
                    style={styles.img}></Image>
                </View>

                <View style={styles.inputview31}>
                  <TextInput
                    placeholder="Enter  your email "
                    placeholderTextColor={'grey'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputview}>
              <Text style={styles.txt}>Password</Text>
              <View style={styles.inputview1}>
                <View style={styles.inputview2}>
                  <Image
                    source={require('../Screen/Image/sms1.jpeg')}
                    style={styles.img}></Image>
                </View>

                <View style={styles.inputview3}>
                  <TextInput
                    placeholder="Enter your password "
                    placeholderTextColor={'grey'}
                  />
                </View>
                <View style={styles.inputview4}>
                  <Image
                    source={require('../Screen/Image/loc.jpeg')}
                    style={styles.img}></Image>
                </View>
              </View>
            </View>
            <View  style={styles.inputvie}>
              <View style={{height:height*0.03,width:width*0.06,borderWidth:1,borderColor:'grey'}}></View>
              <View>
              <Text style={styles.txt}>  Remeber me</Text>
              </View>
             
            </View>
            <View style={styles.btn}>
            <Text style={styles.txtbtn}>sign In</Text>
            </View>
            <View>
            <Text style={styles.txtbtn1}>Forget Password</Text>
            </View>
            <View>
            <Text style={styles.txtbtn2}>Register now?</Text>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Amit;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'black',
    // justifyContent:'center'
  
  },
  inputview: {
  //  backgroundColor: 'yellow',
    height: height * 0.08,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
  },
  inputview1: {
    backgroundColor: 'rgb(30,30,30)',
    height: height * 0.06,
    width: width * 0.9,
    // alignSelf:'center',
    marginTop: 5,
    //  justifyContent:'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: 10,
    alignSelf: 'center',
  },

  txt: {
    fontSize: 18,
    color: 'white',
    fontWeight:'bold',
  },
  inputview2: {
    //  backgroundColor:'cyan',
    width: width * 0.08,
    justifyContent: 'center',
  },
  inputview3: {
    // backgroundColor:'red',
    width: width * 0.65,
    justifyContent: 'center',
  },
  inputview4: {
    //  backgroundColor:'blue',
    width: width * 0.12,
    justifyContent: 'center',
  },
  inputview31: {
    // backgroundColor:'red',
    width: width * 0.8,
    justifyContent: 'center',
  },
  inputvie: {
   // backgroundColor: 'yellow',
    height: height * 0.08,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    flexDirection:'row'
  },
  btn:{

    backgroundColor:'#EAB73B',
    height:height*0.06,
    width:width*0.9,
    alignSelf:'center',
    marginTop:40,
  borderRadius:10,
  justifyContent:'center'
  },
  txtbtn:{
    textAlign:'center',
    fontSize:20,
    backgroundColor:'#EAB73B',
  },
  txtbtn1:{
    textAlign:'center',
    fontSize:20,
    margin:30,
    color:'#EAB73B',
  },
  txtbtn2:{
    textAlign:'center',
    fontSize:20,
    textDecorationLine:'underline',
    color:'#EAB73B',
  },
  txt1:{
  //  backgroundColor:'red',
    height:height*0.05,
    width:width*0.99,
    alignSelf:'center',
    

  },
  txt2:{
    justifyContent:'flex-end',
     alignSelf:'flex-end',
     fontSize:25,
     color:'white'
  },
  ebull:{
   // backgroundColor:'red',
    textAlign:'center',
    fontSize:28,
    fontWeight:'bold',
    color:'white',
  },
  pbtn:{
   // backgroundColor:'red',
    height:height*0.07,
    marginTop:30,
    width:width*0.9,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'flex-end'
  },
  ebtn:{
    backgroundColor:'black',
    height:height*0.05,
    backgroundColor:'#EAB73B',
   
    width:width*0.27,
    alignSelf:'center',
    borderRadius:10,
    justifyContent:'center'
  },
  p1btn:{
    //backgroundColor:'blue',
    height:height*0.05,
  
    width:width*0.33,
    alignSelf:'center',
    justifyContent:'center'
  },
  txtp:{
    color:'white',
    textAlign:'center',
    fontSize:17

  },
  txte:{
   // color:'white',
    textAlign:'center',
    fontSize:17

  }
});

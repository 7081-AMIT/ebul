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

const Usermodule1 = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          style={styles.backgr}
          source={require('../Screen/Image/backg.jpeg')}>
          <View style={styles.maincontainer}>
            <View
              style={{
               // backgroundColor: 'red',
                height: height * 0.05,
                width: width * 0.07,
                margin: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../Screen/Image/menu.webp')}
                style={{height: height * 0.05, width: width * 0.07}}
              />
              </TouchableOpacity>
            </View>
            <View style={styles.poly}>
              <Text style={styles.polytxt}>PolyHouse</Text>
            </View>

            <View style={styles.wel}>
              <Text style={styles.weltxt}>Welcome to Our PolyHouse </Text>
              <Text style={styles.weltxt}>Irrigation</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.btn}>
                <Text style={styles.btntxt}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <View style={styles.btn}>
                <Text style={styles.btntxt}>SignUp</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Usermodule1;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    // backgroundColor:'green',
  },

  txt: {
    color: '#EAB73B',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  poly: {
    // backgroundColor:'red',
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 30,
  },
  polytxt: {
    color: 'grey',
    fontSize: 25,
    fontWeight: 'bold',
  },
  backgr: {
    height: height * 1,
    width: width * 1,
  },
  wel: {
    height: height * 0.2,
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  weltxt: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'grey',
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btntxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

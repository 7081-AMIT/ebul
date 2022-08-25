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

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          style={styles.backgr}
          source={require('../Screen/Image/backg.jpeg')}>
          <View style={styles.maincontainer}>
            <View style={styles.hom1}>
              <View style={styles.hom2}>
                <Image
                  source={require('../Screen/Image/hom.png')}
                  style={styles.img}
                />
              </View>

              <View style={styles.hom3}>
              <TouchableOpacity onPress={() => navigation.navigate('Common')}>
               <Image
               source={require('../Screen/Image/close.png')}
               style={styles.img1}
             />
               </TouchableOpacity>
              </View>
            </View>

            <View style={styles.homt}>
              <View style={styles.hom2}>
                <Image
                  source={require('../Screen/Image/hom.png')}
                  style={styles.img}
                />
              </View>

              <View style={styles.hom4}>
              <TouchableOpacity onPress={() => navigation.navigate('Common')}>
              <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={styles.homt}>
            <View style={styles.hom2}>
              <Image
                source={require('../Screen/Image/regis.png')}
                style={styles.img}
              />
            </View>

            <View style={styles.hom4}>
            <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
            <Text style={styles.txt}>Registration</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.homt}>
          <View style={styles.hom2}>
            <Image
              source={require('../Screen/Image/polly.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.hom4}>
          <TouchableOpacity onPress={() => navigation.navigate('Pollyhouse')}>
          <Text style={styles.txt}>Pollyhouse</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.homt}>
        <View style={styles.hom2}>
          <Image
            source={require('../Screen/Image/crop.png')}
            style={styles.img}
          />
        </View>

        <View style={styles.hom4}>
        <TouchableOpacity onPress={() => navigation.navigate('Pollyhouse')}>
        <Text style={styles.txt}>Crop</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homt}>
      <View style={styles.hom2}>
        <Image
          source={require('../Screen/Image/crop1.png')}
          style={styles.img}
        />
      </View>

      <View style={styles.hom4}>
      <TouchableOpacity onPress={() => navigation.navigate('Pollyhouse')}>
      <Text style={styles.txt}>CropManagement</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View style={styles.homt}>
      <View style={styles.hom2}>
        <Image
          source={require('../Screen/Image/soil.jpeg')}
          style={styles.img}
        />
      </View>

      <View style={styles.hom4}>
      <TouchableOpacity onPress={() => navigation.navigate('Pollyhouse')}>
      <Text style={styles.txt}>SoilManagement</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View style={styles.homt}>
    <View style={styles.hom2}>
      <Image
        source={require('../Screen/Image/log.jpeg')}
        style={styles.img}
      />
    </View>

    <View style={styles.hom4}>
    <TouchableOpacity onPress={() => navigation.navigate('Pollyhouse')}>
    <Text style={styles.txt}>LogOut</Text>
    </TouchableOpacity>
    </View>
  </View>
            
            
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  hom1: {
    height: height * 0.05,
    width: width * 0.6,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homt: {
    height: height * 0.05,
    width: width * 0.6,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  hom2: {
    height: height * 0.05,
    width: width * 0.1,
   // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  hom3: {
    height: height * 0.05,
    width: width * 0.48,
   // backgroundColor: 'yellow',
  },
  hom4: {
    height: height * 0.05,
    width: width * 0.48,
   // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  img: {
    height: height * 0.03,
    width: width * 0.07,
    borderRadius: 100,
    margin: 10,
  },
  img1: {
    height: height * 0.03,
    width: width * 0.07,
    borderRadius: 100,
    margin: 10,
    alignSelf: 'flex-end',
  },
});

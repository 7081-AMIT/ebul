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

const Personal = ({navigation}) => {
 
  const [name, setname] = useState('');
  const [errorname, setErrorname] = useState('');


  const nameValidate = name => {
    var Regex = /^[a-z ,.'-]+$/i;
    if (name === '' || name === undefined || name === null) {
      setErrorname('Enter valid name number ');
    } else if (!Regex.test(name)) {
      setErrorname('please enter valid name number');
    } else {
      setErrorname(null);
    }
  };

  const [mname, setmname] = useState('');
  const [errormname, setErrormname] = useState('');


  const mnameValidate = mname => {
    var Regex = /^[a-z ,.'-]+$/i;
    if (mname === '' || mname === undefined || mname === null) {
      setErrormname('Enter valid name ');
    } else if (!Regex.test(mname)) {
      setErrormname('please enter valid name ');
    } else {
      setErrormname(null);
    }
  };


  const [lname, setlname] = useState('');
  const [errorlname, setErrorlname] = useState('');


  const lnameValidate = lname => {
    var Regex = /^[a-z ,.'-]+$/i;
    if (lname === '' || lname === undefined || lname === null) {
      setErrorlname('Enter valid name number ');
    } else if (!Regex.test(lname)) {
      setErrorlname('please enter valid name number');
    } else {
      setErrorlname(null);
    }
  };


  const validate = () => {
    var Rgx = /^[a-z ,.'-]+$/i;
    var Rgx = /^[a-z ,.'-]+$/i;
    var Rgx = /^[a-z ,.'-]+$/i;
   

    const flag = true;
    if (name === '') {
      setErrorname('*please enter name number');
      return !flag;
    }
    if (name === '' || name === undefined || name === null) {
      setErrorname('*Please enter name number');
      return !flag;
    }
    if (!Rgx.test(name)) {
      setErrorname('*Please enter valid name number');
      return !flag;
    } else setErrorname(null);
  
    return flag;
    if (mname === '') {
      setErrormname('*please enter mname ');
      return !flag;
    }
    if (mname === '' || mname === undefined || mname === null) {
      setErrormname('*Please enter mname ');
      return !flag;
    }
    if (!Rgx.test(mname)) {
      setErrormname('*Please enter valid mname ');
      return !flag;
    } else setErrormname(null);
  
    return flag;

    if (lname === '') {
      setErrorlname('*please enter name number');
      return !flag;
    }
    if (lname === '' || lname === undefined || lname === null) {
      setErrorname('*Please enter name number');
      return !flag;
    }
    if (!Rgx.test(lname)) {
      setErrorlname('*Please enter valid name number');
      return !flag;
    } else setErrorlname(null);
  
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
    // alert('Sussessful')
      navigation.navigate('PersonalVer');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <SafeAreaView>
    <ScrollView>

      <View style={styles.maincontainer}>
        <View style={styles.txt}>
        <TouchableOpacity onPress={() => navigation.navigate('Referal')}>
            <Text style={styles.txt1}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.infot}>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Personal Information</Text>
            </View>
            <View>
              <Text style={styles.infotxt1}>Identity Information</Text>
            </View>
          </View>
          <View style={styles.indtxt}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Nationality</Text>
            </View>
            <View style={styles.ind}>
              <View style={styles.ind1}>
                <Image
                  source={require('../Screen/Image/indi.jpeg')}
                  style={styles.img}></Image>
                <Text style={styles.txt5}>India</Text>
              </View>
              <View style={styles.ind2}>
                <Text style={styles.remtxt1}>▼</Text>
              </View>
            </View>
          </View>
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>First Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter first name"
                placeholderTextColor={'#8E8E8E'} 
                keyboardType="default"
                onChangeText={text => {
                  setname(text), nameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                
                ></TextInput>
            </View>
          </View>
          {errorname !== null ? (
            <View
              style={{
                //height: height * 0.02,
                width: width * 0.7,
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignSelf: 'center',
                
              }}>
             
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  //textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {errorname}
              </Text>
            </View>
          ) : null}
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Middle Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter middle name"
                placeholderTextColor={'#8E8E8E'} 
                keyboardType="default"
                onChangeText={text => {
                  setmname(text), mnameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                ></TextInput>
            </View>
          </View>
          {errormname !== null ? (
            <View
              style={{
                //height: height * 0.02,
                width: width * 0.7,
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignSelf: 'center',
                
              }}>
             
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  //textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {errormname}
              </Text>
            </View>
          ) : null}
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Last Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter last name"
                placeholderTextColor={'#8E8E8E'} 
                
                keyboardType="default"
                onChangeText={text => {
                  setlname(text), lnameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                
                ></TextInput>
            </View>
          </View>
      
        {errorlname !== null ? (
          <View
            style={{
              //height: height * 0.02,
              width: width * 0.7,
              //backgroundColor: 'green',
              justifyContent: 'center',
              //alignSelf: 'center',
              
            }}>
           
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                //textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {errorlname}
            </Text>
          </View>
        ) : null}
     
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Gender</Text>
            </View>
            <View style={styles.ind4}>
              <View style={styles.fl}>
                <TextInput
                  placeholder="Gender"
                  placeholderTextColor={'#8E8E8E'} maxLength={30}></TextInput>
                <View style={styles.ind2}>
                  <Text style={styles.remtxt1}>▼</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => onSubmit ()}>
          <View style={styles.btntxt1}>
          <Text style={styles.btntxt}>Continue</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default Personal;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1.3,
    width: width * 1,
    backgroundColor: 'black',
  },

  txt: {
    //  backgroundColor:'red',
    height: height * 0.05,
    width: width * 0.09,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  container: {
    //backgroundColor: 'cyan',
    height: height * 1,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 0,
  },
  txt1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  info: {
    //  backgroundColor:'red',
    height: height * 0.041,
  },
  infotxt: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
  },
  infotxt1: {
    color: '#8E8E8E',
    fontSize: 17,
  },
  infot: {
    // backgroundColor:'red',
    height: height * 0.115,
  },
  txtna: {
    //  backgroundColor:'red',
    height: height * 0.04,
  },
  txtna1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ind: {
    backgroundColor: '#1E1E1E',
    height: height * 0.0644,
    width: width / 1.1,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
     //flexDirection: 'row',
    //marginLeft: 10,
   
    backgroundColor:'rgb(30,30,30)',
    width:width/1.1,
    borderRadius:10,
    alignSelf:'center',
    //borderWidth: 1,
   // borderColor: 'grey',
    height:height*0.065
  },
  ind1: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ind2: {
    justifyContent: 'center',
  },
  img: {
    height: height * 0.05,
    width: width * 0.11,
    // borderRadius:100,
    //  marginTop:4
    //alignSelf:'center'
  },
  remtxt1: {
    color: '#EAB73B',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt5: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 18,
  },
  indtxt: {
    height: height * 0.14,
    // backgroundColor:'red'
  },
  h: {
   // backgroundColor:'red',
    height: height * 0.12,
  },
  fl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ind4: {
    backgroundColor: '#1E1E1E',
    height: height * 0.065,
    width: width / 1.1,
    borderRadius: 10,
    padding: 20,
    //justifyContent:'space-between',
    // alignItems:'flex-end'
  },
  btntxt:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  btntxt1:{
    height:height*0.065,
    width:width/1.1,
    backgroundColor:'#EAB73B',
    justifyContent:'center',
    borderRadius:10,

  }
});

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
// import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-paper';

//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const Account = ({navigation}) => {

  const data = [
    {
      value: '+73',
    },
    {
      value: '+92',
    },
    {
      value: '+63',
    },
  ];


  const [passwordVisible, setPasswordVisible] = useState('false');


  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');


  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('Enter valid email address ');
    } else if (!Regex.test(email)) {
      setErrorEmail('please enter valid email address');
    } else {
      setErrorEmail(null);
    }
  };



  const [pnumber, setPnumber] = useState('');
  const [errorPnumber, setErrorPnumber] = useState('');


  const pnumberValidate = pnumber => {
    var Regex = /^[0]?[789]\d{9}$/;
    if (pnumber === '' || pnumber === undefined || pnumber === null) {
      setErrorPnumber('Enter valid phone number ');
    } else if (!Regex.test(pnumber)) {
      setErrorPnumber('please enter valid phone number');
    } else {
      setErrorPnumber(null);
    }
  };



  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');


  const passwordValidate = password => {
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Enter valid password ');
    } else if (!Regex.test(password)) {
      setErrorPassword('please enter valid password');
    } else {
      setErrorPassword(null);
    }
  };


  const [cpassword, setcPassword] = useState('');
  const [errorcPassword, setErrorcPassword] = useState('');


  const cpasswordValidate = cpassword => {
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorcPassword('Enter valid cpassword ');
    } else if (!Regex.test(cpassword)) {
      setErrorcPassword('please enter valid cpassword');
    } else {
      setErrorcPassword(null);
    }
  };







  const validate = () => {
    var Rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var Regex = /^[0]?[789]\d{9}$/;
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const flag = true;
    if (email === '') {
      setErrorEmail('*please enter email address');
      return !flag;
    }
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Please enter email address');
      return !flag;
    }
    if (!Rgx.test(email)) {
      setErrorEmail('*Please enter valid email address');
      return !flag;
    } else setErrorEmail(null);

    //pnumber

    if (pnumber === '') {
      setErrorPnumber('*please enter phone ');
      return !flag;
    }
    if (pnumber === '' || pnumber === undefined || pnumber === null) {
      setErrorPnumber('*Please enter phone');
      return !flag;
    }
    if (!Rgx.test(pnumber)) {
      setErrorPnumber('*Please enter valid phone number');
      return !flag;
    } else setErrorPnumber(null);

    //password

    if (password === '') {
      setErrorPassword('*please enter password ');
      return !flag;
    }
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('*Please enter password');
      return !flag;
    }
    if (!Rgx.test(password)) {
      setErrorPassword('*Please enter valid password');
      return !flag;
    } else setErrorPassword(null);
    //cpassword

    if (cpassword === '') {
      setErrorcPassword('*please enter cpassword ');
      return !flag;
    }
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorcPassword('*Please enter cpassword');
      return !flag;
    }
    if (!Rgx.test(cpassword)) {
      setErrorcPassword('*Please enter valid cpassword');
      return !flag;
    } else setErrorcPassword(null);


  };

  const onSubmit = () => {
    if (validate()) {
       alert('Sussessful')
      navigation.navigate('Referal');
    } else {
      alert('Something went wrong');
    }
  };



 
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.maincontainer}>
        <View style={styles.txt1}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
           <Image
           source={require('../Screen/Image/arro.jpeg')}
           style={styles.img}></Image>
           </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
          <Text style={styles.txt2}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Enter Account Details</Text>
        </View>

        <View style={styles.email}>
          <Text style={styles.etxt}>Email</Text>
          <View style={styles.einput}>
            <View style={styles.einput1}>
              <View >
              <TouchableOpacity>
             <View style={styles.imgc}>
             
             <Image
             source={require('../Screen/Image/sms1.jpeg')}
             style={styles.img}></Image></View>
              </TouchableOpacity>
              </View>

              <View
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  al: 'center',
                }}>
                <Text
                  style={{color: 'grey', textAlign: 'center', fontSize: 30,marginLeft:10}}>
                  |
                </Text>
              </View>

              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={'white'}
                keyboardType="email-address"
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
                maxLength={30}
                style={styles.input}></TextInput>
            </View>
          </View>
        </View>
        {errorEmail !== null ? (
          <View
            style={{
              height: height * 0.02,
              width: width * 0.7,
              //backgroundColor: 'green',
              justifyContent: 'center',
              //alignSelf: 'center',
              marginLeft: 15,
            }}>
           
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                //textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {errorEmail}
            </Text>
          </View>
        ) : null}

        <View style={styles.email}>
          <Text style={styles.etxt}>Phone Number</Text>
          <View style={styles.einput}>
            <View style={styles.einput1}>
              <View>
                <Image
                  source={require('../Screen/Image/ind.jpeg')}
                  style={styles.img1}></Image>
              </View>

              <View
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  al: 'center',
                }}>
                <Text
                  style={{color: 'grey', textAlign: 'center', fontSize: 30,}}>
                  |
                </Text>
              </View>

              <TextInput
              placeholder="Enter your email"
              placeholderTextColor={'white'}
              keyboardType="default"
              onChangeText={text => {
                setPnumber(text), pnumberValidate(text);
              }}
         
                maxLength={15}
                style={styles.input}></TextInput>
            </View>
          </View>
        </View>
        {errorPnumber !== null ? (
          <View
            style={{
              height: height * 0.02,
              width: width * 0.7,
              //backgroundColor: 'green',
              justifyContent: 'center',
              //alignSelf: 'center',
              marginTop:5,
              marginLeft:15
            }}>
           
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                //textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {errorPnumber}
            </Text>
          </View>
        ) : null}

        <View style={styles.email}>
          <Text style={styles.etxt}>Password</Text>
          <View style={styles.einput}>
            <View style={styles.einput1}>
              <View>
                <Image
                  source={require('../Screen/Image/lock1.jpeg')}
                  style={styles.img}></Image>
              </View>
              <View>
                <Text
                  style={{color: 'grey', textAlign: 'center', fontSize: 30,}}>
                  |
                </Text>
              </View>

              <View style={styles.input1}>
                <TextInput
                  placeholder=" Enter your password"
                  placeholderTextColor={'white'}
                  keyboardType="default"
                  onChangeText={text => {
                    setPassword(text), passwordValidate(text);
                  }}
                 
                
                  maxLength={30}
                  style={styles.input}></TextInput>
              </View>
              <View style={styles.eye}>
                <View>
                <TouchableOpacity>
                <Image
                source={require('../Screen/Image/loc.jpeg')}
                style={styles.img}></Image>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            {errorPassword !== null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width * 0.7,
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  //alignSelf: 'center',
                  marginTop:7
                }}>
        
                <Text
                  style={{
                    color: 'red',
                    fontSize: 15,
                    //textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorPassword}
                </Text>
              </View>
            ) : null}
            
          </View>
        </View>

        <View style={styles.email}>
          <Text style={styles.etxt}>Confirm Password</Text>
          <View style={styles.einput}>
            <View style={styles.einput1}>
              <View>
                <Image
                  source={require('../Screen/Image/lock1.jpeg')}
                  style={styles.img}></Image>
              </View>
              <View
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  al: 'center',
                }}>
                <Text
                  style={{color: 'grey', textAlign: 'center', fontSize: 30}}>
                  |
                </Text>
              </View>

              <View style={styles.input1}>
                <TextInput
                  placeholder=" Enter your password"
                  placeholderTextColor={'white'}
                  keyboardType="default"
                  onChangeText={text => {
                    setcPassword(text), cpasswordValidate(text);
                  }}
                  maxLength={30}
                  style={styles.input}></TextInput>
              </View>
              <View style={styles.eye}>
                <View>
                  <TouchableOpacity>
                  <Image
                    source={require('../Screen/Image/loc.jpeg')}
                    style={styles.img}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {errorcPassword !== null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width * 0.7,
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  //alignSelf: 'center',
                  marginTop:5
                }}>
               
                <Text
                  style={{
                    color: 'red',
                    fontSize: 15,
                    //textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorcPassword}
                </Text>
              </View>
            ) : null}
          
           
          </View>
          <View style={styles.rem}>
          <Text style={styles.remtxt}>Referral ID (Optional)</Text>
          <Text style={styles.remtxt1}>▼</Text>
 
      </View>
        </View>
        <View style={styles.btn1}>
            <TouchableOpacity onPress={() => navigation.navigate('Referal')}>
       <View style={{backgroundColor:'#EAB73B'}}>
     
       
     
         <Text style={styles.btntxt}>Next</Text>
       
       </View>
       </TouchableOpacity>
  
       </View>
        
        
      </View>
  </ScrollView>
  </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1.3,
    width: width * 1,
    backgroundColor: 'black',
    //  justifyContent:'center'
    //marginTop:90
  },

  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
  txt1: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.02,
    alignSelf: 'center',
  },
  txt2: {
    fontSize: 30,
    color: 'white',
  },
  container: {
    marginTop: 30,
    width: width / 1.1,
  },
  container1: {
    // backgroundColor:'red',
    height: height * 0.06,
    width: width / 1.2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: 20,
  },
  container2: {
    backgroundColor: '#EAB73B',
    height: height * 0.05,
    width: width * 0.23,
    borderRadius: 10,
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: 'black',
    height: height * 0.05,
    width: width * 0.35,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txt3: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt4: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    margin: 15,
  },
  etxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  einput: {
    backgroundColor: 'rgb(30,30,30)',
    borderRadius: 10,
    height: height * 0.0644,
    // justifyContent:'center',
    marginTop: 8,
  
  },
  einput1: {
    flexDirection: 'row',
    marginLeft: 10,
    margin: 4
  },
  input: {
    color: 'white',
    marginLeft:5
  },
  eye: {
    //backgroundColor:'red',
  },
  chek: {
    //  backgroundColor:'yellow',
    height: height * 0.03,
    width: width * 0.06,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  btn: {
    flexDirection: 'row',
  },
  rem: {
    //justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
    flexDirection:'row',
   // backgroundColor:'red'
  },
  remtxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  remtxt1: {
    color: '#EAB73B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn1: {
    backgroundColor: '#EAB73B',
    height: height * 0.06,
    width: width / 1.1,
    marginTop: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btntxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  btntxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btntxt1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EAB73B',
    marginTop: 40,
  },
  btntxt2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#EAB73B',
    textDecorationLine: 'underline',
  },
  img: {
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: 100,
    marginTop: 4,
    color: 'rgb(30,30,30)',
  },
  input1: {
    justifyContent: 'center',
    width: width * 0.68,
  },
  img1:{
    height:height*0.04,
    width:width*0.2,
    borderRadius:100,
    marginTop:4,
    color: 'rgb(30,30,30)',
},
imgc:{
  //backgroundColor:'yellow',
   height:height*0.05,
   width:width*0.07,
   justifyContent:'center',
   alignSelf:'center',
 
 
 }
});

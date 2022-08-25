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
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {Avatar} from 'react-native-paper';

//import {Dropdown} from 'react-native-material-dropdown';
// <Ionicons name="mail" size={20} color="green" />
// <Avatar.Icon
//           size={30}
//           icon="lock"
//           color="yellow"
//           backgroundColor="black"
//         />
//         <Icon name="lock"/>

const {height, width} = Dimensions.get('window');
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

const LoginPhone = ({navigation}) => {

  const [isSecureEntry, setIsSecureEntry] = useState(true)

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');


  const phoneValidate = phone => {
    var Regex = /^[0]?[789]\d{9}$/;
    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('Enter valid phone number ');
    } else if (!Regex.test(phone)) {
      setErrorPhone('please enter valid phone number');
    } else {
      setErrorPhone(null);
    }
  };



  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Enter valid password');
    } else if (!Regex.test(password)) {
      setErrorPassword('Please enter valid password');
    } else {
      setErrorPassword(null);
    }
  };

  
  const validate = () => {
    var Rgx = /^[0]?[789]\d{9}$/;
    var Rgex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const flag = true;
    if (phone === '') {
      setErrorPhone('*please enter phone number');
      return !flag;
    }
    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('*Please enter phone number');
      return !flag;
    }
    if (!Rgx.test(phone)) {
      setErrorPhone('*Please enter valid phone number');
      return !flag;
    } else setErrorPhone(null);
    if (password === '') {
      setErrorPassword('*Please enter password');
      return !flag;
    }
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('*Please enter password');
      return !flag;
    }
    if (!Rgex.test(password)) {
      setErrorPassword('*Please enter valid password');
      return !flag;
    } else {
      setErrorPassword(null);
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      alert('Sussessful')
      navigation.navigate('Account');
    } else {
      alert('Something went wrong');
    }
  };




  return (
 <SafeAreaView>
 <ScrollView>
 
 <View style={styles.maincontainer}>
  <View style={styles.containermain}>
  <View style={styles.txt1}>
  <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
    <Text style={styles.txt2}>×</Text>
  </TouchableOpacity>
</View>

<View style={styles.container}>
  <Text style={styles.txt}>E-bullsAccount Login</Text>
</View>
<View style={styles.container1}>
<TouchableOpacity onPress={() => navigation.navigate('LoginEmail')}>
    <View style={styles.container2}>
      <Text style={styles.txt3}>Email</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('LoginPhone')}>
    <View style={styles.container3}>
      <Text style={styles.txt4}> Phone Number</Text>
    </View>
  </TouchableOpacity>
</View>
<View style={styles.email1}>
<View style={styles.email}>
  <Text style={styles.etxt}>Phone Number</Text>
  <View style={styles.einput}>
    <View style={styles.einput1}>
      <View style={styles.imgc}>
      <Image
    source={require('./Image/ind.jpeg')}
     style={styles.img2}/>
       
      </View>

      <View
        style={{
          color: 'white',
          textAlign: 'center',
          justifyContent: 'center',
          al: 'center',
        }}>
        <Text
          style={{color: 'grey', textAlign: 'center', fontSize: 30,marginLeft:40}}> |</Text>
      </View>

      <TextInput
        placeholder="Enter your number"
        placeholderTextColor={'grey'}
        keyboardType="phone-pad"
        onChangeText={text => {
          setPhone(text), phoneValidate(text);
        }}
        maxLength={30}
        style={styles.input}></TextInput>
    </View>
  </View>
</View>
{errorPhone !== null ? (
  <View
    style={{
      height: '30%',
      width: '95%',
      // alignSelf:'center',
      // backgroundColor: 'green',
    }}>
    <Text style={{color: 'red', fontSize: 16,marginTop:5}}>{errorPhone}</Text>
  </View>
) : null}
</View>
<View style={styles.email2}>
  <Text style={styles.etxt}>Password</Text>
  <View style={styles.einput}>
    <View style={styles.einput1}>
      <View style={styles.imgc}>
      <Image
      source={require('./Image/lock1.jpeg')}
       style={styles.img}/>
      
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
          placeholder="Enter your password"
          placeholderTextColor={'grey'}
       
          maxLength={18}
      secureTextEntry={isSecureEntry}
      onChangeText={text => {
        setPassword(text), passwordValidate(text);
      }}
          style={styles.input}></TextInput>
      </View>
      <View style={styles.eye}>
      <TouchableOpacity onPress={() => {
        setIsSecureEntry((prev) => !prev)
      }}>
      <View style={styles.imgc1}>
      <Image
      source={require('./Image/eye1.jpeg')}
       style={styles.img}/>
      
     </View>
     
      </TouchableOpacity>
       </View>
    </View>
    {errorPassword !== null ? (
      <View
        style={{
          height:height*0.05,
          width: '80%',
          // alignSelf:'center',
          //backgroundColor: 'green',
        }}>
        <Text style={{color: 'red', fontSize: 16,marginTop:10}}>
          {errorPassword}
        </Text>
      </View>
    ) : null}
 
  </View>

</View>
<View style={styles.btn}>
<TouchableOpacity >
  <View style={styles.chek}>
  
  </View>
</TouchableOpacity>
<View style={styles.rem}>
  <Text style={styles.remtxt}>Remember me</Text>

</View>
</View>

  <View style={styles.btn1}>
  <TouchableOpacity  onPress={() => onSubmit ()}>
    <Text style={styles.btntxt}>Sign In</Text>
    </TouchableOpacity>
  </View>

<TouchableOpacity onPress={() => navigation.navigate('Register')}>
  <View>
    <Text style={styles.btntxt1}>Forget password ?</Text>
  </View>
</TouchableOpacity>
<View style={styles.btn2}>
  <TouchableOpacity>
    <Text style={styles.btntxt2}>Register now</Text>
  </TouchableOpacity>
</View>
  </View>
 </View>
</ScrollView>
 </SafeAreaView>

    );
};

export default LoginPhone;

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
   // backgroundColor:'red',
    height:height*0.05,
    width:width/1.1,
    alignSelf:'center',
   // marginTop:30
  },
  txt2: {
    fontSize: 30,
    color: 'white',
  },
  container: {
    marginTop: 30,
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
   // backgroundColor: '#EAB73B',
    height: height * 0.05,
    width: width * 0.23,
    borderRadius: 10,
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: '#EAB73B',
    height: height * 0.05,
    width: width * 0.35,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txt3: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  txt4: {
    alignSelf: 'center',
   // color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
  
   //borderColor: ' #FF2A00',
    borderWidth: 1,
   backgroundColor:'#1E1E1E'
  },
  einput1: {
    flexDirection: 'row',
    marginLeft: 10,
    margin: 4,
  },
  input: {
    color: 'white',
    alignSelf: 'center',
    height: height * 0.05,
    width: width * 0.71,
    // backgroundColor: 'yellow',
    marginLeft:10
  },
  eye: {
    //backgroundColor:'red',
  },
  chek: {
    //  backgroundColor:'yellow',
    height: height * 0.03,
    width: width * 0.06,
    marginTop: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
  },
  btn: {
    flexDirection: 'row',
  //marginTop:20,
  marginLeft:22
  },
  rem: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  remtxt: {
    color: 'white',
    fontSize: 18,
   // fontWeight: 'bold',
  },
  btn1: {
    backgroundColor: '#EAB73B',
    height: height * 0.06,
    width: width / 1.1,
    marginTop: 40,
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
    height: height * 0.03,
    width: width * 0.08,
    borderRadius: 100,
   //marginTop: ,
    color: 'rgb(30,30,30)',
   // marginBottom:20
   alignSelf:'center',
   
    
  },
  img1: {
    height: height * 0.05,
    width: width * 0.08,
    borderRadius: 100,
     marginTop: 4,
    color: 'rgb(30,30,30)',
   // marginBottom:20
   alignSelf:'center'
    
  },
  input1: {
    justifyContent: 'center',
    width: width * 0.73,
  },
  imgc:{
   //backgroundColor:'red',
    height:height*0.02,
    width:width*0.05,
    justifyContent:'center',
    alignSelf:'center',
    
  
  
  },
  img12:{
    backgroundColor:'red',
    height:height*0.04,
    width:width*0.07,
    alignSelf:'center',
   
  },
  imgc1:{
    //backgroundColor:'red',
     height:height*0.02,
     width:width*0.01,
     justifyContent:'center',
     alignSelf:'center',
     marginTop:15
   
   
   },
   email1:
    {
      //backgroundColor:'yellow',
    height:height*0.12,
    marginTop:40,
    width:width*0.9,
    alignSelf:'center'
    
    
    
    },
   
    email2:
    {
   // backgroundColor:'yellow',
    height:height*0.13,
    marginTop:20,
    width:width*0.9,
    alignSelf:'center'
    
    
    
    },
    img2:{
      height:height*0.03,
      width:width*0.175
    }
   
   
});

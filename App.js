import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Ebull from './Src1/Screen/Ebull';
import LoginEmail from './Src1/Screen/LoginEmail';


import Register from './Src1/Screen/Register';
import Account from './Src1/Screen/Account';
import Referal from './Src1/Screen/Referal';
import Personal from './Src1/Screen/Personal';
import Personalinfo from './Src1/Screen/Personalinfo';
import PersonalVer from './Src1/Screen/PersonalVer';
import Pver from './Src1/Screen/Pver';
import Pver1 from './Src1/Screen/Pver1';
import Amit from './Src1/Screen/Amit';
import LoginPhone from './Src1/Screen/LoginPhone';

import Login from './Src1/Screen/Login';
import SignUp from './Src1/Screen/SignUp';

import Home from './Src1/Screen/Home';
import Common from './Src1/Screen/Common';
import Register1 from './Src1/Screen/Register1';
import Pregister from './Src1/Screen/Pregister';
import Pollyhouse from './Src1/Screen/Pollyhouse';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
    





        <Stack.Screen  name="Ebull" component={Ebull} />
      
        <Stack.Screen  name="LoginEmail" component={LoginEmail} />
        <Stack.Screen  name="LoginPhone" component={LoginPhone}  />
        <Stack.Screen  name="Register" component={Register}  />
        <Stack.Screen  name="Account" component={Account}  />
        <Stack.Screen  name="Referal" component={Referal}  />
        <Stack.Screen  name="Personal" component={Personal}  />
        <Stack.Screen  name="Personalinfo" component={Personalinfo}  />
        <Stack.Screen  name="PersonalVer" component={PersonalVer} />
        <Stack.Screen  name="Pver" component={Pver}  />
        <Stack.Screen  name="Pver1" component={Pver1}   />
        <Stack.Screen name='Amit' component={Amit}/>
        <Stack.Screen  name="Common" component={Common} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="SignUp" component={SignUp} />
    
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Register1" component={Register1} />
  
        <Stack.Screen  name="Pregister" component={Pregister} />
        <Stack.Screen  name="Pollyhouse" component={Pollyhouse} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;




// import {
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
//   Text,
//   Image,
//   View,
// } from 'react-native';
// import React,{useState} from 'react';

// //import { Dropdown } from 'react-native-material-dropdown';
// import { Icon } from 'react-native-vector-icons/Icon';
// // import { Divider,Text,Input, useTheme } from "@rneui/themed";

// // type DividerViewTypes = {};

// const {height, width} = Dimensions.get('window');
// const data = [
//   {
//     value: '+73',
//   },
//   {
//     value: '+92',
//   },
//   {
//     value: '+63',
//   },
// ];
// const Login = props => {
  

//   const [isSecureEntry, setIsSecureEntry] = useState(true)

//   const [password, setPassword] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');

//   const [email, setEmail] = useState('');
//   const [errorEmail, setErrorEmail] = useState('');


//   const emailValidate = email => {
//     var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (email === '' || email === undefined || email === null) {
//       setErrorEmail('please enter email number');
//     } else if (!Regex.test(email)) {
//       setErrorEmail('please enter vaid number');
//     } else {
//       setErrorEmail(null);
//     }
//   };



//   const passwordValidate = password => {
//     var Regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
//     if (password === '' || password === undefined || password === null) {
//       setErrorPassword('Please enter password');
//     } else if (!Regex.test(password)) {
//       setErrorPassword('Please enter valid password');
//     } else {
//       setErrorPassword(null);
//     }
//   };

  
//   const validate = () => {
//     var Rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var Rgex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

//     const flag = true;
//     if (email === '') {
//       setErrorEmail('*please enter email number');
//       return !flag;
//     }
//     if (email === '' || email === undefined || email === null) {
//       setErrorEmail('*Please enter email number');
//       return !flag;
//     }
//     if (!Rgx.test(email)) {
//       setErrorEmail('*Please enter valid email number');
//       return !flag;
//     } else setErrorEmail(null);
//     if (password === '') {
//       setErrorPassword('*Please enter password');
//       return !flag;
//     }
//     if (password === '' || password === undefined || password === null) {
//       setErrorPassword('*Please enter password');
//       return !flag;
//     }
//     if (!Rgex.test(password)) {
//       setErrorPassword('*Please enter valid password');
//       return !flag;
//     } else {
//       setErrorPassword(null);
//     }
//     return flag;
//   };

//   const onSubmit = () => {
//     if (validate()) {
//       // alert('Sussessful')
//       props.navigation.navigate('Bank');
//     } else {
//       alert('Something went wrong');
//     }
//   };


//   // const { theme } = useTheme();
//   return (
//     <SafeAreaView>
//     <View style={styles.maincontainer}>
//       <View style={styles.cross}>
//        <TouchableOpacity>
     
//        </TouchableOpacity>
//       </View>
//       <View style={styles.textcon}>
//         <Text style={{fontSize: 26, fontWeight: '600'}}>
//           Global REIT Account Login
//         </Text>
//       </View>
//       <View style={styles.fleg}>
//         <TouchableOpacity>
//         <View style={styles.btn}>
//           <Text style={{fontSize: 16,}}>Email</Text>
//         </View>
//         </TouchableOpacity>
//       <TouchableOpacity>
//       <View style={styles.btn0}>
//       <Text style={{fontSize: 16, color: 'white'}}>email number</Text>
//     </View>
//       </TouchableOpacity>
        
//       </View>
//       <View style={styles.email}>
//        <View style={styles.number}>
//        <Text style={{fontSize: 16, color: '#547597'}}>Email</Text>
//        </View>
//       </View>

//       <View style={styles.connumber}>
//       <View style={styles.flagflex}>
      
      
      
//       <View style={styles.imgc}>
//   <Image
//     source={require('./Src1/Screen/Image/sms1.jpeg')}
//     style={styles.img}></Image>
// </View>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           placeholderTextColor={'#366EA6'}
//           autoComplete="off"
//           maxLength={25}
//           keyboardType="numeric"
//           onChangeText={text => {
//             setEmail(text), emailValidate(text);
//           }}

//         />
 

      
//       </View>
//       {errorEmail !== null ? (
//         <View
//           style={{
//             height: '30%',
//             width: '95%',
//             // alignSelf:'center',
//             // backgroundColor: 'green',
//           }}>
//           <Text style={{color: 'red', fontSize: 16}}>{errorEmail}</Text>
//         </View>
//       ) : null}
//       </View>

//       <View style={styles.pass}>
//       <Text style={{fontSize:16,color:'#547597'}}>Password</Text>
//       </View>
//       <View style={styles.inputcon}>
//       <View style={styles.txtinpt}>
//       <View style={styles.lock}>
     
     
//       </View>
//       <View style={{width:0.6,height:height*0.03,alignSelf:'center',backgroundColor:'#547597'}}></View>
//       <View style={styles.inpt}>
//       <View style={styles.imgc}>
//       <View style={styles.imgc}>
//       <Image
//         source={require('./Src1/Screen/Image/lock1.jpeg')}
//         style={styles.img}></Image>
//     </View>
//     </View>
//       <TextInput
//       placeholder='Enter your password'
//       placeholderTextColor={'#366EA6'}
//       keyboardType='email-address'
//       maxLength={18}
//       secureTextEntry={isSecureEntry}
//       onChangeText={text => {
//         setPassword(text), passwordValidate(text);
//       }}
//       />

//       </View>
//       <View style={styles.eye}>
//      <TouchableOpacity onPress={() => {
//        setIsSecureEntry((prev) => !prev)
//      }}>
//      <View style={styles.imgc}>
//       <Image
//         source={require('./Src1/Screen/Image/eve.jpeg')}
//         style={styles.img}></Image>
//     </View>
    
//      </TouchableOpacity>
//       </View>
      
      
//       </View>
//       {errorPassword !== null ? (
//         <View
//           style={{
//             height: '25%',
//             width: '80%',
//             // alignSelf:'center',
//             // backgroundColor: 'green',
//           }}>
//           <Text style={{color: 'red', fontSize: 16}}>
//             {errorPassword}
//           </Text>
//         </View>
//       ) : null}
//       </View>
//       <View style={styles.check}>
//       <View style={styles.remember}>
     
//       </View>
//       <TouchableOpacity>
//       <View style={styles.forgot}>
//       <Text style={{fontSize:16,color:'#343434',}}>Remember me</Text>
//       </View>
//       </TouchableOpacity>
//       <View style={styles.btn}>
//       <TouchableOpacity>
//         <View style={styles.chek}></View>
//       </TouchableOpacity>
//       <View style={styles.rem}>
//         <Text style={styles.remtxt}>Remember me</Text>
//       </View>
//     </View>
//       </View>
//       <View style={styles.btncon}>
//       <TouchableOpacity onPress={() => onSubmit()}>
//       <View style={styles.btn1}>
//       <Text style={{fontSize:18,color:'#FFFFFF'}}>Sign in</Text>
//       </View>
//       </TouchableOpacity>
//       </View>
//       <View style={styles.regcon}>
//      <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
//      <View style={styles.reg}>
//      <Text style={{fontSize:18,textDecorationLine:'underline',color:'#244273'}}>Register now</Text>
//      </View>
//      </TouchableOpacity>
//       </View>
//     </View>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   maincontainer: {
//     height: height * 1,
//     width: width * 1,
//     backgroundColor: '#fff',
//   },
//   cross: {
//     height: height * 0.05,
//     width: width * 0.9,
//     alignSelf: 'center',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     // backgroundColor:'cyan'
//   },
//   textcon: {
//     height: height * 0.07,
//     width: width * 0.9,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     // backgroundColor:'pink'
//   },
//   fleg: {
//     height: height * 0.07,
//     width: width * 0.9,
//     flexDirection: 'row',
//    // justifyContent: 'space-between',
//     alignSelf: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//     justifyContent:'flex-end'
//   },
//   txt: {
//     height: height * 0.07,
//     width: width * 0.4,
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     backgroundColor: '#EAB73B',
//   },
//   btn: {
//     height: height * 0.05,
//     width: width * 0.28,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 11,
//     backgroundColor: '#EAB73B',
//   },
//   btn0: {
//     height: height * 0.05,
//     width: width * 0.35,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 11,
//    // backgroundColor: '#EAB73B',
//   },
//   btn11: {
//     height: height * 0.05,
//     width: width * 0.35,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 11,
//     //backgroundColor: '#244273',
//   },
//   //   vertical: {
//   //       width:width*0.8,
//   //     marginBottom: 10,
//   //     display: 'flex',
//   //     flexDirection: 'row',
//   //     justifyContent: 'space-between',
//   //   },
//   email: {
//     height: height * 0.08,
//     width: width * 0.9,
//     justifyContent: 'flex-end',
//     alignSelf: 'center',
    
//     // backgroundColor:'grey'
//   },
//   inputcon:{
//       height:height*0.08,
//       width:width*0.9,
//       alignSelf:'center',
//       // backgroundColor:'cyan'
//   },
//   txtinpt:{
//     height:height*0.06,
//     width:width*0.9,
//     flexDirection:'row',
//     borderRadius:6,
//     alignSelf:'center',
//     backgroundColor:'#DFEFFF'
//   },
//   lock:{ 
//     height:height*0.06,
//     width:width*0.14,
//     justifyContent:'center',
//     alignItems:'center',
//     // backgroundColor:'cyan'
//   },
//   inpt:{
//     height:height*0.06,
//     width:width*0.58,
//     justifyContent:'center',
//     flexDirection:'row',
//     padding:5,
//     justifyContent:'space-between',
//     // borderLeftWidth:1,
//     // backgroundColor:'cyan'
//   },
//   eye:{
//     height:height*0.06,
//     width:width*0.18,
//     alignItems:"center",
//     justifyContent:'center',
//     alignSelf:'flex-end',
//     // backgroundColor:'cyan'
//   },
//   number:{
//       height:height*0.04,
//       justifyContent:'flex-start',
//       backgroundColor:'cyan'
//   },
//   input: {
//     height: height * 0.06,
//     width: width * 0.8,
//     alignSelf: 'center',
//      backgroundColor:'green',
// marginRight:10
    
//   },
//   flagflex: {
//     height: height * 0.06,
//     width: width * 0.9,
//     flexDirection: 'row',
//     alignSelf:'center',
//     alignItems: 'center',
//     backgroundColor: '#DFEFFF',
//     borderRadius: 8,
//      backgroundColor:'yellow',
//      justifyContent:'flex-end'
//   },
//   connumber:{
//     height: height * 0.09,
//     width: width * 0.9,
//     alignItems:'center',
//     alignSelf:'center',
//      backgroundColor:'cyan'
//   },

//   flgvw: {
//     width: width * 0.1,
//     height: height * 0.048,
//     justifyContent: 'center',
//     alignItems: 'center',
//      backgroundColor: 'yellow',
//   },
//   flagicon: {
//     width: 25,
//     height: 25,
//     // backgroundColor:'cyan'
//   },
//   dropdown: {
//     width: width * 0.14,
//     height: height * 0.04,
//     alignSelf: 'flex-start',
//     justifyContent: 'center',
//     //backgroundColor:'pink'
//   },
//   email_txtvw: {
//     width: width * 0.65,
//     height: height * 0.08,
//     flexDirection:'row',
//     justifyContent: 'center',
//     backgroundColor:'cyan'
//   },
//   email_txtvw2: {
//     width: width * 0.55,
//     height: height * 0.08,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     // backgroundColor:'red'
//   },
//   email_txtvw1: {
//     width: width * 0.8,
//     height: height * 0.055,
//     justifyContent: 'center',
//     // borderLeftWidth: 1,
//     borderColor: 'gray',
//      backgroundColor:'green',
//     alignSelf: 'center',
//   },
//   pass:{
//       height:height*0.06,
//       width:width*0.9,
//       justifyContent:'center',
//       alignSelf:'center',
//     //   backgroundColor:'cyan'
//   },
//   check:{
//     height:height*0.06,
//     width:width*0.9,
//     flexDirection:'row',
//     alignSelf:'center',
//     // backgroundColor:'green'
//   },
//   remember:{
//     height:height*0.06,
//     width:width*0.45,
//     alignItems:'flex-end',
//     justifyContent:'flex-start',
//     // titleProps:{"Rmember me"},
//     textStyle:{fontSize:16,color:'#343434'},
//     // backgroundColor:'cyan'
//   },
//   forgot:{
//     height:height*0.05,
//     width:width*0.45,
//     //alignItems:'flex-end',
//     //justifyContent:'center',
//     // backgroundColor:'pink'

//   },
//   btn1:{
//     height:height*0.06,
//     width:width*0.9,
//     fontFamily:'Poppins',
//     alignSelf:"center",
//     alignItems:'center',
//     borderRadius:12,
//     justifyContent:'center',
//     backgroundColor:"#244273"
//   },
//   btncon:{
//     height:height*0.16,
//     justifyContent:'center'
//   },
//   regcon:{
//     height:height*0.08,
//     width:width*0.9,
//     alignSelf:"center",
//     justifyContent:'center',
//     // backgroundColor:'cyan'
//   },
//   reg:{
//     height:height*0.04,
//     width:width*0.4,
//     alignSelf:"center",
//     alignItems:'center',
//     justifyContent:'center',
//     // backgroundColor:'green'
//   },
//   img: {
//     height: height * 0.055,
//     width: width * 0.08,
//     borderRadius: 100,
//    //marginTop: ,
//     color: 'rgb(30,30,30)',
//    // marginBottom:20
//    alignSelf:'center'
    
//   },
//   imgc:{
//     //backgroundColor:'red',
//      height:height*0.02,
//      width:width*0.05,
//      justifyContent:'center',
//      alignSelf:'center',
//      //justifyContent:'flex-end'
     
   
   
//    },
   
// });
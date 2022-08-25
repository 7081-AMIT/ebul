


import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  Image,
  View,
} from 'react-native';
import React,{useState} from 'react';

//import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-vector-icons/Icon';
// import { Divider,Text,Input, useTheme } from "@rneui/themed";

// type DividerViewTypes = {};

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
const Login = props => {
  

  const [isSecureEntry, setIsSecureEntry] = useState(true)

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');


  const phoneValidate = phone => {
    var Regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('please enter phone number');
    } else if (!Regex.test(phone)) {
      setErrorPhone('please enter vaid number');
    } else {
      setErrorPhone(null);
    }
  };



  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorPassword('Please enter password');
    } else if (!Regex.test(password)) {
      setErrorPassword('Please enter valid password');
    } else {
      setErrorPassword(null);
    }
  };

  
  const validate = () => {
    var Rgx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
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
      setErrorPhone('*Please enter valid Phone number');
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
      // alert('Sussessful')
      props.navigation.navigate('Bank');
    } else {
      alert('Something went wrong');
    }
  };


  // const { theme } = useTheme();
  return (
    <SafeAreaView>
    <View style={styles.maincontainer}>
      <View style={styles.cross}>
       <TouchableOpacity>
     
       </TouchableOpacity>
      </View>
      <View style={styles.textcon}>
        <Text style={{fontSize: 26, fontWeight: '600'}}>
          Global REIT Account Login
        </Text>
      </View>
      <View style={styles.fleg}>
        <View style={styles.txt}>
          <Text style={{fontSize: 16, color: '#547597'}}>Email</Text>
        </View>
      <TouchableOpacity>
      <View style={styles.btn}>
      <Text style={{fontSize: 16, color: 'white'}}>Phone number</Text>
    </View>
      </TouchableOpacity>
        {/*<View style={styles.vertical}>
        <Text>Left text</Text>
        <Divider orientation="vertical" />
        <Text style={styles.btn}>Right text</Text>
</View>*/}
      </View>
      <View style={styles.email}>
       <View style={styles.number}>
       <Text style={{fontSize: 16, color: '#547597'}}>Phone Number</Text>
       </View>
      </View>

      <View style={styles.connumber}>
      <View style={styles.flagflex}>
        <TouchableOpacity>
          <View style={styles.flgvw}>
           
          </View>
        </TouchableOpacity>
        
        <View style={styles.dropdown}>
          
        </View>
        <View style={styles.phone_txtvw}>
        <View style={{width:0.63,height:height*0.035,alignSelf:'center',backgroundColor:'#547597'}}></View>
        
          <View style={styles.phone_txtvw1}>
            <View style={styles.phone_txtvw2}>
            <View style={styles.imgc}>
        <Image
          source={require('./Src1/Screen/Image/sms1.jpeg')}
          style={styles.img}></Image>
      </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your number"
                placeholderTextColor={'#366EA6'}
                autoComplete="off"
                maxLength={10}
                keyboardType="numeric"
                onChangeText={text => {
                  setPhone(text), phoneValidate(text);
                }}
              />
            </View>
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
          <Text style={{color: 'red', fontSize: 16}}>{errorPhone}</Text>
        </View>
      ) : null}
      </View>

      <View style={styles.pass}>
      <Text style={{fontSize:16,color:'#547597'}}>Password</Text>
      </View>
      <View style={styles.inputcon}>
      <View style={styles.txtinpt}>
      <View style={styles.lock}>
     
     
      </View>
      <View style={{width:0.6,height:height*0.03,alignSelf:'center',backgroundColor:'#547597'}}></View>
      <View style={styles.inpt}>
      <View style={styles.imgc}>
      <View style={styles.imgc}>
      <Image
        source={require('./Src1/Screen/Image/lock1.jpeg')}
        style={styles.img}></Image>
    </View>
    </View>
      <TextInput
      placeholder='Enter your password'
      placeholderTextColor={'#366EA6'}
      keyboardType='email-address'
      maxLength={18}
      secureTextEntry={isSecureEntry}
      onChangeText={text => {
        setPassword(text), passwordValidate(text);
      }}
      />

      </View>
      <View style={styles.eye}>
     <TouchableOpacity onPress={() => {
       setIsSecureEntry((prev) => !prev)
     }}>
     <View style={styles.imgc}>
      <Image
        source={require('./Src1/Screen/Image/eve.jpeg')}
        style={styles.img}></Image>
    </View>
    
     </TouchableOpacity>
      </View>
      
      
      </View>
      {errorPassword !== null ? (
        <View
          style={{
            height: '25%',
            width: '80%',
            // alignSelf:'center',
            // backgroundColor: 'green',
          }}>
          <Text style={{color: 'red', fontSize: 16}}>
            {errorPassword}
          </Text>
        </View>
      ) : null}
      </View>
      <View style={styles.check}>
      <View style={styles.remember}>
     
      </View>
      <TouchableOpacity>
      <View style={styles.forgot}>
      <Text style={{fontSize:16,color:'#343434',}}>Remember me</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.btn}>
      <TouchableOpacity>
        <View style={styles.chek}></View>
      </TouchableOpacity>
      <View style={styles.rem}>
        <Text style={styles.remtxt}>Remember me</Text>
      </View>
    </View>
      </View>
      <View style={styles.btncon}>
      <TouchableOpacity onPress={() => onSubmit()}>
      <View style={styles.btn1}>
      <Text style={{fontSize:18,color:'#FFFFFF'}}>Sign in</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.regcon}>
     <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
     <View style={styles.reg}>
     <Text style={{fontSize:18,textDecorationLine:'underline',color:'#244273'}}>Register now</Text>
     </View>
     </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: '#fff',
  },
  cross: {
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor:'cyan'
  },
  textcon: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor:'pink'
  },
  fleg: {
    height: height * 0.07,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  txt: {
    height: height * 0.07,
    width: width * 0.4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  btn: {
    height: height * 0.05,
    width: width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: '#244273',
  },
  //   vertical: {
  //       width:width*0.8,
  //     marginBottom: 10,
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //   },
  email: {
    height: height * 0.08,
    width: width * 0.9,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    
    // backgroundColor:'grey'
  },
  inputcon:{
      height:height*0.08,
      width:width*0.9,
      alignSelf:'center',
      // backgroundColor:'cyan'
  },
  txtinpt:{
    height:height*0.06,
    width:width*0.9,
    flexDirection:'row',
    borderRadius:6,
    alignSelf:'center',
    backgroundColor:'#DFEFFF'
  },
  lock:{ 
    height:height*0.06,
    width:width*0.14,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'cyan'
  },
  inpt:{
    height:height*0.06,
    width:width*0.58,
    justifyContent:'center',
    flexDirection:'row',
    padding:5,
    justifyContent:'space-between',
    // borderLeftWidth:1,
    // backgroundColor:'cyan'
  },
  eye:{
    height:height*0.06,
    width:width*0.18,
    alignItems:"center",
    justifyContent:'center',
    alignSelf:'flex-end',
    // backgroundColor:'cyan'
  },
  number:{
      height:height*0.04,
      justifyContent:'flex-start',
    //   backgroundColor:'cyan'
  },
  input: {
    height: height * 0.06,
    width: width * 0.56,
    alignSelf: 'center',
    // backgroundColor:'cyan'
  },
  flagflex: {
    height: height * 0.06,
    width: width * 0.9,
    flexDirection: 'row',
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor: '#DFEFFF',
    borderRadius: 8,
    // backgroundColor:'red'
  },
  connumber:{
    height: height * 0.09,
    width: width * 0.9,
    alignItems:'center',
    alignSelf:'center',
    // backgroundColor:'cyan'
  },

  flgvw: {
    width: width * 0.1,
    height: height * 0.048,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  flagicon: {
    width: 25,
    height: 25,
    // backgroundColor:'cyan'
  },
  dropdown: {
    width: width * 0.14,
    height: height * 0.04,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    // backgroundColor:'pink'
  },
  phone_txtvw: {
    width: width * 0.65,
    height: height * 0.08,
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'cyan'
  },
  phone_txtvw2: {
    width: width * 0.55,
    height: height * 0.08,
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  phone_txtvw1: {
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: 'center',
    // borderLeftWidth: 1,
    borderColor: 'gray',
    // backgroundColor:'green',
    alignSelf: 'center',
  },
  pass:{
      height:height*0.06,
      width:width*0.9,
      justifyContent:'center',
      alignSelf:'center',
    //   backgroundColor:'cyan'
  },
  check:{
    height:height*0.06,
    width:width*0.9,
    flexDirection:'row',
    alignSelf:'center',
    // backgroundColor:'green'
  },
  remember:{
    height:height*0.06,
    width:width*0.45,
    alignItems:'flex-end',
    justifyContent:'flex-start',
    // titleProps:{"Rmember me"},
    textStyle:{fontSize:16,color:'#343434'},
    // backgroundColor:'cyan'
  },
  forgot:{
    height:height*0.05,
    width:width*0.45,
    //alignItems:'flex-end',
    //justifyContent:'center',
    // backgroundColor:'pink'

  },
  btn1:{
    height:height*0.06,
    width:width*0.9,
    fontFamily:'Poppins',
    alignSelf:"center",
    alignItems:'center',
    borderRadius:12,
    justifyContent:'center',
    backgroundColor:"#244273"
  },
  btncon:{
    height:height*0.16,
    justifyContent:'center'
  },
  regcon:{
    height:height*0.08,
    width:width*0.9,
    alignSelf:"center",
    justifyContent:'center',
    // backgroundColor:'cyan'
  },
  reg:{
    height:height*0.04,
    width:width*0.4,
    alignSelf:"center",
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'green'
  },
  img: {
    height: height * 0.055,
    width: width * 0.08,
    borderRadius: 100,
   //marginTop: ,
    color: 'rgb(30,30,30)',
   // marginBottom:20
   alignSelf:'center'
    
  },
  imgc:{
    //backgroundColor:'red',
     height:height*0.02,
     width:width*0.05,
     justifyContent:'center',
     alignSelf:'center',
     
   
   
   },
   
});




// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   TouchableOpacity,
//   Alert,
//   Pressable,
//   Dimensions,
//   TextInput,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const {height, width} = Dimensions.get('window');
// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <SafeAreaView>
//       <View>
//         <View style={{backgroundColor: 'green', height: height * 0.05}}>
//           <View style={{height: height * 0.1}}></View>
//           <View>
//           <TouchableOpacity
//                       style={[styles.button, styles.buttonClose1]}
//                       onPress={() => setModalVisible(!modalVisible)}>
//                       <Text style={styles.textStyle}>AMIT</Text>
//                     </TouchableOpacity>
//           </View>

//           <View style={styles.centeredView}>
//             <View style={{height: height * 0.08}}></View>
//             <Modal
//               animationType="slide"
//               transparent={true}
//               visible={modalVisible}
//               onRequestClose={() => {
//                 Alert.alert('Modal has been closed.');
//                 setModalVisible(!modalVisible);
//               }}>
//               <View style={{height: height * 0.1}}></View>
//               <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                   <View style={{height: height * 0.02}}></View>
//                   <Text style={styles.modalText}>SignIn!</Text>
//                   <Text>Name</Text>
//                   <View style={{height: height * 0.02}}></View>
//                   <View style={styles.input}>
//                     <TextInput
//                       placeholder="enter email"
//                       placeholderTextColor={'black'}
//                     />
//                   </View>
//                   <View style={{height: height * 0.02}}></View>
//                   <Text>Age</Text>
//                   <View style={{height: height * 0.02}}></View>
//                   <View style={styles.input}>
//                     <TextInput
//                       placeholder="enter email"
//                       placeholderTextColor={'black'}
//                     />
//                   </View>
//                   <View style={{height: height * 0.02}}></View>
//                   <Text>Email</Text>
//                   <View style={{height: height * 0.02}}></View>
//                   <View style={styles.input}>
//                     <TextInput
//                       placeholder="enter email"
//                       placeholderTextColor={'black'}
//                     />
//                   </View>
//                   <View style={{height: height * 0.02}}></View>
//                   <Text>Phone</Text>
//                   <View style={{height: height * 0.02}}></View>
//                   <View style={styles.input}>
//                     <TextInput
//                       placeholder="enter email"
//                       placeholderTextColor={'black'}
//                     />
//                   </View>
//                   <View style={{height: height * 0.02}}></View>
//                   <Text>Password</Text>
//                   <View style={{height: height * 0.02}}></View>
//                   <View style={styles.input}>
//                     <TextInput
//                       placeholder="enter email"
//                       placeholderTextColor={'black'}
//                     />
//                   </View>
//                   <View style={{height: height * 0.05}}></View>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'space-between',
//                       alignSelf: 'center',
//                     }}>
//                     <Pressable
//                 style={[styles.button, styles.buttonClose1]}
//                 onPress={() => setModalVisible(true)}>
//                 <Text style={styles.textStyle}>Show Modal</Text>
//               </Pressable>
//                     <View style={{width: width * 0.05}}></View>
//                     <Pressable
//                       style={[styles.button, styles.buttonClose1]}
//                       onPress={() => setModalVisible(!modalVisible)}>
//                       <Text style={styles.textStyle}>Cancel</Text>
//                     </Pressable>
//                   </View>
//                   <View></View>
//                 </View>
//               </View>
//             </Modal>
//             <View>
//               <Pressable
//                 style={[styles.button, styles.buttonOpen]}
//                 onPress={() => setModalVisible(true)}>
//                 <Text style={styles.textStyle}>Show Modal</Text>
//               </Pressable>
//             </View>
//             <View>
//               <Text>dsghsdfsgshvdgsn</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     // justifyContent:'center',
//     alignSelf: 'center',
//   },
//   buttonOpen: {
//     height: height * 0.08,
//     width: width / 2,
//     backgroundColor: 'red',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   textStyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   buttonClose1: {
//     height: height * 0.06,
//     width: width / 3,
//     backgroundColor: 'red',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   modalView: {
//     backgroundColor: 'green',
//     height: height * 0.8,
//     width: width / 1.1,
//     borderRadius: 10,
//   },
//   modalText: {
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderRadius: 10,
//     height: height * 0.07,
//     width: width / 1.1,
//     borderWidth: 3,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//     borderColor: 'white',
//   },
// });

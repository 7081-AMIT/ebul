import {
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    View,onPress, ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  //import {Dropdown} from 'react-native-material-dropdown';
  
  const {height, width} = Dimensions.get('window');
  
  
  const Login = ({navigation}) => {


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
      // alert('Sussessful')
      navigation.navigate('Bank');
    } else {
      alert('Something went wrong');
    }
  };


   
    
  
    return (

      <SafeAreaView>

<ScrollView>
        <ImageBackground style={styles.backgr} source={require('../Screen/Image/backg.jpeg')}>
        <View style={styles.poly}>
        <Text style={styles.polytxt}>PolyHouse</Text>
        </View> 
        
        <View style={styles.maincontainer}>
       
    <View style={{
        
        //backgroundColor:'yellow',
        height:height*0.13,marginTop:90}}>
    <View style={styles.mobile}>
    <Text style={{fontSize:20,color:'blue'}}>Mobile</Text>
    <View style={styles.mobileflex}>
    <View style={styles.mobileinput}>
    <Image source={require('../Screen/Image/ind.jpeg')} style={styles.img}/>

    </View>
    <View style={styles.mobileinput1}>
    <TextInput placeholder='Enter Mobile Number' placeholderTextColor={'white'}
    
    keyboardType="phone-pad"
    onChangeText={text => {
      setPhone(text), phoneValidate(text);
    }}
    maxLength={30} style={{color:'cyan'}}
    />
    </View>
    </View>
    
    </View>

    {errorPhone !== null ? (
        <View
          style={{
            height:height*0.06,
            width:width*0.9,
            alignSelf:'center',
            //backgroundColor: 'green',
          }}>
          <Text style={{color: 'red', fontSize: 16,marginTop:5}}>{errorPhone}</Text>
        </View>
      ) : null}
    </View>
    <View style={{
        
        //backgroundColor:'yellow',
        height:height*0.13}}>
    <View style={{marginTop:0}}>
    <View style={styles.mobile}>
    <Text  style={{fontSize:20,color:'blue'}}>Password</Text>
    <View style={styles.mobileflex}>
    <View style={styles.mobileinput2}>
    <Image source={require('../Screen/Image/lock1.jpeg')} style={styles.img1}/>

    </View>
    <View style={styles.mobileinput3}>
    <TextInput placeholder='Enter your password' placeholderTextColor={'white'}
    keyboardType={"default"}
    
    maxLength={18}

      secureTextEntry={isSecureEntry}
      onChangeText={text => {
        setPassword(text), passwordValidate(text);
      }}
      style={{color:'cyan'}}
    />
    </View>
   
    <View style={styles.mobileinput2}>
    <TouchableOpacity onPress={() => {
        setIsSecureEntry((prev) => !prev)
      }}>
    <Image source={require('../Screen/Image/eye1.jpeg')} style={styles.img1}/>
    </TouchableOpacity>

    </View>
  

    </View>
    
    </View>

    {errorPassword !== null ? (
        <View
          style={{
            height:height*0.06,
            width:width*0.9,
            alignSelf:'center',
           // backgroundColor: 'green',
          }}>
          <Text style={{color: 'red', fontSize: 16,marginTop:5}}>{errorPassword}</Text>
        </View>
      ) : null}
    </View>
</View>
<View style={styles.forget}>
<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
<Text style={styles.forgettxt}>Forget Password?</Text>
</TouchableOpacity>
</View>

  
     
        <TouchableOpacity  onPress={() => onSubmit ()}>
    <View style={styles.btn}>
    <Text style={styles.btntxt}>Login</Text>
    
    </View>
    </TouchableOpacity>
  

        
       
        </View>
        
        
        </ImageBackground>
        </ScrollView>
        </SafeAreaView>

    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height *0.6,
      width: width * 1,
    //  backgroundColor:'green',
      marginTop:90
    
    },
   
    txt:{
      color:'#EAB73B',
      textAlign:'center',
      fontSize:40,
      fontWeight:'bold',
    

    
    },
    poly:{
       // backgroundColor:'red',
        height:height*0.05,
        width:width*0.9,
        alignSelf:'center',
        marginTop:30
    },
    polytxt:{
        color:'grey',
        fontSize:25,
        fontWeight:'bold'
    },
    backgr:{
      height:height*1,
      width:width*1,
    },
    wel:{
      height:height*0.2,
      width:width*0.9,
      alignSelf:'center',
      justifyContent:'center',
      marginTop:30,
    },
    weltxt:{
      color:'red',
      fontSize:20,
      fontWeight:'bold',
      
    },
    btn:{
      backgroundColor:'grey',
      height:height*0.05,
      width:width*0.9,
      alignSelf:'center',
      marginTop:20,
      borderRadius:10,
      justifyContent:'center'
    },
    btntxt:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center'
    },
    mobile:{
       // backgroundColor:'red',
        height:height*0.1,
        width:width*0.9,
        alignSelf:'center',
       


    },
    mobileflex:{
        backgroundColor:'#1E1E1E',
        height:height*0.06,
        width:width*0.9,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row',
        borderRadius:10
        

    },
    mobileinput:{
        backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.19,
        alignSelf:'center',
        marginLeft:5,

      

    },
    mobileinput1:{
        backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.65,
        alignSelf:'center',
        marginLeft:5,
        justifyContent:'center'

      

    },
    img:{
        height:height*0.05,
        width:width*0.19
    },
    mobileinput2:{
        backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.12,
        alignSelf:'center',
        marginLeft:5,
        justifyContent:'center'

      

    },
    img1:{
        height:height*0.025,
        width:width*0.1,
        alignSelf:'center',
        justifyContent:'center'
    },
    mobileinput3:{
        backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.6,
        alignSelf:'center',
        marginLeft:5,
        justifyContent:'center'

      

    },
    forget:{
       // backgroundColor:'red',
        height:height*0.05,
        width:width*0.9,
        alignSelf:'center',
        justifyContent:'center'
     
    },
    forgettxt:{
       color:'black',
       
       fontSize:20,
       alignSelf:'flex-end',
       fontWeight:'bold'
     
    }
   
  });
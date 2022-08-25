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
  
  
  const Registration = ({navigation}) => {


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
        <Text style={styles.polytxt}>PollyHouse</Text>
        </View>
        
        <View style={styles.maincontainer}>
        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>Full Name</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>

        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>Mobile Number</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>
        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>Address</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>

        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>State</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>
        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>Password</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>
        <View style={styles.full}>
        <Text  style={{color:'red',fontSize:20,}}>Confirm Password</Text>
        <View style={styles.input}>
        <TextInput placeholder='enter full name' placeholderTextColor={'black'} 
        style={{color:'blue',margin:10}}
        
        
        
        />
        </View>
        
        </View>
       
        </View>
        
        </ImageBackground>
        </ScrollView>
        </SafeAreaView>

    );
  };
  
  export default Registration;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height *0.75,
      width: width * 0.9,
     backgroundColor:'green',
      marginTop:10,
      alignSelf:'center'
    
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
    full:{
      //  backgroundColor:'red',
        height:height*0.12,
        width:width*0.9
    },
    input:{
       // backgroundColor:'blue',
        height:height*0.06,
        width:width*0.9,
        borderRadius:10,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'grey',
        marginTop:8
    
        
    }
   
    
    
   
  });
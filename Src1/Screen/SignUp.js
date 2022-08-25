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
  
  
  const SignUp = ({navigation}) => {


  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');


  const emailValidate = name => {
    var Regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('Enter  Email');
    } else if (!Regex.test(email)) {
      setErrorEmail('please enter email');
    } else {
      setErrorEmail(null);
    }
  };

  


  const nameValidate = name => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('Enter  name ');
    } else if (!Regex.test(name)) {
      setErrorName('please enter name');
    } else {
      setErrorName(null);
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
    var Rgx = /^[a-zA-Z ]{2,40}$/;
    var Rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var Rgex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const flag = true;
    if (email === '') {
        setErrorEmail('*please enter email');
        return !flag;
      }
      if (email === '' || email === undefined || email === null) {
        setErrorEmail('*Please enter email');
        return !flag;
      }
      if (!Rgx.test(email)) {
        setErrorEmail('*Please enter email');
        return !flag;
      } else setErrorEmail(null);






    
    if (name === '') {
      setErrorName('*please enter name');
      return !flag;
    }
    if (name === '' || name === undefined || name === null) {
      setErrorName('*Please enter name');
      return !flag;
    }
    if (!Rgx.test(name)) {
      setErrorName('*Please enter name');
      return !flag;
    } else setErrorName(null);
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
        
       // backgroundColor:'yellow',
        height:height*0.07,marginTop:100 ,}}>
   
    <View style={styles.mobileflex}>
    <View style={styles.mobileinput}>
    <Image source={require('../Screen/Image/men.jpeg')} style={styles.img}/>

    </View>
    <View style={styles.mobileinput1}>
    <TextInput placeholder='Name' placeholderTextColor={'black'}
    
    keyboardType="phone-pad"
    onChangeText={text => {
      setName(text), nameValidate(text);
    }}
    maxLength={30} style={{color:'blue' ,borderBottomWidth:2,borderColor:'grey', fontSize:20}}
    />
    </View>
    </View>
    
   

    {errorName !== null ? (
        <View
          style={{
            height:height*0.06,
            width:width*0.9,
            alignSelf:'center',
            //backgroundColor: 'green',
          }}>
          <Text style={{color: 'red', fontSize: 16,marginTop:5}}>{errorName}</Text>
        </View>
      ) : null}
    </View>
       
    <View style={{
        
        // backgroundColor:'yellow',
         height:height*0.07,marginTop:10 ,}}>
    
     <View style={styles.mobileflex}>
     <View style={styles.mobileinput}>
     <Image source={require('../Screen/Image/sms1.jpeg')} style={styles.img1}/>
 
     </View>
     <View style={styles.mobileinput1}>
     <TextInput placeholder='Email' placeholderTextColor={'black'}
     
     keyboardType="phone-pad"
     onChangeText={text => {
       setEmail(text), emailValidate(text);
     }}
     maxLength={30} style={{color:'blue' ,borderBottomWidth:2,borderColor:'grey', fontSize:20}}
     />
     </View>
     </View>
     
    
 
     {errorEmail !== null ? (
         <View
           style={{
             height:height*0.06,
             width:width*0.9,
             alignSelf:'center',
             //backgroundColor: 'green',
           }}>
           <Text style={{color: 'red', fontSize: 16,marginTop:5}}>{errorEmail}</Text>
         </View>
       ) : null}
     </View>
    
    <View style={{
        
      // backgroundColor:'yellow',
        height:height*0.056,marginTop:10}}>
    <View style={{marginTop:0}}>
   
    <View style={styles.mobileflex}>
    <View style={styles.mobileinput2}>
    <Image source={require('../Screen/Image/lock1.jpeg')} style={styles.img1}/>

    </View>
    <View style={styles.mobileinput3}>
    <TextInput placeholder='Password' placeholderTextColor={'black'}
    keyboardType={"default"}
    
    maxLength={18}

      secureTextEntry={isSecureEntry}
      onChangeText={text => {
        setPassword(text), passwordValidate(text);
      }}
      style={{color:'blue',fontSize:20,borderBottomColor:'grey',borderBottomWidth:2}}
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
<TouchableOpacity onPress={() => navigation.navigate('Registration')}>
<Text style={styles.forgettxt}>Forget Password?</Text>
</TouchableOpacity>
</View>

  
     
        <TouchableOpacity  onPress={() => onSubmit ()}>
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
  
  export default SignUp;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height *0.6,
      width: width * 1,
    //  backgroundColor:'green',
      marginTop:150
    
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
      // backgroundColor:'#1E1E1E',
        height:height*0.06,
        width:width*0.9,
        alignSelf:'center',
       
        flexDirection:'row',
      
       
        

    },
    mobileinput:{
        //backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.1,
        alignSelf:'center',
        marginLeft:5,
        

      

    },
    mobileinput1:{
       // backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.65,
        alignSelf:'center',
        marginLeft:5,
        justifyContent:'center',
       

      

    },
    img:{
        height:height*0.03,
        width:width*0.07,
        borderRadius:100,
        marginTop:10
    },
    mobileinput2:{
       // backgroundColor:'#1E1E1E',
        height:height*0.05,
        width:width*0.12,
        alignSelf:'center',
        marginLeft:5,
        justifyContent:'center'

      

    },
    img1:{
        height:height*0.03,
        width:width*0.07,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:100,
        marginTop:10
    },
    mobileinput3:{
       // backgroundColor:'#1E1E1E',
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
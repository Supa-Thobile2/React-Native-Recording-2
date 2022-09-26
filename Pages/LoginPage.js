import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-web';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



const LoginPage = () => {
 const [email, setEmail]= useState("");
 const [password,setPassword]=useState("")



 
 const navigation = useNavigation();



 const handleSignIn=()=>{
    signInWithEmailAndPassword(auth,email,password).then(userCredentials=>{
        const user= userCredentials.user;
        navigation.navigate("HomePage")
        console.log(user.email);
    }).catch(error=> alert(error.message))
 }

    

  return (
    <KeyboardAvoidingView
        style ={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text =>setEmail(text)}
                style={styles.input}
            />

            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={text=> setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginPage
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    inputContainer:{
        width:'80%'
    },
 
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,

    },

    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'

    },
    
    button:{
        backgroundColor:'blue',
        width:'100%',
        padding:15,
        borderRadius:10,

    },
    buttonText:{


    },

    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'blue',
        borderWidth:2,

    },
    buttonOutlineText:{

    },

    
})
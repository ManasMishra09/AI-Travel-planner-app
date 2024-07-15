import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
        {/* I am fetching the image from the Local */}
      <Image source={require('./../assets/images/LoginImage.png')}
      style={{
        width:'100%',
        height:400
      }}
      /> 
      <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }}>AI Travel Planner</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:20
        }}>Discover your next adventure effortlessely.Personalized itineraries at your fingertips.Travel smarter with AI-driven insights.</Text>

        <View style={styles.button}>
            <Text style={{color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17
            }}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25,
        height:'100%'
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
    }
})
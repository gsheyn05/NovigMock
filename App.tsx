import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import * as Font from 'expo-font';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, []);
  

  
  return (
    <View style={{flex:1}}>
      <ImageBackground resizeMode="cover" style={styles.imgBackground} source={{ uri: "https://uploads-ssl.webflow.com/6316d9ee5b53609ebbb52e59/63170509ca11584e5451368e_Image.webp" }}>
      <Animated.View style={{
            opacity: fadeAnim,
            
            
          }}>
        <SafeAreaView>
       
          <SvgUri style={styles.imgLogo}   uri="https://uploads-ssl.webflow.com/6316d9ee5b53609ebbb52e59/6316f8998521b2615fdbcdd7_Full%20Logo.svg"/>

          <Text style={styles.mainText}>THE FUTURE OF SPORTS BETTING</Text>
          


          
      </SafeAreaView>
        </Animated.View>
        <TouchableOpacity style={styles.bottom}>
              <Text style={{ color: "black",textAlign:"center" }}>Join The Revolution</Text>
            </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
//backgroundColor:"white",marginTop:650,alignSelf:"center",padding:10,borderRadius:"10"
/*
justifyContent: 'center', 
            alignItems: 'center',
            marginTop: '150%',
            backgroundColor: "white",
            width: "40%"
            , padding: 10,
            alignSelf: "center",
  borderRadius: 20
            */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  imgLogo: {
    width: windowWidth * .6,
    height: windowHeight * .7,
    alignSelf: "center",
    marginTop:40
  },
  mainText: {
    
    textAlign: "center",
    marginTop: 20,
    color: "white",
    fontSize: 20,
    
  },
  bottom: {
    
    justifyContent: 'flex-end',
    position: "absolute",
    bottom:30,
    backgroundColor: "#F5F5F5",
    width: 200,
    height:40,
    alignSelf: "center",
    padding: 10,
    borderRadius:20
  }
});

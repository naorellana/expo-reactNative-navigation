import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
 } from 'react-native';



function HeaderCategories (props){
        return (
            <View style={styles.container}>
                    <Text style={styles.text}>Categorias</Text>
                <View style={styles.iconContainer}>
                    <Image
                    source={require('../../img/headerlogo.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.textPoints}>100 pts</Text>
                </View>
            </View>
        )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:25,
        // paddingVertical:10,
        paddingTop:15,
        paddingBottom:8,
        elevation:2,
        backgroundColor: '#FFFFFF'
    },
    iconContainer:{
        flexDirection: 'row',
    },
    logo:{
        width:41,
        height:35,
        resizeMode: 'contain',
    },
    text:{
        fontSize:21,
        color: '#EC4C17',
        paddingVertical:5
    },
    textPoints:{
        fontSize:20,
        color: '#EC4C17',
        fontWeight: "bold",
        paddingVertical:5
    },
    
})

export default HeaderCategories;
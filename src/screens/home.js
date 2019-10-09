import React, {Component} from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
  } from 'native-base';


import{
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';


class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Footer>
        <FooterTab>
          <Button vertical>
          <Icon type="FontAwesome" name="gift" />
            <Text>Regalos</Text>
          </Button>
          <Button vertical>
            <Icon name="cart" />
            <Text>Carrito</Text>
          </Button>
          <Button vertical active>
          <Icon type="MaterialCommunityIcons" name="sticker" />
            <Text>Stickers</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Perfil</Text>
          </Button>
        </FooterTab>
      </Footer>
                <Text>Home</Text>
                <Button />
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;
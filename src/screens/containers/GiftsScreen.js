import React, { Component } from 'react';
// import { Image } from 'react-native';
// import {Col, Row, Grid} from 'react-native-easy-grid';

import GiftsList from './GiftsList';

import {
    Container,
    Content,
    // Card,
    // CardItem,
    // Text,
    // Left,
    // Body,
  } from 'native-base';


class GiftsScreen extends Component{
    render(){
        return (
         <Container>
             <Content padder>
                <GiftsList />
             </Content>
         </Container>
        )
    }
}

export default GiftsScreen;
import React, {Component} from 'react';

import {Image} from 'react-native';

import { withNavigation } from 'react-navigation';

import {Col, Row, Grid} from 'react-native-easy-grid';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class CategoriesTrend extends Component {
  render() {
    return (
      // <Container>
      //   <Content padder>
      <Grid>
        <Row>
          <Col>
            <Card>
              <CardItem header bordered>
                <Left>
                  <Body>
                    <Text>Categoria Destacada</Text>
                    <Text note>NaviPack</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody
              button
              onPress={() => 
              this.props.navigation.navigate('GiftListRoute')}
              >
                <Image
                  source={{
                    uri:
                      'https://diy.sndimg.com/content/dam/images/diy/fullset/2014/10/8/0/CI-Molly-Winters_Holiday-Gift-Wrap-teal-ribbon-red-tag_h.jpg.rend.hgtvcom.966.725.suffix/1420871866846.jpeg',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
            </Card>
          </Col>
        </Row>
      </Grid>
      //   </Content>
      // </Container>
    );
  }
}

export default withNavigation(CategoriesTrend);

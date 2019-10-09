import React, {Component} from 'react';

import { withNavigation } from 'react-navigation';

import {Image} from 'react-native';
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

class Categories extends Component {
  render() {
    return (
      // <Container>
      //     <Content padder>
      <Grid>
        <Row>
          <Col>
            <Card>
              <CardItem cardBody
              button
              onPress={() => 
             this.props.navigation.navigate('GiftListRoute')}
              >
                <Image
                  source={{
                    uri:
                      'http://www.mediafire.com/imgbnc.php/d9d46ffffe30cae4b81d6929747281efcfbabb16fe32f357ed55ef759e2bc40c6g.jpg',
                  }}
                  style={{height: 180, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem footer bordered>
                <Left>
                  <Body>
                    <Text>HardCore</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://vcache.arnoldclark.com/imageserver/ANRSNEB6N1-WUS1/800/f',
                  }}
                  style={{height: 180, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem footer bordered>
                <Left>
                  <Body>
                    <Text>Amateur</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://diy.sndimg.com/content/dam/images/diy/fullset/2014/10/8/0/CI-Molly-Winters_Holiday-Gift-Wrap-teal-ribbon-red-tag_h.jpg.rend.hgtvcom.966.725.suffix/1420871866846.jpeg',
                  }}
                  style={{height: 180, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem footer bordered>
                <Left>
                  <Body>
                    <Text>StepMom</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://diy.sndimg.com/content/dam/images/diy/fullset/2014/10/8/0/CI-Molly-Winters_Holiday-Gift-Wrap-teal-ribbon-red-tag_h.jpg.rend.hgtvcom.966.725.suffix/1420871866846.jpeg',
                  }}
                  style={{height: 180, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem footer bordered>
                <Left>
                  <Body>
                    <Text>Teens</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Col>
        </Row>
      </Grid>
      //     </Content>
      // </Container>
    );
  }
}

export default withNavigation(Categories);

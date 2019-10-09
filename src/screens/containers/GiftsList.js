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
  ActionSheet,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

var BUTTONS = [
  { text: "Aceptar", icon: "american-football", iconColor: "#25de5b" },
  { text: "Cancel", icon: "close", iconColor: "#fa213b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class GiftsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
             this.props.navigation.navigate('GiftRoute')}
              >
                <Image
                  source={{
                    uri:
                      'https://www.creativefabrica.com/wp-content/uploads/2018/12/Gifts-icon-by-back1design1-1-580x385.png',
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
                <Right>
                  <Body>
                  <Button small primary 
                   onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        title: '¿Quieres Canjear este premio?'
                      },
                      buttonIndex => {
                        this.setState({ clicked: BUTTONS[buttonIndex] });
                      }
                    )}
                  ><Icon name='cog' /></Button>
                  </Body>
                </Right>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://cdn3.iconfinder.com/data/icons/xmas-flat-set-version-three/512/Gift_Box-512.png',
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
                <Right>
                  <Body>
                  <Button small primary ><Icon name='cog' /></Button>
                  </Body>
                </Right>
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
                      'https://cdn3.iconfinder.com/data/icons/xmas-flat-set-version-three/512/Gift_Box-512.png',
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
                <Right>
                  <Body>
                  <Button small primary ><Icon name='cog' /></Button>
                  </Body>
                </Right>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://www.creativefabrica.com/wp-content/uploads/2018/12/Gifts-icon-by-back1design1-1-580x385.png',
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
                <Right>
                  <Body>
                  <Button small primary ><Icon name='cog' /></Button>
                  </Body>
                </Right>
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

export default withNavigation(GiftsList);

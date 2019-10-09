import React, {Component} from 'react';
import {Image} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {
  Container,
  Content,
  Thumbnail,
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';

import { withNavigation } from 'react-navigation';

class Login extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#EF5F2F'}}>
        <Content>
          <Card transparent>
            <CardItem style={{backgroundColor: '#EF5F2F'}}>
              <Grid style={{marginTop: 60}}>
                <Col style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../img/canjeaton-sombra.png')}
                    style={{width: 190, height: 150}}
                  />
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={{backgroundColor: '#EF5F2F'}}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                    Bienvenido
                  </Text>
                </Col>
              </Grid>
            </CardItem>
          </Card>
          <Form style={{marginRight: 45, marginLeft: 45, marginTop: 20}}>
            <Item rounded>
              <Icon
                type="FontAwesome"
                name="user-o"
                style={{color: 'white', fontSize: 25}}
              />
              <Input placeholder="Correo" placeholderTextColor='#FFFFFF' style={{ color: 'white' }}/>
            </Item>
            <Item rounded style={{marginTop: 25}}>
              <Icon
                type="MaterialCommunityIcons"
                name="lock-open-outline"
                style={{color: 'white', fontSize: 25}}
              />
              <Input placeholder="Contraseña" placeholderTextColor='#FFFFFF' style={{ color: 'white' }}/>
            </Item>
          </Form>
          <Card transparent>
            <CardItem style={{backgroundColor: '#EF5F2F', marginTop: 20}}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Button
                    style={{
                      backgroundColor: '#1B2853',
                      borderBottomLeftRadius: 20,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    onPress={() => this.props.navigation.navigate('CategoriesRoute')}
                    >
                    <Text style={{fontWeight: 'bold'}}>          Ingreso          </Text>
                  </Button>
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={{backgroundColor: '#EF5F2F'}}>
              <Grid>
                <Col style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    o registrate
                  </Text>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default withNavigation(Login);

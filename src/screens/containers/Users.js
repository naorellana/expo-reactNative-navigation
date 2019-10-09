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
} from 'native-base';
import Layout from '../../sections/components/FooterTabsIconText';

class Users extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem style={{backgroundColor: '#EF5F2F'}}>
              <Grid style={{marginTop: 5}}>
                <Col style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 20, color: 'white'}}>PERFIL</Text>
                </Col>
                <Col style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 20, color: 'white'}}>
                    <Image
                      source={require('../../img/canjeaton_F.png')}
                      style={{width: 25, height: 25}}
                    />
                    1100 pts
                  </Text>
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={{backgroundColor: '#EF5F2F'}}>
              <Grid style={{marginBottom: 5}}>
                <Col style={{alignItems: 'center'}}>
                  <Thumbnail
                    large
                    source={{
                      uri:
                        'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-600w-519039097.jpg',
                    }}
                    style={{backgroundColor: '#FFFFFF'}}
                  />
                </Col>
                <Col>
                  <Text
                    style={{fontSize: 25, color: 'white', marginBottom: 15}}>
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={{color: 'white', fontSize: 25}}
                    />{' '}
                    Hola Pablo!
                  </Text>
                  <Text style={{color: 'white', marginBottom: 2}} note>
                    <Icon
                      type="FontAwesome"
                      name="envelope"
                      style={{color: 'white', fontSize: 18}}
                    />{' '}
                    pispache@10x.org
                  </Text>
                  <Text style={{color: 'white'}} note>
                    <Icon
                      type="FontAwesome"
                      name="phone"
                      style={{color: 'white', fontSize: 20}}
                    />{' '}
                    50505050
                  </Text>
                </Col>
              </Grid>
            </CardItem>
          </Card>

          <Card transparent>
            <CardItem>
              <Text style={{fontSize: 22, color: '#1B2853'}}>Balance</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Col
                  style={{
                    backgroundColor: '#F8FAFB',
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                    borderWidth: 0.5,
                    borderColor: '#E6E7E8',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginTop: 10,
                      color: '#EF5F2F',
                    }}>
                    2000
                  </Text>
                  <Text note style={{textAlign: 'center', marginBottom: 10}}>
                    Puntos Ganados
                  </Text>
                </Col>
                <Col
                  style={{
                    backgroundColor: '#F8FAFB',
                    borderBottomRightRadius: 7,
                    borderTopRightRadius: 7,
                    borderWidth: 0.5,
                    borderColor: '#E6E7E8',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginTop: 10,
                      color: '#EF5F2F',
                    }}>
                    900
                  </Text>
                  <Text note style={{textAlign: 'center', marginBottom: 10}}>
                    Puntos Canjeados
                  </Text>
                </Col>
              </Grid>
            </CardItem>

            <CardItem style={{marginTop: 10}}>
              <Grid
                style={{
                  backgroundColor: '#F8FAFB',
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Col
                  size={1}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="map-marker"
                    style={{marginLeft: 15, color: '#EF5F2F'}}
                  />
                </Col>
                <Col size={3} style={{marginTop: 16, marginBottom: 8}}>
                  <Text>Libreta de direcciones</Text>
                </Col>
                <Col style={{marginTop: 10, marginBottom: 10}}>
                  <Button
                    transparent
                    vertical
                    onPress={() => this.props.navigation.navigate('HomeRoute')}>
                    <Icon
                      type="FontAwesome5"
                      name="arrow-circle-right"
                      style={{color: '#EF5F2F'}}
                    />
                  </Button>
                </Col>
              </Grid>
            </CardItem>

            <CardItem>
              <Grid
                style={{
                  backgroundColor: '#F8FAFB',
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Col
                  size={1}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                  }}>
                  <Icon
                    type="Entypo"
                    name="back-in-time"
                    style={{marginLeft: 15, color: '#EF5F2F'}}
                  />
                </Col>
                <Col size={3} style={{marginTop: 16, marginBottom: 8}}>
                  <Text>Historial de premios</Text>
                </Col>
                <Col style={{marginTop: 10, marginBottom: 10}}>
                  <Button
                    transparent
                    vertical
                    onPress={() => this.props.navigation.navigate('HomeRoute')}>
                    <Icon
                      type="FontAwesome5"
                      name="arrow-circle-right"
                      style={{color: '#EF5F2F'}}
                    />
                  </Button>
                </Col>
              </Grid>
            </CardItem>

            <CardItem>
              <Grid
                style={{
                  backgroundColor: '#F8FAFB',
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                }}>
                <Col
                  size={1}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="cog"
                    style={{marginLeft: 15, color: '#EF5F2F'}}
                  />
                </Col>
                <Col size={3} style={{marginTop: 16, marginBottom: 8}}>
                  <Text>Ajustes</Text>
                </Col>
                <Col style={{marginTop: 10, marginBottom: 10}}>
                  <Button
                    transparent
                    vertical
                    onPress={() => this.props.navigation.navigate('HomeRoute')}>
                    <Icon
                      type="FontAwesome5"
                      name="arrow-circle-right"
                      style={{color: '#EF5F2F'}}
                    />
                  </Button>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
        <Layout />
      </Container>
    );
  }
}
export default Users;
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, Dimensions } from 'react-native';
import { Left, Button, Form, Item, Input, Thumbnail, Text, Icon, Card, CardItem, Body, Right } from 'native-base';
export default class CardSticker extends Component {
	render() {
		var screenWidth = Dimensions.get('window').width - 200;
		var hg = Dimensions.get('window').width - 200;
		var inputWidth = Dimensions.get('window').width / 8;
		return (
			<Card>
				<Card style={{ marginTop: 0, marginLeft: 0, marginRight: 0 }}>
					<CardItem style={{ backgroundColor: '#00B9D3' }}>
						<Image source={require('../../img/canjeaton_F.png')} style={{ width: 35, height: 35 }} />
						<Col size={4}>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 18,
									fontWeight: 'bold',
									color: '#fff'
								}}
							>
								HAS CANJEADO 100 PUNTOS
							</Text>
						</Col>
					</CardItem>
				</Card>
				<CardItem cardBody>
					<Grid style={{ marginTop: 5 }}>
						<Col size={4} style={{ alignItems: 'center' }}>
							<Image
								style={{ height: hg, width: screenWidth }}
								source={require('../../img/canjeaton-sombra.png')}
							/>
						</Col>
					</Grid>
				</CardItem>
				<Card style={{ marginTop: -25, marginLeft: 80, marginRight: 80 }}>
					<CardItem style={{ backgroundColor: '#EF5F2F' }}>
						<Col size={4}>
							<Text
								style={{
									textAlign: 'center',
									fontSize: 24,
									fontWeight: 'bold',
									color: '#fff'
								}}
							>
								1100
							</Text>
							<Text note style={{ textAlign: 'center', color: '#FFFF' }}>
								Puntos actuales
							</Text>
						</Col>
					</CardItem>
				</Card>
				<CardItem>
					<Form style={{ flexDirection: 'row' }}>
						<Grid>
							<Col size={1}>
								<Item>
									<Input
										placeholder="0000"
										style={{
											textAlign: 'center',
											fontSize: 14,
											fontWeight: 'bold',
											color: '#1B2853',
											borderColor: '#1B2853',
											borderWidth: 2,
											borderRadius: 5
										}}
										inputBorderColor="1B2853"
									/>
								</Item>
							</Col>
							<Col size={1}>
								<Item>
									<Input
										placeholder="0000"
										style={{
											textAlign: 'center',
											fontSize: 14,
											fontWeight: 'bold',
											color: '#1B2853',
											borderColor: '#1B2853',
											borderWidth: 2,
											borderRadius: 5
										}}
										inputBorderColor="1B2853"
									/>
								</Item>
							</Col>
							<Col size={1}>
								<Item>
									<Input
										placeholder="0000"
										style={{
											textAlign: 'center',
											fontSize: 14,
											fontWeight: 'bold',
											color: '#1B2853',
											borderColor: '#1B2853',
											borderWidth: 2,
											borderRadius: 5
										}}
										inputBorderColor="1B2853"
									/>
								</Item>
							</Col>
							<Col size={1}>
								<Item>
									<Input
										placeholder="0000"
										style={{
											textAlign: 'center',
											fontSize: 14,
											fontWeight: 'bold',
											color: '#1B2853',
											borderColor: '#1B2853',
											borderWidth: 2,
											borderRadius: 5
										}}
										inputBorderColor="1B2853"
									/>
								</Item>
							</Col>
						</Grid>
					</Form>
				</CardItem>
				<CardItem>
					<Col style={{ alignItems: 'center' }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 14,
								fontWeight: 'bold',
								color: '#1B2853'
							}}
						>
							Escanear código de barras
						</Text>
						<Button transparent Primary>
							<Icon
								type="MaterialCommunityIcons"
								name="qrcode-scan"
								style={{
									textAlign: 'center',
									fontSize: 40,
									marginTop: 10
								}}
							/>
						</Button>
					</Col>
				</CardItem>
				<CardItem>
					<Col style={{ alignItems: 'center' }}>
						<Button
							onPress={this.props.onClick}
							rounded
							style={{
								backgroundColor: '#EF5F2F',
								fontSize: 44
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									color: '#ffffff',
									fontSize: 20,
									marginRight: 35,
									marginLeft: 35
								}}
							>
								CANJEAR
							</Text>
						</Button>
					</Col>
				</CardItem>
			</Card>
		);
	}
}

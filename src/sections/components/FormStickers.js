import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, Dimensions } from 'react-native';
import { Left, Button, Form, Item, Input, Thumbnail, Text, Icon, Card, CardItem, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import * as userAccionts from '../../actions/usersActions';

class StickerForm extends Component {
	state = {
		codeP1: '',
		codeP2: '',
		codeP3: '',
		codeP4: '',
		code: ''
	};

	componentDidMount() {
		//this.props.traerTodos('b3');
	}

	consultarSticker = async () => {
		let cupon = this.state.codeP1 + this.state.codeP2 + this.state.codeP3 + this.state.codeP4;
		this.props.traerTodos(cupon);
		try {
			let dataForm = '_method=' + encodeURIComponent('POST');
			dataForm += '&code=' + encodeURIComponent(cupon);

			const response = await fetch(`http://192.168.1.130:8000/api/stickers`, {
				//importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
				//credentials: 'include', //pass cookies, for authentication
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
					Authorization:
						'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NDVlZDI5ZDg1NWJmNDQwNjM4NDAxNjhiOGUyNDJlYmFkZDIzNzYyMzg2MWRkNjRiNTZjZGE5YWQxNDM0OTFlZjFiY2FhYmVkOTM1NDlkIn0.eyJhdWQiOiIyIiwianRpIjoiOTg0NWVkMjlkODU1YmY0NDA2Mzg0MDE2OGI4ZTI0MmViYWRkMjM3NjIzODYxZGQ2NGI1NmNkYTlhZDE0MzQ5MWVmMWJjYWFiZWQ5MzU0OWQiLCJpYXQiOjE1NzA1NjQ2NjgsIm5iZiI6MTU3MDU2NDY2OCwiZXhwIjoxNjAyMTg3MDY4LCJzdWIiOiI1NyIsInNjb3BlcyI6WyIqIl19.kiHUJozhg-KZpdzr2pXDeYAUVHLenr__gi1u9gWH6use9V56iPold1Md7ea6GGo1hiUU0qkAVR6U8RQlO5ssEC0JmP0R0yREuKvDkcCO5YaMhrgst1USiZcCwDdeoAR7XptUiVHdCXbrnfstsAXtJYkBte9aZrrL4sIYiDV5rzCQRgwFLq3y_YPRlEqGCINhAdDhjiYVb7xQlFEFKvinCV0fhnOL--GgDbNAOOhzRkpaEGBwgm_jy5piJ3NyRaEk-xc49SWBWNly4Jui60pJrzAjoj_1aPZowSZL_YJsgFNFXgRZKsZpqjPmw_F41jcqyu8bzdTC1twIEqtU2A1rTY3K3-lPrmevXk1Pc_KhcN0i7X5nNtIOlSVKfagOt5tOHg3w1Vt6bLPXGYnySBXT-djpeHaGGo0Wh5vdyfiN-n3ZIPYALCUo7ql9woVu9ze08mkszzyGEAzsVksm-HFy1FEkP7lFaIYyMzvSyGSRlpcUwSnwXpm41g7cQFYGv8sQ8reByD6bg-HlSFRytLIsnsfb10LSMba30enXAIpI0jEQlrv84X31o82g8Y3Kx967VnxgX5BqCc8XAxjvMqCgRJI2M9o9Dw0U2tvExlHTU--yismSu4BBgkE_nN8cfhzoagAi7D9G-_gmU_IjHhnlLMz-MFIbTokPuF0QYcXwD60'
				},
				body: dataForm
			});
			const data = await response.json();
			//console.log('resp', data)
			this.setState({
				sticker: data.type.points,
				color: data.type.color,
				hexa: data.type.hexa,
				message: data.message
			});
		} catch (error) {
			this.setState({
				message: error.toString()
			});
		}
	};

	canjeandoData = async () => {
		let cupon = this.state.codeP1 + this.state.codeP2 + this.state.codeP3 + this.state.codeP4;
		await this.props.canjearCupon(cupon);
	};

	handleClick = async () => {
		this.setState({
			code: this.state.codeP1 + this.state.codeP2 + this.state.codeP3 + this.state.codeP4
		});
		try {
			let dataForm = '_method=' + encodeURIComponent('POST');
			dataForm += '&code=' + encodeURIComponent(this.state.code);

			const response = await fetch(`http://192.168.1.130:8000/api/stickers`, {
				//importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
				//credentials: 'include', //pass cookies, for authentication
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
					Authorization:
						'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NDVlZDI5ZDg1NWJmNDQwNjM4NDAxNjhiOGUyNDJlYmFkZDIzNzYyMzg2MWRkNjRiNTZjZGE5YWQxNDM0OTFlZjFiY2FhYmVkOTM1NDlkIn0.eyJhdWQiOiIyIiwianRpIjoiOTg0NWVkMjlkODU1YmY0NDA2Mzg0MDE2OGI4ZTI0MmViYWRkMjM3NjIzODYxZGQ2NGI1NmNkYTlhZDE0MzQ5MWVmMWJjYWFiZWQ5MzU0OWQiLCJpYXQiOjE1NzA1NjQ2NjgsIm5iZiI6MTU3MDU2NDY2OCwiZXhwIjoxNjAyMTg3MDY4LCJzdWIiOiI1NyIsInNjb3BlcyI6WyIqIl19.kiHUJozhg-KZpdzr2pXDeYAUVHLenr__gi1u9gWH6use9V56iPold1Md7ea6GGo1hiUU0qkAVR6U8RQlO5ssEC0JmP0R0yREuKvDkcCO5YaMhrgst1USiZcCwDdeoAR7XptUiVHdCXbrnfstsAXtJYkBte9aZrrL4sIYiDV5rzCQRgwFLq3y_YPRlEqGCINhAdDhjiYVb7xQlFEFKvinCV0fhnOL--GgDbNAOOhzRkpaEGBwgm_jy5piJ3NyRaEk-xc49SWBWNly4Jui60pJrzAjoj_1aPZowSZL_YJsgFNFXgRZKsZpqjPmw_F41jcqyu8bzdTC1twIEqtU2A1rTY3K3-lPrmevXk1Pc_KhcN0i7X5nNtIOlSVKfagOt5tOHg3w1Vt6bLPXGYnySBXT-djpeHaGGo0Wh5vdyfiN-n3ZIPYALCUo7ql9woVu9ze08mkszzyGEAzsVksm-HFy1FEkP7lFaIYyMzvSyGSRlpcUwSnwXpm41g7cQFYGv8sQ8reByD6bg-HlSFRytLIsnsfb10LSMba30enXAIpI0jEQlrv84X31o82g8Y3Kx967VnxgX5BqCc8XAxjvMqCgRJI2M9o9Dw0U2tvExlHTU--yismSu4BBgkE_nN8cfhzoagAi7D9G-_gmU_IjHhnlLMz-MFIbTokPuF0QYcXwD60'
				},
				body: dataForm
			});

			const data = await response.json();
			//console.log('resp', data)
			this.setState({
				sticker: data.type.points,
				color: data.type.color,
				hexa: data.type.hexa,
				message: data.message
			});
		} catch (error) {
			this.setState({
				message: error.toString()
			});
		}
	};

	/*canjeaSticker = async () => {
		try {
			let dataForm = '_method=' + encodeURIComponent('PATCH');
			dataForm += '&code=' + encodeURIComponent(this.state.code);

			const response = await fetch(`http://192.168.1.130:8000/api/stickers/1`, {
				//importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
				//credentials: 'include', //pass cookies, for authentication
				method: 'PATCH',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
					Authorization:
						'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NDVlZDI5ZDg1NWJmNDQwNjM4NDAxNjhiOGUyNDJlYmFkZDIzNzYyMzg2MWRkNjRiNTZjZGE5YWQxNDM0OTFlZjFiY2FhYmVkOTM1NDlkIn0.eyJhdWQiOiIyIiwianRpIjoiOTg0NWVkMjlkODU1YmY0NDA2Mzg0MDE2OGI4ZTI0MmViYWRkMjM3NjIzODYxZGQ2NGI1NmNkYTlhZDE0MzQ5MWVmMWJjYWFiZWQ5MzU0OWQiLCJpYXQiOjE1NzA1NjQ2NjgsIm5iZiI6MTU3MDU2NDY2OCwiZXhwIjoxNjAyMTg3MDY4LCJzdWIiOiI1NyIsInNjb3BlcyI6WyIqIl19.kiHUJozhg-KZpdzr2pXDeYAUVHLenr__gi1u9gWH6use9V56iPold1Md7ea6GGo1hiUU0qkAVR6U8RQlO5ssEC0JmP0R0yREuKvDkcCO5YaMhrgst1USiZcCwDdeoAR7XptUiVHdCXbrnfstsAXtJYkBte9aZrrL4sIYiDV5rzCQRgwFLq3y_YPRlEqGCINhAdDhjiYVb7xQlFEFKvinCV0fhnOL--GgDbNAOOhzRkpaEGBwgm_jy5piJ3NyRaEk-xc49SWBWNly4Jui60pJrzAjoj_1aPZowSZL_YJsgFNFXgRZKsZpqjPmw_F41jcqyu8bzdTC1twIEqtU2A1rTY3K3-lPrmevXk1Pc_KhcN0i7X5nNtIOlSVKfagOt5tOHg3w1Vt6bLPXGYnySBXT-djpeHaGGo0Wh5vdyfiN-n3ZIPYALCUo7ql9woVu9ze08mkszzyGEAzsVksm-HFy1FEkP7lFaIYyMzvSyGSRlpcUwSnwXpm41g7cQFYGv8sQ8reByD6bg-HlSFRytLIsnsfb10LSMba30enXAIpI0jEQlrv84X31o82g8Y3Kx967VnxgX5BqCc8XAxjvMqCgRJI2M9o9Dw0U2tvExlHTU--yismSu4BBgkE_nN8cfhzoagAi7D9G-_gmU_IjHhnlLMz-MFIbTokPuF0QYcXwD60'
				},
				body: dataForm
			});

			const data = await response.json();
			this.setState({
				loading: false,
				sticker: data.sticker,
				success: data.success,
				type: data.type,
				message: data.message
			});
			console.log('POST: ', data);
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
			console.log('error: ', error);
		}
	};*/

	render() {
		console.log('props: ', this.props);
		var screenWidth = Dimensions.get('window').width - 200;
		var hg = Dimensions.get('window').width - 200;
		var inputWidth = Dimensions.get('window').width / 8;
		console.log(this.props);
		console.log('cargando: ', this.props.cargando);
		console.log('error: ', this.props.error);
		console.log('all:  ', this.props);
		return (
			<Card>
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
								1000
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
										keyboardType="default"
										maxLength={1}
										onChangeText={codeP1 => this.setState({ codeP1 })}
										value={this.state.codeP1}
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
										onChangeText={codeP2 => this.setState({ codeP2 })}
										value={this.state.codeP2}
										keyboardType="numeric"
										maxLength={1}
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
										onChangeText={codeP3 => this.setState({ codeP3 })}
										value={this.state.codeP3}
										keyboardType="numeric"
										maxLength={1}
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
										onChangeText={codeP4 => this.setState({ codeP4 })}
										value={this.state.codeP4}
										keyboardType="numeric"
										maxLength={1}
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
						<Text style={{ padding: 10, fontSize: 12 }}>
							{this.state.code}
						</Text>
						<Text style={{ padding: 10, fontSize: 12 }}>
							{this.state.message}
						</Text>
						<Text style={{ padding: 10, fontSize: 12 }}>
							{this.state.sticker + this.state.color + this.state.hexa}
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
							onPress={this.canjeandoData}
							rounded
							style={{
								backgroundColor: '#1B2853',
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
					<Col style={{ alignItems: 'center' }}>
						<Button
							onPress={this.consultarSticker}
							rounded
							style={{
								backgroundColor: '#1B2853',
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
								test
							</Text>
						</Button>
					</Col>
				</CardItem>
			</Card>
		);
	}
}

const mapStateToProps = reducers => {
	return reducers.usuariosReducer; /*   DE TODOS LOS REDUCERS MAPEAMOS el reducer de usuarios devolvera los suauiros en los props del componente */
};

export default connect(mapStateToProps, userAccionts)(StickerForm);

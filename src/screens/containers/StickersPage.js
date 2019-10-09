import React, {Component} from 'react';
import FooterTabsIconText from '../../sections/components/FooterTabsIconText';
import StickerForm from '../../sections/components/FormStickers';
import Header from '../../sections/components/header';
import CardSticker from '../../sections/components/CardSticker';
import {Container, Content, Icon, Button, Text, Footer, FooterTab} from 'native-base';
import Layout from '../../sections/components/FooterTabsIconText';
class StickersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      loading: true,
      code:  {
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        id: '',
      },
      error: null,
      data: null,
      sticker: null,
      success: null,
      type: {
        color: '',
        cost: 0,
        created_at: '',
        hexa: '',
        id: 0,
        points: null,
        price: 0,
        rgb: '',
        updated_at: '',
      },
      message: null,
    };;
  }

  componentDidMount() {
    //this.fetchData();
    this.setState({
      loading: true,
      error: null,
    });
  }

  handleClick = e => {
    this.setState({
      loading: false,
      error: null,
    });
  };

  handleChange = e => {
		this.setState({
			form: {
				...this.state.form, //trae todos los valores o atributos del objeto
				[e.target.name]: e.target.value
			}
		});
	};

  fetchData = async () => {
    //no se sabe cuanto va atardar en trar los datos
    this.setState({
      loading: true,
      error: null,
    });

    try {
      //const response = await fetch('http://192.168.1.126:8080/api/user', {
      const response = await fetch('http://192.168.1.126:8080/api/test1', {
        //importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmMTA0ZmZiN2VmODdjODY3YWE0MDI0NTgyOTJhZDFlOGFjNmIzMDcwYWM4N2Q0MzJlODM5OGRiM2ZkODBkYmJhOTU4OWVmMGU3OTljMmM2In0.eyJhdWQiOiIyIiwianRpIjoiNWYxMDRmZmI3ZWY4N2M4NjdhYTQwMjQ1ODI5MmFkMWU4YWM2YjMwNzBhYzg3ZDQzMmU4Mzk4ZGIzZmQ4MGRiYmE5NTg5ZWYwZTc5OWMyYzYiLCJpYXQiOjE1NjMzOTg1MDUsIm5iZiI6MTU2MzM5ODUwNSwiZXhwIjoxNTk1MDIwOTA1LCJzdWIiOiI1NyIsInNjb3BlcyI6WyIqIl19.oKv0FKnTtIsOut5xNNGpA2G1etlKYKPtqlc-5EV_G6knGA9QLof4zCZ9RRl8xSBCBntAPaAkgUpPEMB6QjH99ccN88nE397LUWNfeteFR-tqb4K54Y_dgBxvtGxKQimIVVo9fftF4Q7NfSSxg6Gkze1HK6-lpbkfO23EMowzC8H6fABrgii5PYAo6NGG6ZFKLAVIPUzjvwekcZJcuSI3nXDc4sD8oFotdr_egugkejftc0t3HzW7SKsAlVCznh42Tyb6aG85PNv8UWVQGWDsRz7wExCJoVlV_cvPuMCdb8Ce1V3GoVXNimju37ikoRY2VzMT1BkAYqWbyXDRPj_EGeav8SReB1mWNemhh5zF3ChlHx1OE9g5JXAZpwWzw-pxlTX75bHBsgle07G-nYweqGnbDXFQvqcgrC_7sUZH9itjeJJlhi1Eu48_B2cGz1KUh96s0RHJrYUNbfu8Q4_Bk6PNsG3p3W5vVITVIh15N3jiybnSk6IRR7JANLWn-fNHeT6hxaE9NCAkg2Vz1YyW9n5_sGBk88GNMbpcW3ag4p0C0K56YNiR6VbETkA8bxLvygSyfnI-Yz-IMZ_-V1R0QquTfPBBrUI4XUYjhZU5d_2mSHFon8hnU0ModZtUC153WNvW92tP8E8aodKlFrnpNdGnmzUUMkPOBExsyyS2IPM',
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
      });
      console.log('data: ', this.state.data);
      console.log('debug', data);
      
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Content>
            <StickerForm onClick={this.handleClick} onChange={this.handleChange}/>
          </Content>
        <Layout />
        </Container>
      );
    } else {
      return (
        <Container>
          <Content>
            <CardSticker />
          </Content>
         <Layout />
        </Container>
      );
    }
  }
}

export default StickersPage;

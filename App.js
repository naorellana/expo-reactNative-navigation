import { Root } from 'native-base';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import StickersPage from './src/screens/containers/StickersPage';
import Users from './src/screens/containers/Users';
import Login from './src/screens/containers/Login';
import CategoriesScreen from './src/screens/containers/CategoriesScreen';
import Layout from './src/sections/components/FooterTabsIconText';
import HeaderCategories from './src/sections/components/HeaderCategories';
import GiftsScreen from './src/screens/containers/GiftsScreen';
import Gift from './src/screens/containers/Gift';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk'; 

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk)
);

class HomeScreen extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container>
					<Content />
					<Layout />
				</Container>
			</Provider>
		);
	}
}

const RootStack = createStackNavigator(
	{
		HomeRoute: HomeScreen,
		ProfileRoute: Users,
		StickersPageRoute: StickersPage,

		LoginRoute: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		CategoriesRoute: {
			screen: CategoriesScreen,
			navigationOptions: {
				header: <HeaderCategories />
			}
		},
		GiftListRoute: {
			screen: GiftsScreen,
			navigationOptions: {
				title: 'Premios'
			}
		},
		GiftRoute: {
			screen: Gift,
			navigationOptions: {
				title: 'El Premio'
			}
		}
	},
	{
		initialRouteName: 'LoginRoute'
	}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}

		return (
			<Provider store={store}>
				<Container>
					<Root>
						<AppContainer />
					</Root>
				</Container>
			</Provider>
		);
	}
}

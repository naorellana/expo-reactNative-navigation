import React, {Component} from 'react';

import {Container, Content} from 'native-base';

import Layout from '../../sections/components/FooterTabsIconText';
import CategoriesTrend from './CategoriesTrend';
import Categories from './Categories';


class CategoriesScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <CategoriesTrend />
          <Categories />
        </Content>
        <Layout />
      </Container>
    );
  }
}

export default CategoriesScreen;

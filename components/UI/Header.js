import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';


const AppHeader = ({ LeftBack, Heading, rightMenu, navigation }) => (
  <Header>
    {
      LeftBack ? (
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <Left>
          <View />
        </Left>
      )
      }
    <Body>
      <Title>{Heading}</Title>
    </Body>
    {
        rightMenu ? (
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        ) : (
          <Right>
            <View />
          </Right>
        )
    }
  </Header>
);

export default withNavigation(AppHeader);

AppHeader.propTypes = {
  LeftBack: PropTypes.bool,
  Heading: PropTypes.string,
  rightMenu: PropTypes.bool,
  navigation: PropTypes.object,
};

AppHeader.defaultProps = {
  LeftBack: false,
  rightMenu: false,
  Heading: 'Title',
  navigation: null,
};

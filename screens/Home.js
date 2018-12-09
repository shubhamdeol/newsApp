import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import { primaryDarkGreen, primaryPink } from '../config/theme';
import { SCREEN_WIDTH } from '../config/constants';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

    goToNewsSources = () => {
      const { navigation } = this.props;
      navigation.navigate('NewsApp');
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>News App Assignment </Text>
          <Button style={styles.button} success onPress={this.goToNewsSources}>
            <Text style={styles.buttonText}>{'Start Here >>'}</Text>
          </Button>
        </View>
      );
    }
}


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto_medium',
    color: primaryDarkGreen,
  },
  button: {
    backgroundColor: primaryPink,
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.5,
    height: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: SCREEN_WIDTH * 0.03,
  },
});

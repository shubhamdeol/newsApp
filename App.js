import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Spinner } from 'native-base';
import { Constants, Font } from 'expo';

import RobotoFonts from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import { AppNavigator } from './navigation/AppNavigator';


global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;


if (window.__FETCH_SUPPORT__) { // it's RN only to have
  window.__FETCH_SUPPORT__.blob = false;
}

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: RobotoFonts,
      Roboto_medium: RobotoMedium,
    });
    this.setState({ loading: false });
  }


  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {
          !loading ? <AppContainer /> : <Spinner />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

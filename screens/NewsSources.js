import React, { Component } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { newsSources } from '../config/api';
import AppHeader from '../components/UI/Header';
import ListNewsSources from '../components/ListNewsSources';


class NewsSources extends Component {
    state = {
      sources: null,
      loading: true,
    }

    componentDidMount() {
      newsSources().then((res) => {
        this.setState({
          sources: res.data.sources,
        }, () => this.setState({ loading: false }));
      }).catch(() => {
        alert('something is wrong');
      });
    }

    render() {
      const { sources, loading } = this.state;
      return (
        <View style={styles.container}>
          <AppHeader Heading="News Sources" />
          <ScrollView>
            {
              loading ? (
                <Spinner />
              ) : (
                <FlatList
                  data={sources}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <ListNewsSources
                      listData={item}
                    />
                  )}
                />
              )
          }
          </ScrollView>
        </View>
      );
    }
}

export default NewsSources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

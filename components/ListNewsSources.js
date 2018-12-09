import React from 'react';
import { WebBrowser } from 'expo';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import PropTypes from 'prop-types';
import NewsThumbnail from '../assets/thumbnail.jpeg';


const openNewsInAppBrowser = (url) => {
  WebBrowser.openBrowserAsync(url);
};

const ListNewsSources = ({ listData }) => (
  <ListItem avatar button onPress={() => openNewsInAppBrowser(listData.url)}>
    <Left>
      <Thumbnail source={NewsThumbnail} />
    </Left>
    <Body>
      <Text>{listData.name}</Text>
      <Text note>{listData.description}</Text>
    </Body>
    <Right>
      <Text note>{listData.country}</Text>
    </Right>
  </ListItem>
);

export default ListNewsSources;

ListNewsSources.propTypes = {
  listData: PropTypes.object.isRequired,
};

import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';


const reviwwUrl = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=k0oEqxNNWF5NLXqT14i6bgFNG9iriZ0Q";

const Screen = ({ navigation, route }) => {
    return <Text>This is {route.params.item.list_name}'s profile</Text>;
  };

export default Screen;

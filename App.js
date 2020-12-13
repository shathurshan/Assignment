import 'react-native-gesture-handler';

import { Item } from 'native-base';
import React, {useState, useEffect} from 'react';
import { Text, View,FlatList,ActivityIndicator,TouchableOpacity} from 'react-native';

const booksUrl = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=k0oEqxNNWF5NLXqT14i6bgFNG9iriZ0Q";



const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
  fetch(booksUrl)
    .then((response) => response.json())
    .then((json) => setData(json.results))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);




  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ list_name}) => list_name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress= { () => navigation.navigate('Screen', item)}>
                  <Text>{item.list_name}, {item.newest_published_date}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

// const styles = StyleSheet.create({
// container:{
//   flex:1,
//   backgroundColor:"#fff",
//   alignItems:"center",
//   justifyContent:"center",
// },
// });
// export default MyStack;
export default HomeScreen;

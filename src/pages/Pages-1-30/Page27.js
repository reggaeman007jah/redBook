import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page27 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Sequence for setting out signs</Text>
        <Text style={styles.text2}>A Code of Practice</Text>
        <Text style={styles.text3}>October 2013</Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page26')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page28')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
  },
  text3: {
    fontSize: 20,
    margin: 20,
    marginBottom: 50,
  },
  text4: {
    fontSize: 12,
    margin: 20,
    marginBottom: 50,
  },
});

export default Page27;

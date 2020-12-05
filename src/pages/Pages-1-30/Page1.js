import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page1 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Key Questions </Text>
        <Text style={styles.text2}>Ask yourself these questions:</Text>
        <Text style={styles.text2}>
          Will someone using the road or footway from any direction understand
          exactly what is happening and what is expected of them?
        </Text>
        <Text style={styles.text2}>
          Have I made the site safe to work in and for the general public?
        </Text>
        <Button
          title="Previous"
          onPress={() => navigation.navigate('MainMenu')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page2')} />
        <Button
          title="Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
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

export default Page1;

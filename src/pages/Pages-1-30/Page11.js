import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page11 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Training and competence</Text>

        <Text style={styles.text3}>
          Only appropriately trained and competent operatives, supervisors,
          managers or other competent persons should be engaged in the
          assessment, design, setting up, maintaining and removing of signing,
          lighting, guarding and temporary traffic control.{' '}
        </Text>
        <Text style={styles.text3}>
          Anyone placing portable traffic signals on a public highway must have
          a full understanding of the requirements and correct operation of the
          signals. Reference should be made to An Introduction to the Use of
          Portable Vehicular Signals, also known as the ‘Pink Book’.
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page10')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page12')} />
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

export default Page11;

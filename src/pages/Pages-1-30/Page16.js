import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Works instructions
const Page16 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Works instructions</Text>

        <Text style={styles.text3}>
          When you receive a work instruction, look for the information relating
          to the proposed type of work as well as the road conditions, such as:
        </Text>
        <Text style={styles.text3}>
          the type and classification of the road;
        </Text>
        <Text style={styles.text3}>the road width; </Text>
        <Text style={styles.text3}>the size and shape of the site; </Text>
        <Text style={styles.text3}>
          approaches to the site and visibility for traffic;
        </Text>
        <Text style={styles.text3}>
          the volume and type of traffic (including pedestrian and cyclist
          activity); and
        </Text>
        <Text style={styles.text3}>the speed limit.</Text>
        <Text style={styles.text3}>
          You need to be aware of any particular conditions or restrictions that
          would affect the temporary traffic management, for example approval
          for portable traffic signals, temporary traffic regulation orders, or
          permit condition details, where relevant. If in doubt, ask your
          supervisor, manager or other competent person.
        </Text>
        <Text style={styles.text3}>
          From this information you will be able to decide what signs and
          equipment you will need to guard the works, together with any specific
          traffic control equipment (e.g. Stop/Go boards, portable traffic
          signals, etc).
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page15')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page17')} />
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

export default Page16;

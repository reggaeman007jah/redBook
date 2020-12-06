import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Arriving on site
const Page20 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Arriving on site</Text>
        {/* <Text style={styles.text2}>A Code of Practice</Text> */}
        <Text style={styles.text3}>Parkig Italic</Text>
        <Text style={styles.text3}>
          On arrival you must park your vehicle safely before you unload or set
          up signs. If you can’t park off the road, make sure the vehicle can be
          seen clearly by other drivers. Turn on your roof-mounted amber
          beacon(s), if you have them. Do not obstruct a footway or cycle route
          when parking off the road, and respect access to premises and
          driveways. If parking your vehicle outside the working space, you must
          ensure that it does not obstruct any traffic sign or traffic signal
          head. If a vehicle is part of, or enters, the works site, it must be
          correctly incorporated into the traffic management used. Roof-mounted
          beacon(s) must be switched on if the vehicle carries them.
        </Text>
        <Text style={styles.text3}>
          The technical standards for vehicles are given in Part 3 of this Code.
        </Text>
        <Text style={styles.text3}>Vehicle movements Italic</Text>
        <Text style={styles.text3}>
          Works drivers intending to stop at the roadside or enter established
          works should follow normal Highway Code practice and must switch on
          their roof-mounted amber beacon(s), if they have them.
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page19')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page21')} />
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

export default Page20;

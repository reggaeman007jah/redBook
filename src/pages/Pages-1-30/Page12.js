import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Planning
const Page12 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Planning</Text>

        <Text style={styles.text3}>
          Works should cause minimum inconvenience to road users. Local highway
          authorities have a statutory duty to co-ordinate all works in the
          streets for which they are responsible. Similarly, Undertakers have a
          statutory duty to co-operate with the highway authority and with other
          undertakers.{' '}
        </Text>
        <Text style={styles.text3}>
          The site location, nature of the works and their duration will
          determine the traffic control layout that will be required. For
          planned works, a competent person should visit the site in advance and
          carry out a risk assessment to determine the appropriate traffic
          management layout so that the correct equipment can be arranged.{' '}
        </Text>
        <Text style={styles.text3}>
          Liaison with the highway authority and other authorities or statutory
          bodies may be required in planning the works to obtain any necessary
          licences, approvals and temporary traffic regulation orders/notices in
          advance of the works commencing.
        </Text>
        <Text style={styles.text3}>
          For emergency works, as much warning must be given to road users as is
          reasonably practical and full signing, lighting and guarding must be
          provided as quickly as possible.{' '}
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page11')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page13')} />
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

export default Page12;

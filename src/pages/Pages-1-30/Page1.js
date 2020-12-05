import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const Page1 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles1.text}>Safety at Street Works and Road Works </Text>
        <Text style={styles1.text2}>A Code of Practice</Text>
        <Text style={styles1.text3}>October 2013</Text>
        <Button
          title="Contents"
          onPress={() => navigation.navigate('IntroPage1')}
        />
        <Text style={styles1.text4}>
          This Code of Practice is issued by the Secretary of State for
          Transport and Welsh Ministers under section 65 of the New Roads and
          Street Works Act 1991 (NRSWA) and section 174 of the Highways Act
          1980, by Scottish Ministers under section 124 of the NRSWA, and by the
          Department for Regional Development (Northern Ireland) under article
          25 of the Street Works (Northern Ireland) Order 1995 and Article 31 of
          the Road Traffic Regulation Order (Northern Ireland) 1997.
        </Text>
        <Button
          title="Introduction"
          onPress={() => navigation.navigate('IntroPage1')}
        />
        <Button
          title="Part 1: Basic principles"
          onPress={() => navigation.navigate('Part1Menu')}
        />
        <Button
          title="Part 2: Operations"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Part 3: Equipment and vehicles"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Additional Information"
          onPress={() => navigation.navigate('Counter')}
        />
      </ScrollView>
    </View>
  );
};

const styles1 = StyleSheet.create({
  text: {
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

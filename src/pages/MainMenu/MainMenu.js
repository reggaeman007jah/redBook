import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles1.text}>Contents</Text>
        {/* <Text style={styles1.text2}></Text>
        <Text style={styles1.text3}></Text> */}

        <Button title="Page 1" onPress={() => navigation.navigate('Page1')} />
        <Button title="Page 2" onPress={() => navigation.navigate('Page2')} />
        <Button title="Page 3" onPress={() => navigation.navigate('Page3')} />
        <Button title="Page 4" onPress={() => navigation.navigate('Page4')} />
        <Button title="Page 05" onPress={() => navigation.navigate('Page5')} />
        <Button title="Page 06" onPress={() => navigation.navigate('Page6')} />
        <Button title="Page 07" onPress={() => navigation.navigate('Page7')} />
        <Button title="Page 08" onPress={() => navigation.navigate('Page8')} />
        <Button title="Page 09" onPress={() => navigation.navigate('Page9')} />
        <Button title="Page 10" onPress={() => navigation.navigate('Page10')} />
        <Button title="Page 11" onPress={() => navigation.navigate('Page11')} />
        <Button title="Page 12" onPress={() => navigation.navigate('Page12')} />
        <Button title="Page 13" onPress={() => navigation.navigate('Page13')} />
        <Button title="Page 14" onPress={() => navigation.navigate('Page14')} />
        <Button title="Page 15" onPress={() => navigation.navigate('Page15')} />
        <Button title="Page 16" onPress={() => navigation.navigate('Page16')} />
        <Button title="Page 17" onPress={() => navigation.navigate('Page17')} />
        <Button title="Page 18" onPress={() => navigation.navigate('Page18')} />
        <Button title="Page 19" onPress={() => navigation.navigate('Page19')} />
        <Button title="Page 20" onPress={() => navigation.navigate('Page20')} />
        <Button title="Page 21" onPress={() => navigation.navigate('Page21')} />
        <Button title="Page 22" onPress={() => navigation.navigate('Page22')} />
        <Button title="Page 23" onPress={() => navigation.navigate('Page23')} />
        <Button title="Page 24" onPress={() => navigation.navigate('Page24')} />
        <Button title="Page 25" onPress={() => navigation.navigate('Page25')} />
        <Button title="Page 26" onPress={() => navigation.navigate('Page26')} />
        <Button title="Page 27" onPress={() => navigation.navigate('Page27')} />
        <Button title="Page 28" onPress={() => navigation.navigate('Page28')} />
        <Button title="Page 29" onPress={() => navigation.navigate('Page29')} />
        <Button title="Page 30" onPress={() => navigation.navigate('Page30')} />
        <Button title="Page 31" onPress={() => navigation.navigate('Page31')} />
        <Button title="Page 32" onPress={() => navigation.navigate('Page31')} />
        <Button title="Page 33" onPress={() => navigation.navigate('Page33')} />
        <Button title="Page 34" onPress={() => navigation.navigate('Page34')} />
        <Button title="Page 35" onPress={() => navigation.navigate('Page35')} />
        <Button title="Page 36" onPress={() => navigation.navigate('Page36')} />
        <Button title="Page 37" onPress={() => navigation.navigate('Page37')} />
        <Button title="Page 38" onPress={() => navigation.navigate('Page38')} />
        <Button title="Page 39" onPress={() => navigation.navigate('Page39')} />
        <Button title="Page 40" onPress={() => navigation.navigate('Page40')} />
        <Button title="Page 41" onPress={() => navigation.navigate('Page41')} />
        <Button title="Page 42" onPress={() => navigation.navigate('Page42')} />
        <Button title="Page 43" onPress={() => navigation.navigate('Page43')} />
        <Button title="Page 44" onPress={() => navigation.navigate('Page44')} />
        <Button title="Page 45" onPress={() => navigation.navigate('Page45')} />
        <Button title="Page 46" onPress={() => navigation.navigate('Page46')} />
        <Button title="Page 47" onPress={() => navigation.navigate('Page47')} />
        <Button title="Page 48" onPress={() => navigation.navigate('Page48')} />
        <Button title="Page 49" onPress={() => navigation.navigate('Page49')} />
        <Button title="Page 50" onPress={() => navigation.navigate('Page50')} />
        <Button title="Page 51" onPress={() => navigation.navigate('Page51')} />
        <Button title="Page 52" onPress={() => navigation.navigate('Page52')} />
        <Button title="Page 53" onPress={() => navigation.navigate('Page53')} />
        <Button title="Page 54" onPress={() => navigation.navigate('Page54')} />
        <Button title="Page 55" onPress={() => navigation.navigate('Page55')} />
        <Button title="Page 56" onPress={() => navigation.navigate('Page56')} />
        <Button title="Page 57" onPress={() => navigation.navigate('Page57')} />
        <Button title="Page 58" onPress={() => navigation.navigate('Page58')} />
        <Button title="Page 59" onPress={() => navigation.navigate('Page59')} />
        <Button title="Page 60" onPress={() => navigation.navigate('Page60')} />
        <Button title="Page 61" onPress={() => navigation.navigate('Page61')} />
        <Button title="Page 62" onPress={() => navigation.navigate('Page62')} />
        <Button title="Page 63" onPress={() => navigation.navigate('Page63')} />
        <Button title="Page 64" onPress={() => navigation.navigate('Page64')} />
        <Button title="Page 65" onPress={() => navigation.navigate('Page65')} />
        <Button title="Page 66" onPress={() => navigation.navigate('Page66')} />
        <Button title="Page 67" onPress={() => navigation.navigate('Page67')} />
        <Button title="Page 68" onPress={() => navigation.navigate('Page68')} />
        <Button title="Page 69" onPress={() => navigation.navigate('Page69')} />
        <Button title="Page 70" onPress={() => navigation.navigate('Page70')} />
        <Button title="Page 71" onPress={() => navigation.navigate('Page71')} />
        <Button title="Page 72" onPress={() => navigation.navigate('Page72')} />
        <Button title="Page 73" onPress={() => navigation.navigate('Page73')} />
        <Button title="Page 74" onPress={() => navigation.navigate('Page74')} />
        <Button title="Page 75" onPress={() => navigation.navigate('Page75')} />
        <Button title="Page 76" onPress={() => navigation.navigate('Page76')} />
        <Button title="Page 77" onPress={() => navigation.navigate('Page77')} />
        <Button title="Page 78" onPress={() => navigation.navigate('Page78')} />
        <Button title="Page 79" onPress={() => navigation.navigate('Page79')} />
        <Button title="Page 80" onPress={() => navigation.navigate('Page80')} />
        <Button title="Page 81" onPress={() => navigation.navigate('Page81')} />
        <Button title="Page 82" onPress={() => navigation.navigate('Page82')} />
        <Button title="Page 83" onPress={() => navigation.navigate('Page83')} />
        <Button title="Page 84" onPress={() => navigation.navigate('Page84')} />
        <Button title="Page 85" onPress={() => navigation.navigate('Page85')} />
        <Button title="Page 86" onPress={() => navigation.navigate('Page86')} />
        <Button title="Page 87" onPress={() => navigation.navigate('Page87')} />
        <Button title="Page 88" onPress={() => navigation.navigate('Page88')} />
        <Button title="Page 89" onPress={() => navigation.navigate('Page89')} />
        <Button title="Page 90" onPress={() => navigation.navigate('Page90')} />
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
    // marginBottom: 50,
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

export default HomeScreen;

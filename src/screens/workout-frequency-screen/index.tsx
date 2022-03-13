import React, {FC, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../contants/colors';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const WorkoutFrequencyScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>WorkoutFrequency Screen</Text>
    </View>
  );
};

export default WorkoutFrequencyScreen;

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.BLACK,
    },
  });

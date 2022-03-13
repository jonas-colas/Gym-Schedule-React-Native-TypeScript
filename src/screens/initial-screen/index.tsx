import React, {FC, useMemo} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Pressable} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../contants/colors';
import {INITIAL_BACKGROUND, LOGO} from '../../assets';
import Button from '../../components/button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          Make Yourself stronger than your excuses
        </Text>
        <View style={styles.footer}>
          <Button
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate('SignupScreen')}
          />
          <Pressable onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.loginText} >Or Login </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;

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
      color: Colors.LIGHT_GREY,
      textAlign: 'center',
      marginHorizontal: RFValue(50),
    },
    background: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    logo: {
      width: RFValue(130),
      height: RFValue(130),
      marginTop: RFValue(50),
      marginBottom: RFValue(20),
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    loginText: {
      fontSize: RFValue(20),
      marginTop: RFValue(20),
      color: Colors.LIGHT_GREY,
      marginBottom: RFValue(50),
      textAlign: 'center',
      fontWeight: '500',
    },
  });

import React, {useContext} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
    fadeIn,
    fadeOut,
  } = useAnimation();

  const {colors} = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            // top: animatedTop,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}></Animated.View>

      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        styles={{marginTop: 10}}
      />

      <Button
        text="FadeOut"
        onPress={() => fadeOut({})}
        styles={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});

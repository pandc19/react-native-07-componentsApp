import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce, //Easing.elastic(1),
    // }).start(() => console.log('Animation ended'));

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 100,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    //Methods
    startMovingTopPosition,
    fadeIn,
    fadeOut,

    // Properties
    animatedOpacity,
    animatedTop,
  };
};

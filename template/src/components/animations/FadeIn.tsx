import React from 'react';
import Animated, {Easing, FadeIn as RFadeIn} from 'react-native-reanimated';
// import {useColorScheme} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

export const FadeIn: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Animated.View
      style={{
        flex: 1,
        // backgroundColor: backgroundStyle.backgroundColor,
        backgroundColor: 'transparent',
      }}
      entering={RFadeIn.duration(600).easing(Easing.inOut(Easing.quad))}>
      {children}
    </Animated.View>
  );
};

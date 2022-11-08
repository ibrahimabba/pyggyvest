import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import {Pressable, Image, View, Text} from 'native-base';

export type Img = {
  image: ImageSourcePropType;
  text: string;
};

type Props = {
  images: Img[];
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Swiper: React.FC<Props> = ({images}) => {
  const animation = useRef<Animated.Value>(new Animated.Value(0));
  const [imageCount, setTmageCount] = useState<number>(0);
  const [shouldStopSwipe, setShouldStopSwipe] = useState<boolean>(false);

  useEffect(() => {
    const id = !shouldStopSwipe ? setInterval(tick, 2500) : undefined;
    return () => clearInterval(id);
  }, [imageCount, images.length, shouldStopSwipe]);

  function tick() {
    let incrementedImage = imageCount + 1;

    if (incrementedImage >= images.length) {
      return;
    }

    const action = Animated.spring(animation.current, {
      toValue: -(SCREEN_WIDTH * incrementedImage),
      useNativeDriver: true,
    });
    action.start();
    setTmageCount(incrementedImage);
  }
  const handlePressedInImage = () => {
    setShouldStopSwipe(true);
  };
  return (
    <View h="80%" justifyContent="center">
      <View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateX: animation.current}],
            },
          ]}>
          {images.map((img, i) => (
            <Pressable
              key={i}
              onPress={handlePressedInImage}
              w={SCREEN_WIDTH}
              alignItems="center">
              <Image source={img.image} alt={`${1}`} style={styles.image} />
              <Text
                color="white"
                fontSize="20"
                fontWeight="700"
                textAlign="center">
                {img.text}
              </Text>
            </Pressable>
          ))}
        </Animated.View>
        <View style={styles.indicatorContainer}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                i === imageCount
                  ? styles.activeIndicator
                  : styles.inActiveIndicator,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 250,
    width: 250,
  },
  container: {
    flexDirection: 'row',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    bottom: -25,
    zIndex: 2,
  },
  indicator: {
    width: 15,
    height: 3,
    borderRadius: 7.5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  inActiveIndicator: {
    backgroundColor: 'grey',
  },
});

export default Swiper;

import React, {FC} from 'react';
import {Text, HStack} from 'native-base';

interface TitleProps {
  title: string;
  onPress?: () => void;
}

const Title: FC<TitleProps> = ({title, onPress}) => {
  return (
    <HStack
      paddingTop={5}
      alignItems={'center'}
      width={'90%'}
      alignSelf="center"
      paddingX="1%"
      justifyContent={'space-between'}>
      <Text
        fontSize="18px"
        lineHeight="22px"
        fontWeight={'700'}
        color="#333333"
        flex={1}>
        {title}
      </Text>
      <Text
        fontSize="16px"
        lineHeight="19px"
        fontWeight={'400'}
        color="#ADADAD"
        onPress={onPress}>
        See All
      </Text>
    </HStack>
  );
};

export default Title;

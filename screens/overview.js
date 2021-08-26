import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Header from "../layout/home/header/header";
import Main, { ITEM_WIDTH } from "../layout/home/main/main";

const Overview = ({ navigation }) => {
  const isCarousel = React.useRef(null);

  const data = [{ navigation }, { navigation }, { navigation }, { navigation }];

  return (
    <View>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={Render}
        sliderWidth={Dimensions.get("screen").width}
        itemWidth={ITEM_WIDTH}
        // onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        navigation={navigation}
      />
    </View>
  );
};

export default Overview;

export const Render = ({ item }) => {
  const navigation = item.navigation;
  return (
    <View>
      <Header />
      <Main navigation={navigation} />
    </View>
  );
};

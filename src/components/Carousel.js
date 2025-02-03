import React, { useState, useRef } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import colors from "../global/colors";

const { width } = Dimensions.get("window");

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const [loadingStates, setLoadingStates] = useState(images.map(() => true));

  const handleLoadStart = (index) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleLoad = (index) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            {loadingStates[index] && (
              <ActivityIndicator
                size="large"
                color={colors.accent}
                style={styles.spinner}
              />
            )}
            <Image
              source={{ uri: item }}
              style={[
                styles.carouselImage,
                { opacity: loadingStates[index] ? 0 : 1 },
              ]}
              onLoadStart={() => handleLoadStart(index)}
              onLoad={() => handleLoad(index)}
            />
          </View>
        )}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / width);
          setActiveIndex(index);
        }}
      />

      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index.toString()}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: width,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: width,
    height: 250,
    borderRadius: 10,
    resizeMode: "contain",
  },
  spinner: {
    position: "absolute",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d3d3d3",
    margin: 5,
  },
  activeDot: {
    backgroundColor: colors.accent,
  },
});

export default Carousel;

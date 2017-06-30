// @flow
import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { View, Col } from 'constelation-view'
import Space from 'constelation-space'
import Text from 'constelation-text'
import Style_ from 'constelation-style_'
import Image from 'constelation-image'

import Header from 'shared/Header'
import Carousel from 'lib/Carousel'
import COLOR from 'constants/COLOR'
import * as utils from 'utils'

export default class FullDetails extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <Col
        paddingBottom={50}
      >
        <Col
          paddingHorizontal={28}
        >
          <Text
            size={16}
            height={30}
            fontFamily='ChiswickGrotesqueWeb-Light'
          >
            This Grandmaster Wizard Staff keeps you prepared for a wide array of activities — from leisurely strolls in the woods to fighting a demon in the Mines of Moria, you will be prepared.
          </Text>
          <View height={20} />
          <Text
            size={16}
            height={30}
            fontFamily='ChiswickGrotesqueWeb-Light'
          >
            • Strong oak staff body
          </Text>
          <Text
            size={16}
            height={30}
            fontFamily='ChiswickGrotesqueWeb-Light'
          >
            • Crystal top can be used as a lamp
          </Text>
          <Text
            size={16}
            height={30}
            fontFamily='ChiswickGrotesqueWeb-Light'
          >
            • Comfortable ergonomic handle
          </Text>
          <View height={45} />
          <Header
            size={14}
            height={24}
          >
            A Closer Look
          </Header>
        </Col>
        <View height={20} />
        <Carousel
          itemWidth={utils.deviceScreen.width}
          containerStyle={styles.carouselContainer}
          barPositionBottom={30}
        >
          <Image source={require('images/carousel-3.jpg')} />
          <Image source={require('images/carousel-2.jpg')} />
          <Image source={require('images/carousel-1.jpg')} />
        </Carousel>
        <View height={50} />
        <Col
          paddingHorizontal={28}
        >
          <Header
            size={14}
            height={24}
          >
            #wizardstaff
          </Header>
          <View height={20} />
          <Image source={require('images/social.jpg')} />
        </Col>

      </Col>
    )
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: COLOR.F7,
  },
})

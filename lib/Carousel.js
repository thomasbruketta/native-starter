// @flow

/**
 * A scrollview with an overlaid bar which animates over with the indexed position
 */
import { bind } from 'decko'
import { Animated, Dimensions } from 'react-native'
import React from 'react'
import type { Children } from 'react'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-style_'
import View from 'constelation-view'

type Props = {
  barPositionTop: number,
  children: Children,
  barColor: string,
  barPositionBottom: number,
  barWidth: number,
  itemWidth: number,
  trackColor: string,
  containerStyle?: number | Object,
}

export default class Carousel extends React.Component {
  props: Props
  animVal: Animated.Value
  scrollXVal: Animated.Interpolation
  handleScroll: Function
  setSliderRef: Function
  scrollToStart: Function
  sliderRef: ScrollView

  static defaultProps = {
    barColor: '#111',
    barPositionBottom: 40,
    barWidth: 280,
    itemWidth: Dimensions.get('window').width,
    trackColor: '#ccc',
  }

  constructor(props: Props) {
    super(props)

    const childCount = React.Children.count(props.children)
    const totalWidth = props.itemWidth * (childCount - 1)

    this.animVal = new Animated.Value(0)

    this.scrollXVal = this.animVal.interpolate({
      inputRange: [0, totalWidth],
      outputRange: [0, (props.barWidth / childCount) * (childCount - 1)],
    })

    this.handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: this.animVal } }, useNativeDriver: true }])
  }

  @bind
  setSliderRef(node: ScrollView) {
    this.sliderRef = node
  }

  // PUBLIC
  @bind
  scrollToStart() {
    this.sliderRef.scrollTo(0)
  }

  render() {
    const childCount = React.Children.count(this.props.children)

    return (
      <View
        grow
        alignHorizontal='center'
        style={this.props.containerStyle}
      >
        <ScrollView
          grow
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          refNode={this.setSliderRef}
          onScroll={this.handleScroll}
          scrollEnabled={childCount > 1}
        >
          {this.props.children}
        </ScrollView>
        {
          (childCount > 1) && (
            <Style_
              backgroundColor={this.props.trackColor}
            >
              <View
                position='absolute'
                overflow='hidden'
                width={this.props.barWidth}
                height={2}
                bottom={!this.props.barPositionTop ? this.props.barPositionBottom : null}
                top={this.props.barPositionTop}
                marginHorizontal={-0.1}
              >
                <Style_
                  backgroundColor={this.props.barColor}
                  translateX={this.scrollXVal}
                >
                  <View
                    animated
                    width={this.props.barWidth / childCount}
                    height={2}
                    marginHorizontal={-0.1}
                  />
                </Style_>
              </View>
            </Style_>
          )
        }
      </View>
    )
  }
}

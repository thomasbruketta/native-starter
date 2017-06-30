// @flow

import React from 'react'
import {
  Animated,
  PanResponder,
} from 'react-native'

import View from 'constelation-view'
import Header from 'shared/Header'
import Image from 'constelation-image'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-style_'
import Event_ from 'constelation-event_'
import { deviceScreen } from 'utils'

interface IState {
  isContentAtTop: boolean,
  isScrollViewAtScrollTop: boolean,
}

export default class DragScrollView extends React.Component<void, IState> {
  static navigationOptions = {
  }

  gesture: any = null
  scrollView: any = null
  animatedOrigin = deviceScreen.height - 100
  animatedValueY = this.animatedOrigin

  pan = new Animated.ValueXY({
    x: 0,
    y: this.animatedValueY,
  })

  resetOrigin = Animated.spring(this.pan.y, {
    toValue: this.animatedOrigin,
  })

  setPositionToTop = Animated.spring(this.pan.y, {
    toValue: 0,
    tension: 70,
    friction: 10,
  })

  setPositionToBottom = Animated.spring(this.pan.y, {
    toValue: this.animatedOrigin,
    tension: 70,
    friction: 10,
  })

  state = {
    isContentAtTop: false,
    isScrollViewAtScrollTop: true,
  }

  componentWillMount() {
    this.pan.y.addListener(({value}) => {
      this.animatedValueY = value
    })

    this.gesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const travelDist = Math.abs(gestureState.dy)
        let startLocation = gestureState.x0
        const currentLocation = gestureState.moveY
        if (startLocation === 0) {
          startLocation = currentLocation
        }

        const panThreshold = travelDist > 10 && Math.abs(gestureState.dx) < 15
        const grantPanUp = (!this.state.isContentAtTop && gestureState.dy < 0)
        const grantPanDown = (this.state.isContentAtTop && gestureState.dy > 0 && this.state.isScrollViewAtScrollTop)
        if (panThreshold && (grantPanUp || grantPanDown)) {
          return true
        }
        else {
          return false
        }
      },
      onPanResponderGrant: () => {
        this.pan.setOffset({y: this.animatedValueY, x: 0})
        this.pan.setValue({y: 0, x: 0})
      },
      onPanResponderMove: (e, gestureState) => {
        Animated.event([
          null, {dy: this.pan.y},
        ]).call(this, e, gestureState)
      },
      onPanResponderRelease: (e, gestureState) => {
        const threshold = 60
        const crossedThreshold = Math.abs(gestureState.dy) > threshold
        this.pan.setValue({y: this.animatedValueY, x: 0})
        this.pan.setOffset({y: 0, x: 0})
        if (crossedThreshold && this.state.isContentAtTop && gestureState.dy > 0) {
          this.animateContentToBottom()
        }
        else if ((crossedThreshold) && gestureState.dy < 0) {
          this.animateContentToTop()
        }
        else if (!crossedThreshold && this.state.isContentAtTop) {
          this.setPositionToTop.start()
        }
        else {
          this.resetOrigin.start()
          this.setState({isContentAtTop: false})
        }
      },
    })
  }

  animateContentToTop = () => {
    if (!this.state.isContentAtTop) {
      this.setPositionToTop.start()
      this.setState({isContentAtTop: true})
    }
    else {
      this.setPositionToBottom.start()
      this.scrollView.scrollTo({y: 0, animated: true})
      this.setState({isContentAtTop: false})
    }
  }

  animateContentToBottom = () => {
    this.setPositionToBottom.start()
    this.setState({isContentAtTop: false})
  }

  handleScroll = (e: Event) => {
    const offsetY = e.nativeEvent.contentOffset.y
    const isScrollViewAtScrollTop = offsetY <= 0
    this.setState({isScrollViewAtScrollTop})
  }

  handleDetailPress = () => {
    this.animateContentToTop()
  }

  setRef = (node: any) => {
    this.scrollView = node
  }

  render() {
    const arrowRotateAnim = this.pan.y.interpolate({
      inputRange: [0, deviceScreen.height / 2],
      outputRange: ['180deg', '0deg'],
      extrapolate: 'clamp',
    })

    return (
      <Style_
        backgroundColor={'white'}
        translateY={this.pan.y}
        {...this.gesture.panHandlers}
      >
        <View
          animated
        >
          <ScrollView
            refNode={this.setRef}
            grow
            scrollEnabled={this.state.isContentAtTop}
            onScroll={this.handleScroll}
            overflow='hidden'
            contentContainerStyle={{paddingBottom: 54}}
          >
            {this.props.children}

            <Event_
              onPress={this.handleDetailPress}
            >
              <View
                position='absolute'
                top={0}
                left={0}
                height={100}
                paddingHorizontal={28}
                width={deviceScreen.width}
                alignVertical='center'
                alignHorizontal='right'
              >
                <Style_
                  rotate={arrowRotateAnim}
                >
                  <Image
                    tintColor='#222'
                    source={require('images/icons/arrowDown.png')}
                    animated
                  />
                </Style_>
              </View>
            </Event_>
          </ScrollView>


          <Style_ backgroundColor='#222' >
            <View
              alignHorizontal='center'
              position='absolute'
              bottom={-4}
              right={0}
              left={0}
              padding={20}
              paddingBottom={24}
            >
              <Header
                color='white'
                size={14}
              >
                ADD TO CHEST
              </Header>
            </View>
          </Style_>

        </View>
      </Style_>
    )
  }
}

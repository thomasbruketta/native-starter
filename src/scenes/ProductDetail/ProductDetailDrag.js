// @flow
// Imports {{{
import React from 'react'
import {
  StatusBar,
  ScrollView,
  Animated,
  PanResponder,
} from 'react-native'
import { View, Col } from 'constelation-view'
import Style_ from 'constelation-style_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import Text from 'constelation-text'
import NavBar from 'shared/NavBar'
import Icon from 'shared/Icon'
import DragScrollView from 'shared/DragScrollView'
import COLOR from 'constants/COLOR'
import SimpleDetail from './_/SimpleDetail'
import FullDetails from './_/FullDetails'
import ProductNav from './_/ProductNav'

// }}}

export type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProductDetailPan extends React.Component<void, Props, void> {
  animXY = new Animated.ValueXY({
    x: 100,
    y: 150,
  })

  panResponder = PanResponder.create({
    // Ask to be the responder:
    // onStartShouldSetPanResponder: (evt, gestureState) => true,
    // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    // onPanResponderTerminationRequest: (evt, gestureState) => true,

    onPanResponderGrant: (e, gestureState) => {
      this.animXY.setOffset({ x: this.animXY.x._value, y: this.animXY.y._value })
      this.animXY.setValue({ x: 0, y: 0 })
    },
    onPanResponderMove: (evt, gestureState) => {
      this.animXY.setValue({ x: gestureState.dx, y: gestureState.dy })
    },
    onPanResponderRelease: (e, gestureState) => {
      this.animXY.flattenOffset()
    }
  })

  render() {
    return (
      <Col
        grow
      >
        <StatusBar
          hidden
          barStyle='dark-content'
        />
        <ProductNav cartCount={this.props.value} />
        <Image
          grow
          source={require('images/hero.jpg')}
          resizeMode='contain'
        />

        <Animated.View
          {...this.panResponder.panHandlers}
          style={{
            position: 'absolute',
            transform: [{ translateY: this.animXY.y }, { translateX: this.animXY.x }]
          }}
        >
          <Image
            resizeMode='contain'
            source={require('images/smoke-no-repeat.gif')}
            width={200}
            height={200}
          />
        </Animated.View>
        <View
          marginTop={-100}
        >
          <SimpleDetail
            onIncreaseCounter={this.props.onIncreaseCounter}
            buttonType='opacity'
          />
          <FullDetails />
        </View>
      </Col>
    )
  }
}


// // ... in constructor()
// animXY = new Animated.ValueXY({x: 0, y: 0})
// panResponder = PanResponder.create({
//   // Ask to be the responder
//   onMoveShouldSetPanResponder: (evt, gestureState) => true,
//   // Handle gesture
//   onPanResponderGrant: (e, gestureState) => {
//     this.animXY.setOffset({x: this.animXY.x._value, y: this.animXY.y._value})
//     this.animXY.setValue({x: 0, y: 0})
//   },
//   onPanResponderMove: (evt, gestureState) => {
//     this.animXY.setValue({ x: gestureState.dx, y: gestureState.dy })
//   },
//   onPanResponderRelease: (e, gestureState) => {
//     this.animXY.flattenOffset()
//   }
// })

// // ... in render()
// <Animated.View
//   {...this.panResponder.panHandlers}
//   style={{transform: [{translateY: this.animXY.y}, {translateX: this.animXY.x}]}}
// >
//   <Image
//     // ...
//   />
// </Animated.View>

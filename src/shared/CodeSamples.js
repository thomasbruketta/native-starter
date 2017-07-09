
// imports {{{
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native'
import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'
import Header from 'shared/Header'
//import Text from 'constelation-text'
//import View from 'constelation-view'

// }}}


import {
 TouchableWithoutFeedback
} from 'react-native'


import {
 TouchableOpacity
} from 'react-native'


import {
 TouchableHighlight
} from 'react-native'


import Touchable from 'touchable'

import Interact from 'interact'


type Props = {
  label: string,
  onPress: Function
}


export default class Button extends React.Component<void, Props, void> {
  handlePress = () => {
    this.props.onPress()
  }

        this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => boolean,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => boolean,
          onMoveShouldSetPanResponder: (evt, gestureState) => boolean,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => boolean,
          onPanResponderTerminationRequest: (evt, gestureState) => boolean,

          onPanResponderGrant: (evt, gestureState) => { },
          onPanResponderMove: (evt, gestureState) => { },
          onPanResponderRelease: (evt, gestureState) => { },
          onPanResponderTerminate: (evt, gestureState) => { },
        })

const d = {
            onStartShouldSet___Responder: (evt, __________) => boolean,
            onStartShouldSet___ResponderCapture: (evt, __________) => boolean,
            onMoveShouldSet___Responder: (evt, __________) => boolean,
            onMoveShouldSet___ResponderCapture: (evt, __________) => boolean,
            on___ResponderTerminationRequest: (evt, __________) => boolean,

            on___ResponderGrant: (evt, __________) => { },
            on___ResponderMove: (evt, __________) => { },
            on___ResponderRelease: (evt, __________) => { },
            on___ResponderTerminate: (evt, __________) => { },
          }

  // ... in constructor()
  animXY = new Animated.ValueXY({x: 0, y: 0})
  panResponder = PanResponder.create({
    // Ask to be the responder
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    // Handle gesture
    onPanResponderGrant: (e, gestureState) => {
      this.animXY.setOffset({x: this.animXY.x._value, y: this.animXY.y._value})
      this.animXY.setValue({x: 0, y: 0})
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
      // TouchableWithoutFeedback code
      <View>


        <TouchableWithoutFeedback
          hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
          onPress={this.handlePress}
        >
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>ADD TO CART</Text>
          </View>
        </TouchableWithoutFeedback>


        {/* TouchableOpacity */}


        <TouchableOpacity
          hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
          onPress={this.handlePress}
          activeOpacity={0.7}
        >
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>ADD TO CART</Text>
          </View>
        </TouchableOpacity>


        {/* Touchable Highlight */}


        <TouchableHighlight
          hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
          onPress={this.handlePress}
          activeOpacity={0.5}
          underlayColor='#98FB98'
        >
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>ADD TO CART</Text>
          </View>
        </TouchableHighlight>


        {/* Scrollview */}


        <ScrollView>
          {this.props.children}
        </ScrollView>


        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={this.handleScroll}
          scrollEnabled={childCount > 1}
        >
          {this.props.children}
        </ScrollView>

      // ... in render()
      <Animated.View
        {...this.panResponder.panHandlers}
        style={{transform: [
          {translateY: this.animXY.y},
          {translateX: this.animXY.x}
        ]}}
      >
        <Image source={require('smoke.gif')}/>
      </Animated.View>


      <View {…this.panResponder.panHandlers} />

      <TouchableWithoutFeedback>
        <View>
          <Child1 />
          <Child2 />
        </View>
      </TouchableWithoutFeedback>


      <TouchableOpacity>

          <Child1 />
          <Child2 />

      </TouchableOpacity>


      <TouchableHighlight>
        <View>
          <Child1 />
          <Child2 />
        </View>
      </TouchableHighlight>

      <Touchable>

      <Touchable
        pressEffect='opacity'
      >

      <Touchable
        pressEffect='highlight'
      >

        <Touchable>

            <Child1 />
            <Child2 />

        </Touchable>

        <Touchable
          pressEffect='opacity'
        >

            <Child1 />
            <Child2 />

        </Touchable>


        <Touchable
          pressEffect='highlight'
        >

            <Child1 />
            <Child2 />

        </Touchable>

        <View
          onResponderGrant={this.panResponder.panHandlers.onResponderGrant}
          onResponderMove={this.panResponder.panHandlers.onResponderMove}
          ...
        />

        <Interact>


        <Interact
          effect='opacity'
        >


        <Interact
          effect='highlight'
        >

        <Interact
          effect={[‘opacity’, ‘drag’]}
        >

        <Interact
          effect='drag'
        >
          <Image source={require('smoke.gif')}/>
        </Interact>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
  },
  buttonLabel: {
  },
})

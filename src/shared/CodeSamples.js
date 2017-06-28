
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

type Props = {
  label: string,
  onPress: Function
}
export default class Button extends React.Component<void, Props, void> {
  handlePress = () => {
    this.props.onPress()
  }

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


        <ScrollView
          horizontal
          pagingEnabled
          style={{flex: 1}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={this.handleScroll}
          scrollEnabled={childCount > 1}
        >
          {this.props.children}
        </ScrollView>


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

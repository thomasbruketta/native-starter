// @flow
// Imports {{{

import { inject } from 'mobx-react/native'
import Event_ from 'constelation-event_'
import React from 'react'
import Text from 'constelation-text'
import View from 'constelation-view'

import type { Stores } from 'stores'

import ProductDetailTouch from './ProductDetailTouch'
import ProductDetailScroll from './ProductDetailScroll'
import ProductDetailPan from './ProductDetailPan'
import type { Props } from './ProductDetailPan'

// }}}

class ProductDetailContainer extends React.Component {
  props: Props

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Oak Grand Wizard Staff',
    headerRight: (
      <Event_
        pressEffect='opacity'
        onPress={() => navigation.navigate('ProfileDetail')} // eslint-disable-line react/jsx-no-bind
      >
        <View paddingRight={20}>
          <Text> Detail </Text>
        </View>
      </Event_>
    ),
  })

  state = {
    isSmokeVisible: false,
  }
  render() {
    return (
      <ProductDetailTouch {...this.props} />
      // <ProductDetailScroll {...this.props} />
      // <ProductDetailPan {...this.props} />
    )
  }
}

export default inject(
  ({ counter }: Stores) => ({
    value: counter.value,
    onIncreaseCounter: counter.increase,
  })
)(ProductDetailContainer)

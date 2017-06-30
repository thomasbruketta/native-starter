// @flow
// Imports {{{
import React from 'react'
import {
  StatusBar,
} from 'react-native'
import { View, Col } from 'constelation-view'
import Image from 'constelation-image'
import DragScrollView from 'shared/DragScrollView'
import SimpleDetail from './_/SimpleDetail'
import FullDetails from './_/FullDetails'
import ProductNav from './_/ProductNav'

// }}}

export type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProductDetailPan extends React.Component<void, Props, void> {
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
        <View
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={50}
        >
          <DragScrollView>
            <View
              animated
            >
              <SimpleDetail
                onIncreaseCounter={this.props.onIncreaseCounter}
              />
              <FullDetails />
            </View>
          </DragScrollView>
        </View>
      </Col>
    )
  }
}

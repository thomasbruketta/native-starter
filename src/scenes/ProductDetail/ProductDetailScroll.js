// @flow
// Imports {{{
import React from 'react'
import {
  StatusBar,
  ScrollView,
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

export default class ProductDetailScroll extends React.Component<void, Props, void> {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
      >
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
          >
            {this.props.value > 0 &&
              <Image
                resizeMode='contain'
                source={require('images/smoke-no-repeat.gif')}
                width={140}
                height={140}
              />
            }
          </Image>
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
      </ScrollView>
    )
  }
}

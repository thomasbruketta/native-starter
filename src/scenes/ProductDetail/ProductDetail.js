// @flow
// Imports {{{
import React from 'react'
import {
  StatusBar,
  ScrollView,
} from 'react-native'
import { View, Col } from 'constelation-view'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import NavBar from 'shared/NavBar'
import Icon from 'shared/Icon'
import COLOR from 'constants/COLOR'
import SimpleDetail from './_/SimpleDetail'
import FullDetails from './_/FullDetails'

// }}}

export type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProductDetail extends React.Component<void, Props, void> {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
      >
        <Col
          grow
        >
          <StatusBar
            barStyle='dark-content'
          />
          <View
            position='absolute'
            top={0}
            width='100%'
            zIndex={10}
          >
            <NavBar
              theme='dark'
              border={false}
              leftButton={
                <Icon
                  type='close'
                  color={COLOR.DARK}
                />
              }
              rightButton={
                <Icon
                  type='bag'
                  color={COLOR.DARK}
                />
              }
            />
          </View>
          <Image
            source={require('images/hero.jpg')}
            height={567}
            resizeMode='contain'
          />
          <SimpleDetail />
          <FullDetails />
        </Col>
      </ScrollView>
    )
  }
}

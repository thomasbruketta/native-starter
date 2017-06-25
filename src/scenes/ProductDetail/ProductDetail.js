// @flow
// Imports {{{
import {
  StatusBar
} from 'react-native'
import { View, Col } from 'constelation-view'
import Event_ from 'constelation-event_'
import Style_ from 'constelation-style_'
import React from 'react'
import Space from 'constelation-space'
import Text from 'constelation-text'
import Image from 'constelation-image'
import Button from 'shared/Button'
import NavBar from 'shared/NavBar'
import Icon from 'shared/Icon'
import Header from 'shared/Header'
import CHAR from 'constants/CHAR'
import COLOR from 'constants/COLOR'

// }}}

export type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProductDetail extends React.Component<void, Props, void> {
  render() {
    return (
      <Col
        grow
      >
        <StatusBar
          barStyle='light-content'
        />
        <NavBar
          theme='dark'
          border={false}
          leftButton={
            <Icon
              type='arrowLeft'
              color={COLOR.WHITE}
            />
          }
          title='Wizard Shop'
          rightButton={
            <Icon
              type='bag'
              color={COLOR.WHITE}
            />
          }
        />
        <Image
          source={require('images/hero.jpg')}
          height={667 - 80}
          resizeMode='contain'
        >
          <View
            grow
            center
          >
            <Col>
              <Header
                center
                size={20}
                color={COLOR.WHITE}
                height={28}
              >
                {`Grandmaster${CHAR.NL}Oak Staff`}
              </Header>
              <Space size={20} />
              <Button
                label={'Add to Cart'}
                onPress={this.props.onIncreaseCounter}
              />
              {/* <Event_
                pressEffect='opacity'
                onPress={this.props.onIncreaseCounter}
              >
                <Text
                  center
                  size={20}
                >
                  {this.props.value}
                </Text>
              </Event_> */}
            </Col>
          </View>
        </Image>
      </Col>
    )
  }
}

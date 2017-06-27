// @flow
// Imports {{{
import {
  StatusBar
} from 'react-native'
import { View, Col, Row } from 'constelation-view'
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
        >
          <View
            grow
            center
          >
            <Col>
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
        <Row
          justify='space-between'
          align='center'
          height={100}
          paddingHorizontal={28}
        >
          <Col>
            <Header
              size={14}
              height={24}
            >
              Grandmaster Oak Staff
            </Header>
            <Text
              size={14}
              color={COLOR.GREY_TEXT}
            >
              Wizard Staff — 270 Gold
            </Text>
          </Col>
          <Button
            label={'Add to Cart'}
            onPress={this.props.onIncreaseCounter}
          />
        </Row>
      </Col>
    )
  }
}

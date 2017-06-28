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
import COLOR from 'constants/COLOR'
import SimpleDetail from './_/SimpleDetail'
import FullDetails from './_/FullDetails'
import DragScrollView from 'shared/DragScrollView'

// }}}

export type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProductDetail extends React.Component<void, Props, void> {
  render() {
    return (
      // <ScrollView
      //   style={{flex: 1}}
      // >
        <Col
          grow
        >
          <StatusBar
            barStyle='dark-content'
            //hidden
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
            { this.props.value > 0 &&
              <Style_
                backgroundColor='green'
                borderRadius={24}
                zIndex={15}
              >
                <View
                  position='absolute'
                  top={24}
                  right={12}
                  center
                >
                  <View
                    width={24}
                    height={24}
                    center
                  >
                    <Text color='white'>{this.props.value}</Text>
                  </View>
                  <View
                    position='absolute'
                    top={-30}
                  >
                    <Image
                      resizeMode='contain'
                      source={require('images/smoke-no-repeat.gif')}
                      width={70}
                      height={70}
                    />
                  </View>
                </View>
              </Style_>
            }
          </View>
          <Image
            source={require('images/hero.jpg')}
            grow
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
                <SimpleDetail onIncreaseCounter={this.props.onIncreaseCounter} />
                <FullDetails />
              </View>
            </DragScrollView>
          </View>
        </Col>
      // </ScrollView>
    )
  }
}

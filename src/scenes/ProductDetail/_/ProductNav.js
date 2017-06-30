// @flow
import React from 'react'
import View from 'constelation-view'
import Text from 'constelation-text'
import Style_ from 'constelation-style_'
import Image from 'constelation-image'
import NavBar from 'shared/NavBar'
import Icon from 'shared/Icon'
import COLOR from 'constants/COLOR'

type Props = {
  cartCount: number,
}

export default class ProductNav extends React.Component<void, Props, void> {

  render() {
    return (
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
        { this.props.cartCount > 0 &&
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
                <Text
                  color='white'
                  fontFamily='helvetica'
                >
                  {this.props.cartCount}
                </Text>
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
                  key={this.props.cartCount}
                />
              </View>
            </View>
          </Style_>
        }
      </View>
    )
  }
}

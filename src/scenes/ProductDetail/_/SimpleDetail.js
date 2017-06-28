// @flow
import React from 'react'
import { Row, Col } from 'constelation-view'
import Text from 'constelation-text'
import Header from 'shared/Header'
import Button from 'shared/Button'
import COLOR from 'constants/COLOR'

export default class SimpleDetail extends React.Component {
  static propTypes = {
  }

  render() {
    return (
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
            fontFamily='helvetica'
          >
            Wizard Staff — 270 Gold
          </Text>
        </Col>
        <Button
          label={'Add to Cart'}
          onPress={this.props.onIncreaseCounter}
        />
      </Row>
    )
  }
}

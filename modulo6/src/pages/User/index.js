import React, { Component } from 'react'
import api from '../../services/api'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
 } from './styles'

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name
  })

  static propTypes =  {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired
  }

  state = {
    stars: []
  }

  async componentDidMount(){
    const { navigation } = this.props
    const user = navigation.getParam('user')

    const response =  await api.get(`/users/${user.login}/starred`)
    console.tron.log(response)

    this.setState({ stars: response.data })
  }
  render() {
    const { navigation } = this.props
    const { stars } = this.state

    const user = navigation.getParam('user')

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name> { user.name } </Name>
          <Bio> { user.bio } </Bio>
        </Header>
        <Stars
          data = { stars }
          keyExtractor = { star => String(star.id) }
          renderItem = { ( { item } ) =>
            (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title> { item.name } </Title>
                  <Author> { item.owner.login } </Author>
                </Info>
              </Starred>
            )}
        />
        <Text> Ola mundo! Me ajuda por favor! Mostre-te me as estrelas</Text>
      </Container>
    )
  }
}

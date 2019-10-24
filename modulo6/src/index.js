/* eslint-disable no-unused-vars */
import React from 'react'
import { StatusBar } from 'react-native'
import './config/Reactotron'
import Routes from './routes'

const index = () => {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#7157c1'/>
   <Routes />
  </>
  )
}

export default index

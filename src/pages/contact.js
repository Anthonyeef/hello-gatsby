import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us message!</p>
    </div>
  )
}
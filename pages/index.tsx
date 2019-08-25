import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Layout } from '../components/layout';
import {body, padding} from '../global-styles';

export default class Home extends Component {
  render() {
    return (
      <div>
          <style>{`
            #__next { width: 100% }
          `}
          </style>
      <Layout >
          <h2>Welcome</h2>
      </Layout>
      <style jsx>{padding}</style>
      </div>
    )
  }
}
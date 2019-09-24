import { Component } from 'react'
import Layout from '../components/MyLayout'
import DataContent from '../components/dataContent'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {
    userName: '',
    data: []
  }

  changeText(e) {
    this.setState({
      userName: e.target.value
    })
  }

  async startSearch() {
    const { userName } = this.state
    if (userName !== '') {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`)
      const dataFetched = await res.json()
      this.setState({
        data: dataFetched
      })
    }
  }

  render() {
    const { data } = this.state
    const contentStyle = {
      display: 'flex',
      position: 'absolute',
      right: '50%',
      left: '50%',
      top: '50%',
    }

    const inputStyle = {
      height: '20px',
      borderTop: 'none',
      boderLeft: 'none',
      borderRight: 'none'
    }
    
    const buttonStyle = {
      height: '26px',
      marginLeft: '3px',
      color: 'white',
      borderRadius: '4px',
      backgroundColor: '#19a9ed'
    }

    const content = data.length === 0 ? (
      <div style={contentStyle}>
          <input
            type="text"
            name="userName"
            style={inputStyle}
            onChange={(e) => this.changeText(e)}
          />
          <button
            type="submit"
            style={buttonStyle}
            onClick={() => this.startSearch()}
          >
            Search
          </button> 
        </div>
    ) : (
      <DataContent
        data={data}
      />
    )

    return(
      <Layout>
        {content}
      </Layout>
    )
  }
}

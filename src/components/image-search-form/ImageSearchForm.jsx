import React, { Component } from 'react'

import styles from './ImageSearchForm.module.scss'

export default class ImageSearch extends Component {
  state = {
    inputValue: '',
  }

  handleInputChange = (inputValue) => {
    this.setState({ inputValue })
  }

  render() {
    const { inputValue } = this.state

    return (
      <form
        className={styles.form}
      >
        <input
          type="text"
          value={inputValue}
          onChange={e => this.handleInputChange(e.target.value)}
          className={styles.input}
        />
        <button
          type="submit"
          className={styles.button}
        >
         Search
        </button>
      </form>
    )
  }
}

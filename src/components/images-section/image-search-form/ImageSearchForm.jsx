import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getImagesBySearchTerm } from '../ImagesSection.actions'

import styles from './ImageSearchForm.module.scss'

class ImageSearch extends Component {
  state = {
    inputValue: '',
    lastSearchedTerm: null,
    errorMessage: null,
  }

  handleInputChange = (inputValue) => {
    this.setState({ inputValue })
  }

  handleFormSubmit = (event, inputValue) => {
    event.preventDefault()

    const { lastSearchedTerm } = this.state
    const { boundGetImagesBySearchTerm } = this.props

    if (inputValue.trim() === '') {
      this.setState({
        errorMessage: 'Input is empty, nice done! You should try yoga, remember to empty your mind like this input.',
      })
    } else {
      if (inputValue === lastSearchedTerm) {
        this.setState({
          errorMessage: 'You\'re already looking at those photos',
        })

        return
      }
      this.setState({
        errorMessage: null,
        lastSearchedTerm: inputValue,
      })

      boundGetImagesBySearchTerm(inputValue)
    }
  }

  render() {
    const {
      inputValue,
      errorMessage,
    } = this.state

    const { apiErrorMessage } = this.props

    return (
      <div className={styles.formWrapper}>
        <form
          onSubmit={e => this.handleFormSubmit(e, inputValue)}
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
        {
          errorMessage &&
          !apiErrorMessage &&
          (
            <p className={styles.errorMessage}>
              {errorMessage}
            </p>
          )
        }
        {
          apiErrorMessage &&
          (
            <p className={styles.errorMessage}>
              {apiErrorMessage}
            </p>
          )
        }
      </div>
    )
  }
}

ImageSearch.propTypes = {
  apiErrorMessage: PropTypes.string.isRequired,
  boundGetImagesBySearchTerm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  apiErrorMessage: state.images.errorMessage,
})

const mapDispatchToProps = {
  boundGetImagesBySearchTerm: getImagesBySearchTerm,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch)

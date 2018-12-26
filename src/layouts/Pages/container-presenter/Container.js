import React, { Component } from 'react'
import Presentational from './Presentational'
import axios from 'axios'

const SWAPI_URL = 'https://swapi.co/api'

export default class ContainerPage extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  }

  componentDidMount() {
    axios.get(`${SWAPI_URL}/films/`)
      .then(({ data }) => {
        this.setState({ movies: data.results })
      })
      .catch(error => {
        this.setState({ error: error })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  sortMovies = sortKey => {
    const { movies } = this.state

    const sortedMovies = movies.sort((a, b) => {
      const nameA = a[sortKey]
      const nameB = b[sortKey]
      if (nameA > nameB) return 1
      if (nameA < nameB) return -1
      return 0
    })

    this.setState({ movies: sortedMovies })
  }

  render() {
    const { movies, loading, error } = this.state
    const moviesSortedById = movies && movies
      .sort((prev, next) => prev.episode_id > next.episode_id)

    if (loading) {
      return <div>Data is loading...</div>
    }

    if (error) {
      return (
        <div>
          <p>Something went wrong!</p> <br />
          <code>{error.message}</code> <br />
          <p>Try again later</p>
        </div>
      )
    }

    return (
      <Presentational data={moviesSortedById} sortMovies={this.sortMovies} />
    )
  }
}

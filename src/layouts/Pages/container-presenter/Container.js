import React, { Component } from 'react'
import Presentational from './Presentational'
import axios from 'axios'

const SWAPI_URL = 'https://swapi.co/api'

export default class ContainerPage extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    axios.get(`${SWAPI_URL}/films/`).then(({ data }) => {
      this.setState({ movies: data.results })
    })
  }

  sortMovies = sortKey => {
    const { movies } = this.state

    const moviesInOrder = movies.sort((a, b) => {
      const nameA = a[sortKey]
      const nameB = b[sortKey]
      if (nameA > nameB) return 1
      if (nameA < nameB) return -1
      return 0
    })

    this.setState({ movies: moviesInOrder })
  }

  render() {
    const { movies } = this.state
    const moviesSortedById = movies && movies
      .sort((prev, next) => prev.episode_id > next.episode_id)

    return (
      <Presentational data={moviesSortedById} sortMovies={this.sortMovies} />
    )
  }
}

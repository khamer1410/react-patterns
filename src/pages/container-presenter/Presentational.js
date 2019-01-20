import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Buttons';

const Presentational = ({ data, sortMovies }) => (
  <Wrapper>
    <h1>Star Wars movies</h1>
    <h6>Sort by:</h6>
    <ButtonContainer>
      <SortButton onClick={() => sortMovies('episode_id')}>episode id</SortButton>
      <SortButton onClick={() => sortMovies('release_date')}>release date</SortButton>
      <SortButton onClick={() => sortMovies('title')}>title</SortButton>
      <SortButton onClick={() => sortMovies('director')}>director</SortButton>
    </ButtonContainer>
    <div>
      {data.map(film => {
        return (
          <section key={film.episode_id}>
            <h3>Title: {film.title}</h3>
            <h4>Director: {film.director}</h4>
            <h5>Release date: {film.release_date}</h5>
          </section>
        )
      })}
    </div>
  </Wrapper>
)

export default Presentational

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SortButton = styled(Button)`
  margin: 5px;
`

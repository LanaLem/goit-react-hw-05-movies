import React, { Component } from 'react';
// import data from '../../data.json';
import { cleanedArray } from '../../helpers/cleanedArray ';
import { Button } from '../Button/Button';
import { Gallery } from '../Gallery/Gallery';
import { Modal } from '../Modal/Modal';
import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { getMovies } from '../../servises/api';

export class App extends Component {
  state = {
    isShown: false,
    movies: [],
    currentImage: '',
    page: 1,
  };

  componentDidUpdate(prevProp, prevState) {
    const { isShown, page } = this.state;
    if (prevState.isShown !== isShown || prevState.page !== page) {
      this.fetchMovies(page);
    }
  }

  fetchMovies = page => {
    getMovies(page).then(data => {
      this.setState(prevState => ({
        movies: [...prevState.movies, ...cleanedArray(data.data.results)],
      }));
    });
  };

  toogleIsShown = () => {
    this.setState({ isShown: true });
  };
  deleteMovie = id => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(element => element.id !== id),
    }));
  };

  toggleWatched = id => {
    this.setState(prevState => ({
      movies: prevState.movies.map(element => {
        if (element.id === id) {
          return { ...element, watched: !element.watched };
        }
        return element;
      }),
    }));
  };

  closeModal = () => {
    this.setState({ currentImage: '' });
  };

  openModal = image => {
    console.log(image);
    this.setState({ currentImage: image });
  };

  handleIncremebtPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isShown, movies, currentImage } = this.state;
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <GlobalStyle />
        {isShown ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={4}
          >
            <Gallery
              array={movies}
              deleteMovie={this.deleteMovie}
              toggleWatched={this.toggleWatched}
              openModal={this.openModal}
            />
            <Button
              func={this.handleIncremebtPage}
              text="Load more"
              type="button"
            />
          </Box>
        ) : (
          <Button
            func={this.toogleIsShown}
            text="Show film list"
            type="button"
          />
        )}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </Box>
    );
  }
}

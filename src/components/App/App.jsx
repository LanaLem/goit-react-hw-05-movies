import React, { Component } from 'react';
import data from '../../data.json';
import { cleanedArray } from '../../helpers/cleanedArray ';
import { Button } from '../Button/Button';
import { Gallery } from '../Gallery/Gallery';
import { Modal } from '../Modal/Modal';
import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';

export class App extends Component {
  state = {
    isShown: false,
    movies: cleanedArray(data),
    currentImage: '',
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

  render() {
    const { isShown, movies, currentImage } = this.state;
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <GlobalStyle />
        {isShown ? (
          <Gallery
            array={movies}
            deleteMovie={this.deleteMovie}
            toggleWatched={this.toggleWatched}
            openModal={this.openModal}
          />
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

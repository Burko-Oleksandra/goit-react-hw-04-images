import React, { Component } from 'react';
import Notiflix from 'notiflix';

import fetchImages from '../utils/fetchImages';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import { Wrapper, Error } from './App.styled';

export default class App extends Component {
  state = {
    gallery: null,
    searchQuery: '',
    loading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery || this.state.page !== prevState.page) {
      this.setState({ loading: true });

      const response = await fetchImages(nextQuery, this.state.page);

      if (!response.total) {
        return Notiflix.Notify.warning(
          'Oops! Enter something in the search bar',
          {
            borderRadius: '8px',
            fontSize: '18px',
            cssAnimationStyle: 'zoom',
            warning: {
              background: '#483d8b',
              textColor: '#e6e6fa',
              notiflixIconColor: '#e6e6fa',
            },
          }
        );
      }

      if (this.state.page > 1) {
        return this.setState(prev => ({
          gallery: [...prev.gallery, ...response.hits],
          loading: false,
        }));
      }

      this.setState({ gallery: response.hits, loading: false });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };

  handleLoadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loading, gallery, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Wrapper>
          {loading && <Loader />}
          {error && (
            <Error>Oops. Something went wrong. Please try again!</Error>
          )}
          {gallery && (
            <>
              <ImageGallery gallery={gallery} />
              <Button onClick={this.handleLoadMoreImages} />
            </>
          )}
        </Wrapper>
      </>
    );
  }
}

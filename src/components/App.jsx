// 'https://pixabay.com/api/?q=cat&page=1&key=30847710-2a74f0266730d3c25fa6c5c5e&image_type=photo&orientation=horizontal&per_page=12'

// Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Notiflix from 'notiflix';

export default class App extends Component {
  state = {
    gallery: null,
    searchQuery: '',
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=30847710-2a74f0266730d3c25fa6c5c5e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(gallery => this.setState({ gallery }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    const { loading, searchQuery, gallery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <div>Загружаем</div>}
        {!searchQuery && <p>Enter something in the search bar</p>}
        {gallery && <p>{gallery.hits[0]['downloads']}</p>}
      </>
    );
  }
}

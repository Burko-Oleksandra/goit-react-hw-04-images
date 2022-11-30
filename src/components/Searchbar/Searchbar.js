//  Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми. Створює DOM-елемент наступної структури.
import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import Notiflix from 'notiflix';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return Notiflix.Notify.warning('Oops! Enter something in the search bar');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>
              <FcSearch />
            </span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

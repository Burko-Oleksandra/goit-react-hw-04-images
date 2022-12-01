import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';
import { Form, Header, Button, Icon, Input } from './Searchbar.styled';

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

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Icon>
              <BsSearch size="1.7em" />
            </Icon>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}

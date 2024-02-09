import { Component } from 'react';
import css from './SearrchBar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ev => {
    this.setState({ value: ev.target.value.toLowerCase() });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (this.state.value.trim() === '') {
      return alert('Please write something');
    }
    this.props.handleFormSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            Search
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageInfo } from './ImageInfo/ImageInfo';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <>
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        <ImageInfo searchValue={searchValue} />
      </>
    );
  }
}

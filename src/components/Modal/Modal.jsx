import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  closeEscModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModale();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModale();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackDropClick}>
        <div className={css.Modal}>
          <img src={this.props.largePicture} alt="" />
        </div>
      </div>
    );
  }
}

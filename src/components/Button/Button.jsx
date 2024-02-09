import css from './Button.module.css';

export function Button({ loadMore }) {
  return (
    <button type="button " className={css.Button} onClick={loadMore}>
      Load more
    </button>
  );
}

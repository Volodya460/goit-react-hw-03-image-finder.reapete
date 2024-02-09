import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.loader}>
      <Puff
        visible={true}
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

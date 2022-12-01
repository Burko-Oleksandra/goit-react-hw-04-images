// Компонент спінера відображається, доки відбувається завантаження зображень.
// Використовуйте будь-який готовий компонент, наприклад react-loader-spinner або будь-який інший.
import { InfinitySpin } from 'react-loader-spinner';
import { LoaderWrap, LoaderOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrap>
        <InfinitySpin color="#483d8b" />
      </LoaderWrap>
    </LoaderOverlay>
  );
};

export default Loader;

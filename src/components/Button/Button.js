// При натисканні на кнопку Load more повинна довантажуватись
// наступна порція зображень і рендеритися разом із попередніми.
// Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення.
// Якщо масив зображень порожній, кнопка не рендериться.
import { TfiMoreAlt } from 'react-icons/tfi';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      <TfiMoreAlt size="3em" color="#483d8b" />
    </LoadMoreBtn>
  );
};

export default Button;

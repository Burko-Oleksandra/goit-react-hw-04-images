import Notiflix from 'notiflix';

export default function NotificationWarning() {
  return Notiflix.Notify.warning('Oops! Enter something in the search bar', {
    borderRadius: '8px',
    fontSize: '18px',
    cssAnimationStyle: 'zoom',
    warning: {
      background: '#483d8b',
      textColor: '#e6e6fa',
      notiflixIconColor: '#e6e6fa',
    },
  });
}

import React, { useState, useEffect } from 'react';

import fetchImages from '../../utils/fetchImages';
import NotificationWarning from './NotificationWarning';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import { Wrapper, Error } from './App.styled';

export default function App() {
  const [gallery, setGallery] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const response = fetchImages(searchQuery, page);
    console.log(response);

    if (!response.total) {
      return NotificationWarning(), setLoading(true);
    }

    if (page > 1) {
      return setGallery(prev => [...prev, ...response.hits]);
    }

    setGallery(response.hits);
    setLoading(false);
  }, [searchQuery, page]);

  function handleFormSubmit(searchQuery) {
    setSearchQuery(searchQuery);
    setPage(1);
  }

  function handleLoadMoreImages() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <Wrapper>
        {loading && <Loader />}
        {error && <Error>Oops. Something went wrong. Please try again!</Error>}
        {gallery && (
          <>
            <ImageGallery gallery={gallery} />
            <Button onClick={handleLoadMoreImages} />
          </>
        )}
      </Wrapper>
    </>
  );
}

// export default class App extends Component {
//   state = {
//     gallery: null,
//     searchQuery: '',
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   async componentDidUpdate(_, prevState) {
//     const prevQuery = prevState.searchQuery;
//     const nextQuery = this.state.searchQuery;

//     if (prevQuery !== nextQuery || this.state.page !== prevState.page) {
//       this.setState({ loading: true });

//       const response = await fetchImages(nextQuery, this.state.page);

//       if (!response.total) {
//         return (
//           NotificationWarning(),
//           this.setState(() => ({
//             loading: false,
//           }))
//         );
//       }

//       if (this.state.page > 1) {
//         return this.setState(prev => ({
//           gallery: [...prev.gallery, ...response.hits],
//           loading: false,
//         }));
//       }

//       this.setState({ gallery: response.hits, loading: false });
//     }
//   }

//   handleFormSubmit = searchQuery => {
//     this.setState({ searchQuery, page: 1 });
//   };

//   handleLoadMoreImages = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { loading, gallery, error } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <Wrapper>
//           {loading && <Loader />}
//           {error && (
//             <Error>Oops. Something went wrong. Please try again!</Error>
//           )}
//           {gallery && (
//             <>
//               <ImageGallery gallery={gallery} />
//               <Button onClick={this.handleLoadMoreImages} />
//             </>
//           )}
//         </Wrapper>
//       </>
//     );
//   }
// }

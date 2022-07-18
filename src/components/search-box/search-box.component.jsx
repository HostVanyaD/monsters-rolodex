// import { render } from '@testing-library/react';
// import { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onSearchChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={`${placeholder}`}
    onChange={onSearchChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onSearchChangeHandler } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type='search'
//         placeholder={`${placeholder}`}
//         onChange={onSearchChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;

import { useInput } from '../../customHooks/useInput';

const Search = ({ placeholder = '', onSearch = (f) => f }) => {
  const [searchProps] = useInput('');

  const onSearchHandler = () => {
    onSearch(searchProps.value);
  };
  return (
    <>
      <input {...searchProps} type="text" placeholder={placeholder} required />
      <button onClick={onSearchHandler}>Search</button>
    </>
  );
};

export default Search;

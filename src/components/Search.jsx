import '../assets/styles/components/Search.scss';

const Search = () => (
  <div className="search">
    <h2 className="search__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="search__entry" placeholder="Search..." />
  </div>
);

export default Search;

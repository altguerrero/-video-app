import '../assets/styles/App.scss';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/initialState';

const { REACT_APP_API } = process.env;

const App = () => {
  const initialState = useInitialState(REACT_APP_API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header />
      <Hero />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                cover={item.cover}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.originals.length > 0 && (
        <Categories title="Originals">
          <Carousel>
            {initialState.originals.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                cover={item.cover}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.trends.length > 0 && (
        <Categories title="Trends">
          <Carousel>
            {initialState.trends.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                cover={item.cover}
              />
            ))}
          </Carousel>
        </Categories>
      )}
    </div>
  );
};

export default App;

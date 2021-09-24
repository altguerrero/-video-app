import '../assets/styles/components/CarouselItem.scss';
// assets
import PlayBtn from '../assets/static/icons/PlayBtn';
import PlusBtn from '../assets/static/icons/PlusBtn';
// utils
import timeConvert from '../utils/timeConvert';

const CarouselItem = ({ title, year, contentRating, cover, duration }) => (
  <div className="carousel-item">
    <div className="carousel-item__header">
      <img className="carousel-item__image" src={cover} alt="" />
    </div>
    <div className="carousel-item__details">
      <div className="carousel-item__details--actions">
        <PlayBtn />
        <PlusBtn />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {year} <span>{contentRating}</span> {timeConvert(duration)}
      </p>
    </div>
  </div>
);

// CarouselItem.propTypes = {
//   cover: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   contentRating: PropTypes.string.isRequired,
//   duration: PropTypes.number.isRequired,
// };

export default CarouselItem;

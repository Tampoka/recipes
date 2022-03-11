import StarRating from '../Basics/StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from '../../customHooks/color-hooks';
import Checkbox from '../UseReducer/Checkbox';
import { useNavigate } from 'react-router';

export default function Color({ id, title, color, rating }) {
  const navigate = useNavigate();

  const { rateColor, removeColor } = useColors();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <section className="color" onClick={() => navigate(`/${id}`)}>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <Checkbox />
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}

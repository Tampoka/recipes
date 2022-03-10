import StarRating from '../Basics/StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from '../../customHooks/color-hooks';
import Checkbox from '../UseReducer/Checkbox';

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
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

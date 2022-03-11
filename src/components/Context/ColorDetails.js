import { useParams } from 'react-router';
import { useColors } from '../../customHooks/color-hooks';

export function ColorDetails() {
  let { id } = useParams();
  let { colors } = useColors();

  let foundColor = colors.find((color) => color.id === id);
  const { title, rating } = foundColor;
  return (
    <div>
      <h1>{title}</h1>
      <h3>Rating: {rating}</h3>
    </div>
  );
}

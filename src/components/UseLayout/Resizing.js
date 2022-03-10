import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../customHooks/useWindowSize';

const Resizing = () => {
  const [width, height] = useWindowSize();
  const [color, setColor] = useState('red');

  useEffect(() => {
    width < 100 ? setColor('green') : setColor('red');
    console.log(width);
    console.log('changing size');
  }, [height, width]);

  useEffect(() => {
    console.log('changing color');
  }, [color]);

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: width,
          height: height,
          textAlign: 'center',
        }}
      >
        RESIZED
      </div>
    </div>
  );
};

export default Resizing;

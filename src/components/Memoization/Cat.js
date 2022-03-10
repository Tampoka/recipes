import { memo } from 'react';

export const Cat = memo(
  function Cat({ name, meow = (f) => f }) {
    // const RenderCatOnce = memo(Cat, () => true);
    // const AlwaysRenderCat = memo(Cat, () => false);

    console.log(`rendering ${name}`);
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <p onClick={() => meow(name)}>{name}</p>
      </>
    );
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name,
);
//rerender only if name changed (even without useCallback on meow)

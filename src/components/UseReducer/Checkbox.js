import React, { useReducer } from 'react';

export default function Checkbox() {
  // const [checked, setChecked] = useState(false);
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false,
    (checked) => checked,
  );
  // const [first, setFirst] = useState(true)
  // const [number, setNumber]=useReducer((number,newNumber)=>number+newNumber,10,n=>n)
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    10,
    (n) => n * 2,
  );

  // const onCheck = () => {
  //     setChecked(checked=>!checked)
  //     setFirst(false)
  // }
  // useEffect(() => {
  //     if (!first) {
  //         checked ? console.log('checked') : console.log('unchecked')
  //     }
  //     console.log('effect')
  // }, [first, checked])

  return (
    <>
      <input type="checkbox" value={checked} onChange={setChecked} />
      {checked ? 'checked' : 'not checked'}
      <hr />
      {/* eslint-disable-next-line jsx-a11y/aria-role,jsx-a11y/click-events-have-key-events */}
      <div onClick={() => setNumber(30)} role="command">
        {number}
      </div>
    </>
  );
}

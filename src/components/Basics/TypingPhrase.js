import { useState } from 'react';

// export default function TypingPhrase({children = ""}) {
export default function TypingPhrase() {
  // const [posts, setPosts] = useState([]);
  // const [first, setFirst] = useState(true);

  // const addPost = post => setPosts(allPosts => [post, ...allPosts]);

  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');
  const createPhrase = () => {
    setPhrase(val);
    set('');
  };

  /*  useEffect(() => {
        console.log(`typing "${val}`)
    },[val])

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    },[phrase]);*/

  /*
    useEffect(() => {
        if (!first) {
            console.log("either val or phrase has changed")
        }
        setFirst(false)
    }, [val, phrase])

    useEffect(() => {
        console.log("only once after initial render");
    }, []);
  */

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

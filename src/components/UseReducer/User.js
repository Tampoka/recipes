import React, {useReducer} from 'react';

const User = () => {
    const firstUser = {
        id: "0391-3233-3201",
        firstName: "Bill",
        lastName: "Wilson",
        city: "Missoula",
        state: "Montana",
        email: "bwilson@mtnwilsons.com",
        admin: false
    }
    // const [user, setUser] = useState(firstUser)
    const [user, setUser] = useReducer((user, newDetails) => ({...user, ...newDetails}), firstUser, user => user)

    /*  const setAdmin=()=>{
          setUser({...user, admin: true})
      }*/

    const setAdmin = () => {
        setUser({admin: true})
    }

    return (
        <div>
            <h1>
                {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
            </h1>
            <p>Email: {user.email}</p>
            <p>
                Location: {user.city}, {user.state}
            </p>
            <button onClick={setAdmin} disabled={user.admin}>{!user.admin ? 'Make Admin' : 'Already Admin'}</button>
        </div>
    );
};

export default User;

/*const PhotoPane = (props) => {
    const initialPixelData = loadPhoto(props.photoID);
    const [pixelData, dispatch] = useReducer(reducerFunc, initialPixelData);
...
}

Above code has a serious performance issue because loadPhoto() is repeatedly called. If you don't want to load ' +
'the photo again every time when the component renders, the intuitive reaction is to move the loadPhoto(props.photoID)' +
' out of the component. But it will cause another problem. You will have to load all photos into memory in Context or' +
' somewhere else and it will definitely create a memory hog.

So this is the time for us to introduce lazy initialization.

    const PhotoPane = (props) => {
    const init = (photoID) => loadPhoto(photoID);
    const [pixelData, dispatch] = useReducer(reducerFunc, props.photoID, init);
...
}
The init() function is executed exactly only one time when the useReducer is first called.
    Actually useEffect() hook can achieve a similar result. But lazy initialization is still the most direct solution.*/



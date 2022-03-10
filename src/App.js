import './App.css';
import { Route, Routes } from 'react-router';
/*import { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { createResource } from './components/Status/Status';
import { GridLoader } from 'react-spinners';*/

// const Main = lazy(() => import('./components/Main/Main'))

/*
function App() {
    const [login, setLogin] = useState('moonhighway')
    const [repo, setRepo] = useState('css-layout')


    const handleSearch=(login)=>{
        if(login) return setLogin(login)
        setLogin('')
        setRepo('')
    }

    if(!login) return (
<Search placeholder={'GitHub user name'} onSearch={handleSearch}/>
    )
    return (
        <div className="App">
            <Search placeholder={'GitHub user name'} onSearch={handleSearch}/>
            {login && <UserWithFetch login={login}/>}
            {login && (
                <UserRepositories
                    login={login}
                    repo={repo}
                    onSelect={setRepo}/>)}
            {login && repo && (
                <RepoReadme
                    login={login}
                    repo={repo}/>)}
        </div>
    )
}*/

//with graphql-request
/*export default function App() {
    const [login, setLogin] = useState("moontahoe");
    const [userData, setUserData] = useState();
    console.log(userData)
    useEffect(() => {
        client
            .request(query, { login })
            .then(({ user }) => user)
            .then(setUserData)
            .catch(console.error);
    }, [client, query, login]);
    if (!userData) return <p>loading...</p>;
    return (
        <div className='App'>
            <Search value={login} onSearch={setLogin} />
            <UserDetails {...userData} />
            <p>{userData.repositories.totalCount} — repos</p>
            <List
                data={userData.repositories.nodes}
                renderItem={repo => <span>{repo.name}</span>}
            />
        </div>
    );
}*/

// test ErrorBoundary
/*export default function App() {
    return (
        <SiteLayout menu={
            <ErrorBoundary>
                <p>Site Layout Menu</p>
                <BreakThings/>
            </ErrorBoundary>
        }>
            <>
                <ErrorBoundary fallback={ErrorScreen}>
                    <Callout>Callout<BreakThings/></Callout>
                </ErrorBoundary>
                <ErrorBoundary>
                    <h1>Contents</h1>
                    <p>This is the main part of the example layout</p>
                </ErrorBoundary>
            </>
        </SiteLayout>
    )
}*/

//with agreement and Main
/*export default function App() {
    const [agree, setAgree] = useState(false)

    if (!agree)
        return <Agreement onAgree={() => setAgree(true)}/>

    return (
        <div className="App">
            <ErrorBoundary>
                <Suspense fallback={<ClimbingBoxLoader/>}>
                    <Main/>
                </Suspense></ErrorBoundary>
        </div>
    )
}*/

/*
export default function App() {

    return (
        <Suspense fallback={<GridLoader/>} ><ErrorBoundary>
            <Status/>
        </ErrorBoundary></Suspense>
    )
}*/

/*
const threeSecondsToGnar = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: 'gnarly!' }), 3000),
);

const resource = createResource(threeSecondsToGnar);

function Gnar() {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
}

export default function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  );
}
*/

//with routes

import React from 'react';
import ColorProvider from './customHooks/color-hooks';
import AddColorForm from './components/UseInput/AddColorForm';
import ColorList from './components/Context/ColorsList';
import { ColorDetails } from './components/Context/ColorDetails';

/*export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}*/

//with routes / useRoutes
/*export default function App() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'about',
      element: <About />,
      children: [
        {
          path: 'services',
          element: <Services />,
        },
        { path: 'history', element: <History /> },
      ],
    },
    { path: 'events', element: <Events /> },
    { path: 'products', element: <Products /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Whoops404 /> },
    {
      path: 'services',
      redirectTo: 'about/services',
    },
  ]);
  return element;
}*/

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import ShowMovies from './components/ShowMovies/ShowMovies'
import WatchList from './components/WatchList/WatchList'
import WatchListProvider from "./context/AppContext";
import MovieDetails from './components/MovieDetails/MovieDetails'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {path: `/`, element: <Layout />, children: [
      {index: true, element: <Home />},
      {path:'/moveList',element:<ShowMovies />},
      {path:'/watchList',element:<WatchList />},
      { path: "movie/:id", element: <MovieDetails /> }
    ]}
  ]);

  return (
    
    <WatchListProvider>
        <RouterProvider router={routes} />
    </WatchListProvider>
  )
}

export default App

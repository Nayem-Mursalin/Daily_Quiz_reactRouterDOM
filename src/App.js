import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import MyQuiz from './components/MyQuiz/MyQuiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <MyQuiz></MyQuiz>
        }
      ]
    },
    { path: '*', element: <div>This Route Didn't found!!</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

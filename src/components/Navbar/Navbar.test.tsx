import { describe, test } from 'vitest'
import { Navbar } from './Navbar'
import { render } from '@testing-library/react'
import { Route, Router, Routes } from 'react-router-dom'
import About from '../../pages/about/About'

describe('Navbar', () => {
  test('Should create component', () => {
    render(
      <Router>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="/" element={<LittleHome />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </div>
      </Router>
    )
  })
})

function LittleHome() {
  return (
    <>
      <h1 className="text-6xl">Home</h1>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <h1 className="text-6xl text-red-700">404</h1>
      <p>Sorry, the hampsters couldnt find that page</p>
    </>
  )
}

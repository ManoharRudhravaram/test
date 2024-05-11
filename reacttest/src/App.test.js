import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

// test(' home component text test',()=>{
//   render(<App/>)
//   let data=screen.getByText('Hello react application')
//   expect(data).toBeInTheDocument()
// })

// test('home component img title test',()=>{
//   render(<App/>)
//   let title=screen.getByTitle("pikachu")
//   expect(title).toBeInTheDocument()
// })

// test('heading test',()=>{
//   render(<App/>)
//   let heading=screen.getByText('text test')
//   expect(heading).toBeInTheDocument()
// })

// test('input test',()=>{
//   render(<App/>)
//   let passwordField=screen.getByPlaceholderText('enter password')
//   expect(passwordField).toBeInTheDocument()
//   expect(passwordField).toHaveAttribute('name','password')
//   expect(passwordField).toHaveAttribute("id","password")
// })

describe('ui test ',()=>{
  test('input testing',()=>{
    render(<App/>)
    let input=screen.getByRole('textbox')
    fireEvent.change(input,{target:{value:"ab"}})
    expect(input.value).toBe("abc")
  })
})
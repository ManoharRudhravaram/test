import {render, screen} from '@testing-library/react';
import App from '../App';

// test(' home1 component text test',()=>{
//   render(<App/>)
//   let data=screen.getByText('Hello react application')
//   expect(data).toBeInTheDocument()
// })

// test('home2 component img title test',()=>{
//   render(<App/>)
//   let title=screen.getByTitle("pikachu")
//   expect(title).toBeInTheDocument()
// })

// test('heading1 test',()=>{
//   render(<App/>)
//   let heading=screen.getByText('text test')
//   expect(heading).toBeInTheDocument()
// })

// test('input1 test',()=>{
//   render(<App/>)
//   let passwordField=screen.getByPlaceholderText('enter password')
//   expect(passwordField).toBeInTheDocument()
//   expect(passwordField).toHaveAttribute('name','password')
//   expect(passwordField).toHaveAttribute("id","password")
// })

// describe('UI Group testing',()=>{
//     test(' home1 component text test',()=>{
//         render(<App/>)
//         let data=screen.getByText('Hello react application')
//         expect(data).toBeInTheDocument()
//       })
      
//       test('home2 component img title test',()=>{
//         render(<App/>)
//         let title=screen.getByTitle("pikachu")
//         expect(title).toBeInTheDocument()
//       })
      
//       test('heading1 test',()=>{
//         render(<App/>)
//         let heading=screen.getByText('text test')
//         expect(heading).toBeInTheDocument()
//       })
      
//       test('input1 test',()=>{
//         render(<App/>)
//         let passwordField=screen.getByPlaceholderText('enter password')
//         expect(passwordField).toBeInTheDocument()
//         expect(passwordField).toHaveAttribute('name','password')
//         expect(passwordField).toHaveAttribute("id","password")
//       })
// })

describe("JS Group Testing ",()=>{
    test("sum of 1+2 ",()=>{
        expect(1+2).toBe(3)
    })

    test("sub of 1-2 ",()=>{
        expect(1-2).toBe(-1)
    })
})


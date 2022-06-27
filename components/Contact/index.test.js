import React from "react";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'
import Nav from "../Nav";

afterEach(cleanup);

describe('renders', () => {
  it('renders', () => {
    render(<Contact/>);
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact/>)
    expect(asFragment()).toMatchSnapshot()
  })
})
import React from "react";
import PopularCard from "./PopularCard";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {checkProps} from "../../test/testUtils";

const defaultProps = {
  title: 'Popular Card',
  concepts: ['test', 'test 1'],
};

test("renders component without errors", () => {
  render(<PopularCard {...defaultProps} />);
  const component = screen.getByTestId('popularCard');
  expect(component).not.toBeNull();
});

test("renders component with title from props", () => {
  render(<PopularCard {...defaultProps} />);
  const cardTitle = screen.getByText('Popular Card');
  expect(cardTitle).toHaveTextContent('Popular Card')
});

test("renders component with 'Student' label in stats", () => {
  const props = {
    title: 'Singular Student Number Card',
    concepts: ['concept1'],
    studentsEnrolled: 1,
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('studentsStat');
  expect(studentsLabel).toHaveTextContent('1 Student')
});

test("renders component with 'Students' label in stats", () => {
  const props = {
    title: 'Singular Student Number Card',
    concepts: ['concept1'],
    studentsEnrolled: 2,
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('studentsStat');
  expect(studentsLabel).toHaveTextContent('2 Students')
});

test("renders component with 'Review' label in stats", () => {
  const props = {
    title: 'Singular Review Number Card',
    concepts: ['concept1'],
    reviews: 1,
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('reviewsStat');
  expect(studentsLabel).toHaveTextContent('1 Review')
});

test("renders element with 'Reviews' label in stats", () => {
  const props = {
    title: 'Singular Review Number Card',
    concepts: ['concept1'],
    reviews: 2,
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('reviewsStat');
  expect(studentsLabel).toHaveTextContent('2 Reviews')
});

test("renders student element with '0' if prop supplied is less than zero", () => {
  const props = {
    title: 'Negative Students value',
    concepts: ['concept'],
    studentsEnrolled: -123
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('studentsStat');
  expect(studentsLabel).toHaveTextContent(/^0/);
});

test("renders reviews element with '0' if prop supplied is less than zero", () => {
  const props = {
    title: 'Negative Students value',
    concepts: ['concept'],
    reviews: -513
  };
  render(<PopularCard {...props} />);
  const studentsLabel = screen.getByTestId('reviewsStat');
  expect(studentsLabel).toHaveTextContent(/^0/);
});

// Not testing listOfConcepts yet as I believe we'll still have to make a decision about
// how many should be rendered per card and if we should display them with appended "..." at the end


test("does not throw warning with expected props", () => {
  const expectedProps = {
    title: 'title',
    concepts: ['concept1','concept2'],
    studentsEnrolled: 3,
    reviews: 1
  };
  checkProps(PopularCard, expectedProps);
});
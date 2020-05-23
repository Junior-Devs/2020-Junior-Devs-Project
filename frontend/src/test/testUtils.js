import checkPropTypes from "check-prop-types";

export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(Component.propTypes, conformingProps, 'prop', Component.name);
  expect(propError).toBeUndefined();
};
export default function validate(values) {
    let errors = {};
    if (!values.city) {
      errors.city = 'City is required';
    } 
    if (!values.country) {
      errors.country = 'Country is required';
    } 
    return errors;
  };
export default function Validation(values) {
  const errors = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if (values.name === '') {
    errors.name = 'Name is required'
  }

  if (values.email === '') {
    errors.email = 'Email is required'
  } else if (!email_pattern.test(values.email)) {
    errors.email = 'Email is not correct'
  }

  if (values.password === '') {
    errors.password = 'Password is required'
  } else if (!password_pattern.test(values.password)) {
    errors.password = 'Password is not correct'
  }

  return errors
}

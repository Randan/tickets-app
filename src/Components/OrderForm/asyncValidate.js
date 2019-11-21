const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const emailErrorMessage = 'Email already Exists';

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'foo@foo.com', 'bar@bar.com' ].includes(values.email)) {
        // eslint-disable-next-line
        throw { email: emailErrorMessage }
      }
    })
}

export default asyncValidate
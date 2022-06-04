export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      process.stdout.write('Got a response from the API\n');
      return { status: 200, body: 'Success ' };
    })
    .catch(new Error());
}

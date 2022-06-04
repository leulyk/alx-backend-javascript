export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'Success ' }))
    .catch(() => new Error())
    .finally(() => process.stdout.write('Got a response from the API\n'));
}

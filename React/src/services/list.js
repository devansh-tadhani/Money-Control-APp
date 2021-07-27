export function getList() {
  return fetch('http://localhost:26303/api/News')
    .then(data => data.json())
}

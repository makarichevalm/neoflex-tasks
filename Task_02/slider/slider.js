const baseURL = "https://jsonplaceholder.typicode.com/photos";
const fetchUsers = () => {
  axios.get(baseURL + "?_limit=15").then((response) => {
    const photos = response.data;
    console.log(`GET list users`, photos);
  });
};

fetchUsers();

const axios = require('axios');

// Replace 'your-api-endpoint' with the actual API endpoint for searching by author
const apiEndpoint = 'your-api-endpoint';

// Function to search for books by an author using promises
function searchByAuthor(authorName) {
  return new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/search?author=${encodeURIComponent(authorName)}`)
      .then(response => {
        resolve(response.data); // Assuming the response contains the list of books by the specified author
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Replace 'YourAuthorName' with the actual author's name to search for
const authorToSearch = 'YourAuthorName';

// Call the function using promises
searchByAuthor(authorToSearch)
  .then(booksByAuthor => {
    console.log(`Books by ${authorToSearch}:`, booksByAuthor);
  })
  .catch(error => {
    console.error('Error searching by author:', error.message);
    // Handle errors
  });

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const userTableBody = document.getElementById('userTableBody');
const errorMessage = document.getElementById('errorMessage');

// Function to display user data in the table
function displayUserData(users) {
    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = ` <tr class="row">
            <td class="column">${user.firstName || ''}</td>
            <td class="column">${user.lastName || ''}</td>
            <td class="column">${user.email || ''}</td>
            </tr>`;
        userTableBody.appendChild(row);
    });
}

// Function to handle search button click
searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        return;
    }
    try {
        const response = await fetch(`https://dummyjson.com/users/search?q=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Search failed');
        }
        const data = await response.json();

        if (Array.isArray(data.users)) {
            displayUserData(data.users);
        } else {
            displayError('No matching users found');
        }
    } catch (error) {
        displayError('Search failed. Please try again.');
    }
});

// Function to display error message
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// Initial data fetch
fetchUserData();

// Function to fetch and display user data for the first 10 users
async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();

        if (Array.isArray(data.users)) {
            // Display only the first 10 users
            const first10Users = data.users.slice(0, 10);
            displayUserData(first10Users);
        } else {
            throw new Error('Data is not in the expected format');
        }
    } catch (error) {
        displayError(error.message);
    }
}

// ...

// Initial data fetch for the first 10 users
fetchUserData();


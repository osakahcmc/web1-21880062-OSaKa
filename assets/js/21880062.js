const API = 'https://web1-api.vercel.app/api';
const AUTHENTICATE_API = 'https://web1-api.vercel.app/users';

async function getAuthenticateToken(username, password) {
    let response = await fetch(`${AUTHENTICATE_API}/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    let result = response.json();
    if (response.status == 200) {
        return result.token;
    }
    throw new Error(result.message);
}

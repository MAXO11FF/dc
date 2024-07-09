const clientId = '1248218190262042674';
const redirectUri = 'https://maxo11ff.github.io/dc/';
const scope = 'identify';

document.getElementById('login-button').href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;

// import { Tokens } from 'csrf';
import Tokens from 'csrf';


const tokens = new Tokens();

export function generateCSRFToken() {
  return tokens.create(process.env.CSRF_SECRET);
}

export function getCSRFToken() {
    return generateCSRFToken();
  }
  

export function verifyCSRFToken(token) {
  return tokens.verify(process.env.CSRF_SECRET, token);
}

export function csrfProtection(handler) {
  return async (req, res) => {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
      const csrfToken = req.headers['x-csrf-token'];
      if (!csrfToken || !verifyCSRFToken(csrfToken)) {
        return res.status(403).json({ error: 'Invalid CSRF token' });
      }
    }
    return handler(req, res);
  };
}

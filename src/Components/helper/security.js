// Import the crypto-js library
import CryptoJS from 'crypto-js';

const algorithm = 'aes-256-ctr';
const secretKey = '2f0ca865cf5c3758af11af4b8a0f51bd157bfccb6756ec1c66c13c32bc39e6ad'; // Replace with your own secret key

// Encrypt function
export const encrypt = (text) => {
    try {
        const iv = CryptoJS.randomBytes(16); // Use CryptoJS for random byte generation
        const cipher = CryptoJS.createCipheriv(algorithm, secretKey, iv);
        const encrypted = cipher.update(text, 'utf8').finalize('hex'); // Use CryptoJS for encryption
        return {
            iv: iv.toString('hex'),
            data: encrypted,
        };
    } catch (error) {
        throw error;
    }
};

// Decrypt function
export const decrypt = (hash) => {
    try {
        const decipher = CryptoJS.createDecipheriv(algorithm, secretKey, CryptoJS.enc.Hex.parse(hash.iv));
        const decrypted = decipher.update(CryptoJS.enc.Hex.parse(hash.data)).finalize('utf8');
        return JSON.parse(decrypted.toString());
    } catch (error) {
        throw error;
    }
};
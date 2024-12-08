/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the crypto-js library
import CryptoJS from 'crypto-js';

// Secret key (you can store this securely in environment variables or elsewhere)
const secretKey = '2f0ca865cf5c3758af11af4b8a0f51bd157bfccb6756ec1c66c13c32bc39e6ad'; // Should be stored securely

// Encrypt function
export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Decrypt function
export const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext?.data, secretKey);
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        throw new Error("Invalid ciphertext or decryption failed");
    }
};
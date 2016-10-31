import { genSalt, hash, compare } from 'bcrypt';

export const createSalt = (rounds) => new Promise((resolve, reject) => genSalt(rounds, (err, salt) => resolve(salt)));
export const createHash = (toHash, salt) => new Promise((resolve, reject) => hash(toHash, salt, (err, hashed) => resolve(hashed)));
export const compareHash = (plaintext, hash) => new Promise((resolve, reject) => compare(plaintext, hash, (err, equals) => resolve(equals)));

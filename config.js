// config.js - ไฟล์การตั้งค่า
const LIFF_ID = '2007689860-yYPDL5dr';  
const API_URL = 'https://script.google.com/macros/s/AKfycbz62kGutskWZ_4y8lbulnFtmSzD3BhTUmNNKJqAen3o2Zpw4fGNY1o44yuzDQe1l-N-/exec';
const GOLD_PRICE_API = 'https://script.google.com/macros/s/AKfycbwgvstkxFOR9p6zOV2d8iEGagbpQ6h8C3BhPnDCoB56jvmbAwSG0A9a36r6oRxNkBXQ/exec';
const GRAMS_PER_BAHT = 15.244;
// const SLIP_FOLDER_ID = '1jOsUGHmNIJ6KxMaLm1O8ENoEnUc9Kzd_';
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

// Global Variables
let currentGoldPrices = {
    bar: { buyPrice: 0, sellPrice: 0 },
    ornament: { buyPrice: 0, sellPrice: 0 }
};
let BANK_ACCOUNTS = {};

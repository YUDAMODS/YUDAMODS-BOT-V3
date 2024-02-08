const chalk = require('chalk')
const fs = require('fs')
const axios = require('axios')
const FormData = require("form-data");

exports.hitungmundur = async () => {
    // Menentukan tanggal Idul Fitri untuk tahun tertentu (ubah sesuai kebutuhan)
    let from = new Date('May 22, 2024 00:00:00').getTime();

    // Waktu saat ini
    let now = Date.now();

    // Selisih antara tanggal Idul Fitri dan waktu saat ini
    let distance = idulFitriDate - now;

    // Menghitung hari, jam, menit, dan detik dari selisih waktu
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mengembalikan string dengan format hitung mundur Idul Fitri
    return `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

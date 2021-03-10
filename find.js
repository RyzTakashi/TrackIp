/* Created By Ryzzz */
/* Jangan Lupa Subs YT ku yaa */

// Module

var req = require('request' );         // npm install --save request
var bac = require('readline');         // npm install --save readline
var warna = require('colors');         // npm install --save colors

/* ........................................ */
warna.setTheme({
    hijau  : 'green',
    biru   : 'blue',
    merah  : 'red',
    kuning : 'yellow'
});

const tanya = bac.createInterface({input: process.stdin, output: process.stdout});

/* ........................................ */

key = ["2388107e74e7fe5424554967771b568b","7a1afbf9b63efdf5bdb30a08a736673c229b3ea738e667e0d259c135"]

/* ........................................ */
                              
console.log("   ___               ".hijau)
console.log("  / _ \__ ___________".hijau)
console.log(" / , _/ // /_ /_ /_ /".hijau)
console.log("/_/|_|\_, //__/__/__/".hijau)
console.log("     /___/ ".hijau)
console.log("        C" + " : " + "R".merah + "yzzz ")
console.log("      SUBS MY YT")
console.log("")
console.log("=====================================")
console.log('');
/* ........................................ */

console.log(''); tanya.question('[!] Masukan alamat ip : ', (iplu) => {

/* ........................................ */

req("http://api.ipstack.com/" + `${iplu}` +  "?access_key=" + key[0], function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".biru + "!".merah + "]".biru + "  Tipe Ip            : " + ip["type"])
        console.log("[".biru + "!".merah + "]".biru + "  Negara             : " + ip["country_name"])
        console.log("[".biru + "!".merah + "]".biru + "  Kode Negara        : " + ip["country_code"])
        console.log("[".biru + "!".merah + "]".biru + "  Bahasa Negara      : " + ip.location.languages[0].native)
        console.log("[".biru + "!".merah + "]".biru + "  Benua              : " + ip["continent_name"])
        console.log("[".biru + "!".merah + "]".biru + "  Garis lintang      : " + ip["latitude"])
        console.log("[".biru + "!".merah + "]".biru + "  Garis Bujur        : " + ip["longitude"])
        console.log("[".biru + "!".merah + "]".biru + "  Kode Telepon       : " + "+" + ip["location"]["calling_code"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("http://ip-api.com/json/" + `${iplu}` + "?fields=mobile", function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Perangkat Mobile   : " + ip["mobile"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("http://free.ipwhois.io/json/" + `${iplu}`, function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".hijau + "!".merah + "]".hijau + "  Zona Waktu         : " + ip["timezone"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Format Zona Waktu  : " + ip["timezone_gmt"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kota               : " + ip["city"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Provinsi           : " + ip["region"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Mata Uang          : " + ip["currency"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Kode Mata Uang     : " + ip["currency_code"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Simbol Mata Uang   : " + ip["currency_symbol"])
        console.log("[".hijau + "!".merah + "]".hijau + "  Nama Provider      : " + ip["isp"])
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
})

/* ........................................ */

req("https://api.ipdata.co/" + `${iplu}` +"?api-key=" + key[1], function (error, response, body){
    ip = JSON.parse(body)
    if(response.statusCode == 200) {
        console.log("[".kuning + "!".merah + "]".kuning + "  Zona Waktu Bagian  : " + ip["time_zone"]["abbr"])
        console.log("[".kuning + "!".merah + "]".kuning + "  Operator ISP       : " + ip["organisation"])
        console.log("[".kuning + "!".merah + "]".kuning + "  Koneksi Tor        : " + ip["threat"]["is_tor"])
        console.log("[".kuning + "!".merah + "]".kuning + "  Koneksi Proxy      : " + ip["threat"]["is_proxy"])
        console.log("[".kuning + "!".merah + "]".kuning + "  Total Pencarian IP : " + ip["count"] + "x")
    }else if(response.statusCode == 502) {
        console.log("Periksa Koneksi Internet Anda !")
    }else{
        console.log("Galat, coba lagi !")
    }
}); tanya.close();
}); 

/* ........................................ */

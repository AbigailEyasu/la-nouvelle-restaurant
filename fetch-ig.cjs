const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  { url: 'https://www.instagram.com/p/CguAmRwoFnd/?igsh=YTcwZDIwaDFqdnY2', name: 'hero.jpg' },
  { url: 'https://www.instagram.com/p/CgURParoiSb/?igsh=OTE0em9hdW92c2Rm', name: 'gallery1.jpg' },
  { url: 'https://www.instagram.com/p/ChcqsOIoCMr/?igsh=MTh0aHV3dDk3dDluNw==', name: 'gallery2.jpg' },
  { url: 'https://www.instagram.com/p/CiSuQKLotDM/?igsh=MWZldzJ1c3I4anNvZQ==', name: 'gallery3.jpg' },
  { url: 'https://www.instagram.com/p/Chuy4zgIeKg/?igsh=MXIwYjQ5YTdjZ2V1cQ==', name: 'gallery4.jpg' },
  { url: 'https://www.instagram.com/p/CgCLoV-IgYH/?igsh=MXQzdjRuN3N1dW83Zw==', name: 'gallery5.jpg' },
  { url: 'https://www.instagram.com/p/CevxlcIItrs/?igsh=Y2g2YTR6bDNlNXZx', name: 'gallery6.jpg' }
];

const destDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

async function fetchIgImage() {
  for (const item of urls) {
    try {
      console.log(`Fetching ${item.url}...`);
      const { data } = await axios.get(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
      });
      const $ = cheerio.load(data);
      const imageUrl = $('meta[property="og:image"]').attr('content');
      
      if (imageUrl) {
        console.log(`Found image for ${item.name}: ${imageUrl}`);
        const filepath = path.join(destDir, item.name);
        await downloadImage(imageUrl, filepath);
        console.log(`Saved ${item.name}`);
      } else {
        console.log(`No og:image found for ${item.name}`);
      }
    } catch (err) {
      console.error(`Error fetching ${item.name}:`, err.message);
    }
  }
}

fetchIgImage();

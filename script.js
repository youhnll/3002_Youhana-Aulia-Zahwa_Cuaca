const data = {
  jkt: {
    place: "Jakarta, Indonesia",
    temp: 31,
    desc: "Cerah berawan",
    humidity: 68,
    wind: 12,
    uv: 6,
    days: [
      ["Sen", "⛅", 31, 24],
      ["Sel", "🌧️", 28, 23],
      ["Rab", "☀️", 33, 25],
      ["Kam", "⛅", 30, 24],
      ["Jum", "🌧️", 27, 22]
    ]
  },

  bdg: {
    place: "Bandung, Indonesia",
    temp: 22,
    desc: "Berkabut",
    humidity: 80,
    wind: 8,
    uv: 3,
    days: [
      ["Sen", "🌫️", 22, 17],
      ["Sel", "⛅", 23, 17],
      ["Rab", "🌧️", 20, 16],
      ["Kam", "☀️", 25, 18],
      ["Jum", "⛅", 23, 17]
    ]
  },

  sby: {
    place: "Surabaya, Indonesia",
    temp: 34,
    desc: "Cerah",
    humidity: 60,
    wind: 14,
    uv: 8,
    days: [
      ["Sen", "☀️", 34, 26],
      ["Sel", "☀️", 35, 27],
      ["Rab", "⛅", 33, 26],
      ["Kam", "☀️", 34, 27],
      ["Jum", "⛅", 32, 25]
    ]
  },

  jbr: {
    place: "Jember, Indonesia",
    temp: 29,
    desc: "Cerah berawan",
    humidity: 70,
    wind: 10,
    uv: 7,
    days: [
      ["Sen", "⛅", 29, 22],
      ["Sel", "☀️", 31, 23],
      ["Rab", "⛅", 28, 22],
      ["Kam", "🌧️", 26, 21],
      ["Jum", "☀️", 30, 23]
    ]
  },

  bwi: {
    place: "Banyuwangi, Indonesia",
    temp: 32,
    desc: "Cerah",
    humidity: 65,
    wind: 11,
    uv: 8,
    days: [
      ["Sen", "☀️", 32, 25],
      ["Sel", "⛅", 31, 24],
      ["Rab", "🌧️", 29, 23],
      ["Kam", "☀️", 33, 25],
      ["Jum", "⛅", 30, 24]
    ]
  },

  lmj: {
    place: "Lumajang, Indonesia",
    temp: 27,
    desc: "Berawan",
    humidity: 75,
    wind: 9,
    uv: 5,
    days: [
      ["Sen", "⛅", 27, 21],
      ["Sel", "🌧️", 25, 20],
      ["Rab", "⛅", 28, 21],
      ["Kam", "☀️", 29, 22],
      ["Jum", "⛅", 26, 20]
    ]
  },

  smg: {
    place: "Semarang, Indonesia",
    temp: 33,
    desc: "Cerah",
    humidity: 62,
    wind: 13,
    uv: 9,
    days: [
      ["Sen", "☀️", 33, 26],
      ["Sel", "☀️", 34, 26],
      ["Rab", "⛅", 31, 25],
      ["Kam", "☀️", 33, 26],
      ["Jum", "🌧️", 29, 24]
    ]
  },

  bali: {
    place: "Bali, Indonesia",
    temp: 30,
    desc: "Cerah berawan",
    humidity: 72,
    wind: 15,
    uv: 7,
    days: [
      ["Sen", "⛅", 30, 24],
      ["Sel", "☀️", 31, 24],
      ["Rab", "🌧️", 28, 23],
      ["Kam", "⛅", 30, 24],
      ["Jum", "☀️", 32, 25]
    ]
  }
};

const cityNames = {
  jkt: "jakarta",
  bdg: "bandung",
  sby: "surabaya",
  jbr: "jember",
  bwi: "banyuwangi",
  lmj: "lumajang",
  smg: "semarang",
  bali: "bali"
};

const place = document.getElementById('place');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const uv = document.getElementById('uv');
const dayList = document.getElementById('dayList');
const buttons = document.querySelectorAll('.city-btn');

function render(key) {
  const d = data[key];

  place.textContent = d.place;
  temp.textContent = d.temp + '°';
  desc.textContent = d.desc;
  humidity.textContent = d.humidity + '%';
  wind.textContent = d.wind + ' km/j';
  uv.textContent = d.uv;

  dayList.innerHTML = d.days
    .map(([day, icon, hi, lo]) =>
      `<div class="day-row">
        <span class="day">${day}</span>
        <span class="icon">${icon}</span>
        <span class="range">${hi}° / ${lo}°</span>
      </div>`
    )
    .join('');
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('notFound').style.display = 'none';

    render(btn.dataset.city);
  });
});

// Pencarian kota lewat input teks
const searchInput = document.getElementById('searchInput');
const notFound = document.getElementById('notFound');

searchInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  const query = searchInput.value.trim().toLowerCase();
  if (query === '') return;

  const foundKey = Object.keys(cityNames).find(
    key =>
      cityNames[key] === query ||
      cityNames[key].startsWith(query)
  );

  if (foundKey) {
    buttons.forEach(b =>
      b.classList.toggle('active', b.dataset.city === foundKey)
    );

    notFound.style.display = 'none';
    render(foundKey);
  } else {
    notFound.style.display = 'block';
  }
});

render('jkt');
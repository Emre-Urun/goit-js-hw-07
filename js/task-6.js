// İnput Alanı
const inputAlani = document.querySelector('#controls input[type="number"]');

// Create Butonu
const createButon = document.querySelector("button[data-create]");

// Destroy Butonu
const destroyButon = document.querySelector("button[data-destroy]");

// Box(div)
const box = document.querySelector("#boxes");

// Rastgele renk fonksiyonu
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(event) {
  // Burada girilen değeri number olarak güncelliyoruz.
  const input = Number(inputAlani.value);
  // ilk kutunun 30 px olması için bir değişken tanımlıyoruz.
  const baslangicBoyut = 30;
  //  100den fazla kutu oluşmaması için if kullanıyoruz.
  if (input > 0 && input <= 100) {
    // değer girildikten sonra inputu temizlemek ve yeni değere göre kutu oluşması için innetHTML kullanıyoruz.
    box.innerHTML = "";
    // for döngüsü kullanarak yeni oluşturulan kutuların boyutunu ve rengini ayarlıyoruz.
    for (let i = 0; i < input; i++) {
      const yeniKutu = document.createElement("div");
      const boyut = baslangicBoyut + i * 10;
      yeniKutu.style.width = `${boyut}px`;
      yeniKutu.style.height = `${boyut}px`;
      yeniKutu.style.backgroundColor = getRandomHexColor();
      box.appendChild(yeniKutu);
    }
    // ekstra 100 den fazla değer girilirse ekranda hata yazması için komut veriyoruz.
  } else if (input > 100) {
    const hata = document.createElement("p");
    hata.textContent = `Girilen Değer 100' den büyük olamaz`;
    box.append(hata);
  }
  // butona basılınca input alanaının temizlenmesi için komut veriyoruz.
  inputAlani.value = "";
}

function delBox() {
  box.innerHTML = "";
  inputAlani.value = "";
}
createButon.addEventListener("click", createBox);
destroyButon.addEventListener("click", delBox);

const registerForm = document.querySelector(".login-form");

function foo(event) {
  // İlk olarak sayfanın yenilenmesini engelliyoruz.
  event.preventDefault();

  // Gönderilen mail ve şifreleri değişken içerisinde tutuyoruz.
  const mail = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();

  // Girilen değerlerin doğruluğunu kontrol ediyoruz ve konsola yazdırıyoruz.
  if (mail === "" || pass === "") {
    return console.log("All form fields must be filled in");
  } else {
    console.log("Giriş Başarili");
  }

  // Daha sonra gönderilen şifre ve mailleri bir nesne oluşturarak içerisinde saklıyoruz.
  const girilen = new GirilenDegerler({ mail, pass });
  //   İnput alanlarını temizlemek için reset methodunu çağırıyoruz.
  event.target.reset();
}
class GirilenDegerler {
  mail;
  sifre;
  constructor({ mail, pass }) {
    this.mail = mail;
    this.pass = pass;
    console.log({ Mail: this.mail, Sifre: this.pass });
  }
}

registerForm.addEventListener("submit", foo);

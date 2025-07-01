const category = document.getElementById("categories");
const uzunluk = category.querySelectorAll(".item");
console.log(`Number of categories: ${uzunluk.length}`);

function categories(param) {
  for (const p of param) {
    const title = p.querySelector("h2").textContent;
    const item = p.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
  }
}

categories(uzunluk);

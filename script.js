// ✅ دالة تجيب ID عشوائي من 1 لحد 30
function getRandomId() {
  return Math.floor(Math.random() * 30) + 1;
}

// ✅ باستخدام .then()
function fetchWithThen() {
  const id = getRandomId();
  fetch(`https://dummyjson.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("then-result").textContent =
        `Product #${id}: ${data.title}`;
      document.getElementById("then-price").textContent =
        `💰 Price: $${data.price}`;
      document.getElementById("then-img").src = data.thumbnail;
    })
    .catch(error => console.error("Error with .then():", error));
}

// ✅ باستخدام async/await
async function fetchWithAsync() {
  try {
    const id = getRandomId();
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    document.getElementById("async-result").textContent =
      `Product #${id}: ${data.title}`;
    document.getElementById("async-price").textContent =
      `💰 Price: $${data.price}`;
    document.getElementById("async-img").src = data.thumbnail;
  } catch (error) {
    console.error("Error with async/await:", error);
  }
}

// ✅ زرار للتحديث
document.getElementById("refresh-btn").addEventListener("click", () => {
  fetchWithThen();
  fetchWithAsync();
});

// ✅ أول تحميل
fetchWithThen();
fetchWithAsync();

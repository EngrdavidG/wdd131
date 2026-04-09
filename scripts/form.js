// PRODUCT ARRAY
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" }
];

// POPULATE SELECT
const select = document.getElementById("product");

if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
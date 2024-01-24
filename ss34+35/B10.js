// "innerText" trả về văn bản hiển thị của một phần tử, loại bỏ các thẻ HTML.
// "textContent" trả về toàn bộ văn bản bên trong phần tử, bao gồm cả văn bản ẩn và văn bản hiển thị trên trang.
// "innerHTML" trả về toàn bộ nội dung của một phần tử, bao gồm cả các thẻ HTML.
let element = document.getElementById("example");

console.log("innerText: " + element.innerText);

console.log("textContent: " + element.textContent);

console.log("innerHTML: " + element.innerHTML);

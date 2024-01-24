let names = ["Nguyễn Văn Phúc", "Lại Hoàng Nam", "Nguyễn Đình Dương"];
let ul = document.createElement("ul");
for(let key in names){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[key]));
    ul.appendChild(li);
}
document.body.appendChild(ul);

const items = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "The Lord of the Rings" },
  { id: 6, name: "Harry Potter and the Sorcerer's Stone" },
  { id: 7, name: "The Hitchhiker's Guide to the Galaxy" },
  { id: 8, name: "The Catcher in the Rye" },
  { id: 9, name: "And Then There Were None" },
  { id: 10, name: "The Hobbit" },
  { id: 11, name: "The Little Prince" },
  { id: 12, name: "The Alchemist" },
  { id: 13, name: "The Da Vinci Code" },
  { id: 14, name: "Gone Girl" },
  { id: 15, name: "The Girl with the Dragon Tattoo" },
];
const listItem = document.querySelector(".items");
const inpSearch = document.querySelector("#inpSearch");
function showItems(list) {
  listItem.innerHTML = "";
  list.forEach((i) => {
    let item = document.createElement("li");
    item.setAttribute("class", "item");
    item.textContent = i.name;
    listItem.appendChild(item);
  });
}
inpSearch.addEventListener("input", function () {
  if (inpSearch.value === "") {
    showItems(items);
  } else {
    let filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(inpSearch.value.toLowerCase())
    );
    showItems(filteredItems);
  }
});
showItems(items);

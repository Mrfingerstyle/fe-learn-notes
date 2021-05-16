// 语法检查相关选项

let a;

// function add(a, b) {
//     return a + b
// }

function show(this: Window) {
  console.log(this);
}

let div = document.getElementById("box");
if (div) {
  div.onclick = function () {
    console.log("click");
  };
}

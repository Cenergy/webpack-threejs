export default function second() {
  console.log("Go: second ->  $", $);
  const app = document.getElementById("app");
  $("#app").empty();
  const secondDiv = document.createElement("div");
  secondDiv.innerHTML = "<h1>2222222222</h1>";
  app.append(secondDiv);
}

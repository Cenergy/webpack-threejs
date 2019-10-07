class ButtonContent {
  constructor(options) {
    const { id = null, value, fn } = options;

    $("#app").empty();
    this.btn = document.createElement("input");
    this.btn.setAttribute("type", "button");
    if (id) {
      this.btn.id = `${id}`;
    }
    this.btn.classList = "button";
    this.btn.value = `${value}`;
    this.btn.onclick = fn;
    return this.btn;
  }
}
export default ButtonContent;

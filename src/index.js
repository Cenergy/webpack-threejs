import first from "./test/first";
import second from "./test/second";
import ButtonContent from "./utils/ceateButton";

const container = document.getElementById("content");

const btn1 = new ButtonContent({ value: "第一个哦", fn: first });
const btn2 = new ButtonContent({ value: "第2个哦", fn: second, id: "btn2" });

// 默认执行第一个哦
first();
container.append(btn1);
container.append(document.createElement("br"));
container.append(btn2);

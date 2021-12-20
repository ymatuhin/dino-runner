import { hydrate, render } from "preact";
import { App } from "./app";
import "./index.css";

const $app = document.getElementById("app")!;
const method = $app.hasChildNodes() ? hydrate : render;
method(<App />, $app);

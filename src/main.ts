import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Sixty Developer!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation for vite</a><br>
  <a href="https://www.typescriptlang.org/docs/" target="_blank">Documentation for TypeScript</a><br>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank">Documentation for Semantic release</a><br>
  <a href="https://circleci.com/docs/" target="_blank">Documentation for CircleCi</a><br>
`;

import reactLogo from "./../../assets/react.svg";

function Logo() {
  return (
    <>
      <h2>halo semua ini logo dari Micko</h2>
      <a href="https://vite.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  );
}
function CobaLogo() {
  return (
    <div>
      <h3>Function ketiga</h3>
    </div>
  );
}

export { Logo, CobaLogo };

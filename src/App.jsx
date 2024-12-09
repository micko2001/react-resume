import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubLogo from "./logo/211904_social_github_icon.png";
import browserLogo from "./logo/4213462_communication_global_internet_network_web_icon.png";
import linkLogo from "./logo/linkedin-logo.png";
import fotoProfile from "./foto-diri.jpg";
import { Logo, CobaLogo } from "./assets/components/logo.jsx";
// import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      {/* Hello world */}
      <header className="navbar">
        <ul className="ul-nav">
          <li className="li-nav" style={{ float: "left" }}>
            <h1>Curriculum Vitae</h1>
          </li>
          <li className="li-nav">
            <a href="https://micko-wijayanto.my.canva.site/" target="_blank">
              <img className="logo" src={browserLogo} alt="website-pribadi" />
            </a>
          </li>
          <li className="li-nav">
            <a href="https://github.com/micko2001" target="_blank">
              <img className="logo" src={githubLogo} alt="github-logo" />
            </a>
          </li>
          <li className="li-nav">
            <a
              href="https://www.linkedin.com/in/micko-wijayanto/"
              target="_blank"
            >
              {" "}
              <img className="logo" src={linkLogo} alt="linkedin-logo" />
            </a>
          </li>
        </ul>
      </header>
      <div className="nama">
        <div className="grid">
          <img id="foto-diri" src={fotoProfile} alt="foto-diri" />
          <h2>MICKO WIJAYANTO</h2>
        </div>
        <br />
        <div className="grid">
          <p>
            {" "}
            I am an Electrical Engineering graduate from Universitas Brawijaya
            with a GPA of 3.7 and an alumnus of Cloud Computing Bangkit Academy.
            With a solid foundation in IoT, networking, computing, and software
            engineering, I possess hands-on experience and strong leadership and
            communication skils. I am eager to apply my expertise to innovative
            solutions, contributing effectively to the industry across various
            domain
          </p>
        </div>
        <div className="grid">
          <table>
            <tbody>
              <tr>
                <td>Tempat, tanggal lahir:</td>
                <td>Kediri, 20 September 2001</td>
              </tr>
              <tr>
                <td>Gender: </td>
                <td>Laki-laki</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>micko.wijayanto@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button"
                    onclick="location.href='alamat.html'"
                  >
                    Alamat
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid">
          <h2>Pengalaman Kerja</h2>
          <ul>
            <li>ODP IT Bank Syariah Indonesia (2024-sekarang)</li>
          </ul>
        </div>
        <div className="grid">
          <h2>Riwayat Pendidikan</h2>
          <ul>
            <li>Teknik Elektro, Universitas Brawijaya (2020-2024)</li>
            <li>SMA Negeri 1 Kediri (2017-2020)</li>
            <li>SMP Negeri 1 Kediri (2015-2017)</li>
          </ul>
        </div>
        <div className="grid">
          <h2>Certification</h2>
          <ul>
            <li> ACA Cloud Computing Certification Alibaba Cloud</li>
            <li>Associate Cloud Engineer Google Cloud</li>
            <li>Google IT Support Certificate Coursera</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

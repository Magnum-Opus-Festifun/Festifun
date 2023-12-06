// eslint-disable-next-line no-unused-vars
import React from 'react';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-container text-white" style={{ backgroundColor: 'rgb(113, 165, 208)' }}>
      <hr className="footer-line" />

      <div className="left-section">
        <div className="logo">
          <img src="https://github.com/Magnum-Opus-Festifun/punyabima/blob/main/aset/logo%20biru.png?raw=true" alt="Logo" style={{ width: '85%' }} />
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia quo quibusdam in optio inventore
          architecto eaque laboriosam expedita accusamus mollitia distinctio deserunt cumque laborum tempore debitis,
          obcaecati, earum doloribus?.
        </p>
        <div className="social-media-icons">
          <Facebook size={24} color="white" />
          <Twitter size={24} color="white" />
        </div>
      </div>

      <div className="middle-section">
        <div className="event-plans">
          <h3 style={{ color: 'white' }}>Rencana Event</h3>
          <ul>
            <li style={{ color: 'white' }}>Membuat dan Mengatur</li>
            <li style={{ color: 'white' }}>Jual Tiket</li>
            <li style={{ color: 'white' }}>Online RSVP</li>
            <li style={{ color: 'white' }}>Online Events</li>
          </ul>
        </div>

        <div className="festifun">
          <h3 style={{ color: 'white' }}>Festifun</h3>
          <ul>
            <li style={{ color: 'white' }}>Tentang Kami</li>
            <li style={{ color: 'white' }}>Lihat Event</li>
            <li style={{ color: 'white' }}>Kontak Kami</li>
            <li style={{ color: 'white' }}>Pusat Bantuan</li>
            <li style={{ color: 'white' }}>FAQ</li>
            <li style={{ color: 'white' }}>Privacy</li>
            <li style={{ color: 'white' }}>Sistem</li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="stay-connected">
          <h3 style={{ color: 'white' }}>Hubungi Kami</h3>

          <div className="email-input">
            <input type="email" placeholder="Masukkan email Anda" />
            <button style={{ backgroundColor: 'white', color: 'lightblue' }}>Kirim</button>
          </div>
        </div>
      </div>
      <hr className="footer-line" />

     <div className="copyright textCenter" style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023 Magnum Opus</div>

    </footer>
  );
};

export default Footer;

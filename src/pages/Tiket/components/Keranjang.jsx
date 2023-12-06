// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TrashFill } from 'react-bootstrap-icons'
import NamaAcara from './atoms/NamaAcara'
import TanggalAcara from './atoms/TanggalAcara'
import WaktuAcara from './atoms/WaktuAcara'
import LokasiAcara from './atoms/LokasiAcara'
import PosterAcara from './atoms/PosterAcara'
import { WJNC, deadpool } from '../../../assets/main'
// import KeranjangList from './molecules/KeranjangList'
// import { amikom } from '../../../assets/main'

function Keranjang() {
  return (
    <>
    <div className="keranjang-container">
      <div className="thumbnail-container">
       <PosterAcara PosterAcara={deadpool}/>
      </div>
      <div className="info-container">
        <div className="info-section">
          <div className="event-info">
            <NamaAcara NamaAcara='WJNC 2023'/>
          </div>
          <div className="event-info">
           <TanggalAcara TanggalAcara='Jum, 9 November'/>
          </div>
        </div>
        <div className="divider"></div>
        <div className="info-section">
          <div className="event-info">
            <WaktuAcara WaktuAcara='12:00'/>
          </div>
          <div className="event-info">
            <LokasiAcara LokasiAcara='Sleman'/>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="buy-button">Beli sekarang</button>
        <TrashFill size={24} color='#3F475A' />
      </div>
      
    </div>
    <div className="keranjang-container">
      <div className="thumbnail-container">
       <PosterAcara PosterAcara={WJNC}/>
      </div>
      <div className="info-container">
        <div className="info-section">
          <div className="event-info">
            <NamaAcara NamaAcara='WJNC 2023'/>
          </div>
          <div className="event-info">
           <TanggalAcara TanggalAcara='Jum, 9 November'/>
          </div>
        </div>
        <div className="divider"></div>
        <div className="info-section">
          <div className="event-info">
            <WaktuAcara WaktuAcara='12:00'/>
          </div>
          <div className="event-info">
            <LokasiAcara LokasiAcara='Sleman'/>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="buy-button">Beli sekarang</button>
        <TrashFill size={24} color='#3F475A' />
      </div>
      
    </div>
    </>
  )
}

export default Keranjang
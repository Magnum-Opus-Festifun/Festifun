import { bannerHome } from "../../../../assets/main"

function BannerHome() {
  return (
    <div className="bannerContainer">
      <div className="banner-container">
        <div className="banner-img">
          <img src= {bannerHome} alt="Image" />
        </div>
        <div className="banner-content">
          <h2>Daftarkan Event Anda</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos voluptas delectus laboriosam dolores in modi labore ex, commodi possimus culpa iure, temporibus quod dolorum voluptatum, ipsum magni sunt reprehenderit!</p>
        </div>
        <div className="banner-button">
          <button>Buat Event Kamu Disini!</button>
        </div>
      </div>
      </div>
  
  )
}

export default BannerHome
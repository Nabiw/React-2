import React from "react";
import nabilImage from "/nabil.jpg";

function Address() {
  return (
    <section>
      <h2>Alamat</h2>
      <p>
        Kecamatan Lawang, Kabupaten Malang, <br />
        Perumahan Istana Bedali Agung BLOK U1 No.8
      </p>

      <a
        href="https://www.instagram.com/nradityax"
        target="_blank"
        rel="noreferrer"
      >
        ✨ Klik disini untuk Instagram saya ✨
      </a>

      <br /><br />

      <img 
        src={nabilImage} 
        alt="Foto Nabil" 
        width="200"
      />
    </section>
  );
}

export default Address;

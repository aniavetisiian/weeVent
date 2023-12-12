import React from "react";
import "./Footer.css";
import facebookIcon from "./iconImg/facebook.png";
import instagramIcon from "./iconImg/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <h2>Կոնտակտային տվյալներ</h2>

        <div>
          <p style={{ fontSize: 13 }}>Էլ. հասցե: anniavetisiann@gmail.com</p>
          <p style={{ fontSize: 13 }}>Հեռախոսահամար: +1 234 567 890</p>
        </div>
        <div className="social-icons">
          <button
            className="button"
            onClick={() => window.open("https://www.facebook.com")}
          >
            <img src={facebookIcon} alt="Facebook" />
          </button>

          <button
            className="button"
            onClick={() => window.open("https://www.instagram.com")}
          >
            <img src={instagramIcon} alt="Instagram" />
          </button>
        </div>
      </div>
      <div>
        <h2>Հասցե</h2>
        <p style={{ fontSize: 12 }}>Երևանի ինֆորմատիկայի պետական քոլեջ</p>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4659.909029991173!2d44.508989677937976!3d40.205884761510106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdb65d247c57%3A0xf943d6175cff5800!2z1LXWgNaH1aHVttWrINWr1bbWhtW41oDVtNWh1b_Vq9Wv1aHVtdWrINW61aXVv9Wh1a_VodW2INaE1bjVrNWl1bs!5e0!3m2!1sen!2sam!4v1701531065385!5m2!1sen!2sam"
          style={{
            width: "50",
            height: "100",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;

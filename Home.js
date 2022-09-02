import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="imgss"
        src="https://www.earticleblog.com/wp-content/uploads/2017/08/gp-amazon-sale-banner-29062017.jpg"
      />

      <div className="home_row">
        <Product
          id="111"
          title="Redmi 9A (Sea Blue, 2GB Ram, 32GB Storage)"
          price="120"
          rating={4}
          image="https://i.gadgets360cdn.com/large/Redmi_9A_india_launch_1599030650592.jpg?downsize=950:*&output-quality=80"
        />
        <Product
          id="112"
          title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop  Shadow Black"
          price="180"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41rSGZi9DCL.jpg"
        />
        <Product
          id="113"
          title="Fujifilm Instax Mini 9 Instant Camera - Flamingo Pink"
          price="80"
          rating={3}
          image="https://www.thephoblographer.com/wp-content/uploads/2017/03/Mini9_Pink.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="114"
          title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
          price="1200"
          rating={2}
          image="https://www.dealdeg.com/wp-content/uploads/2020/07/Sony-Bravia-108-cm-43-inches-4K-Ultra-HD-Certified-Android-LED-TV-KD-43X8000G-Black-2019-Model-1024x683.jpg"
        />
        <Product
          id="115"
          title="Lenovo Smart Scale"
          price="150"
          rating={5}
          image="https://www.maxitendance.com/wp-content/uploads/2012/05/Lenovo-smart-TV-K91-TV-Android-2.jpg"
        />
        <Product
          id="116"
          title="Intern INT-38C Acoustic Guitar Kit, With Bag, Strings, Pick And Strap, Black"
          price="160"
          rating={5}
          image="https://dealofthedays.com/wp-content/uploads/2020/05/intern-int-38c-bk-g-cutaway-right-handed-acoustic-guitar-kit-with-bag.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from './ui/Title';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'

function NextBtn(props) {
    const { className, onClick } = props;
    return (
      <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}><IoIosArrowForward size={26}/></button>
    );
  }function PrevBtn(props) {
    const { className, onClick } = props;
    return (
      <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}><IoIosArrowBack size={26}/></button>
    );
  }


export default function Campanies() {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(Banners);
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />

    };
    return (
        <div className="container mx-auto py-8">
            <Title>Kampanyalar</Title>
            <Slider className="-mx-2" {...settings}>
                {banners.length && banners.map((banner,index) => (
                    <div key={index}>
                        <picture className="block px-2">
                        <img src={banner.image} className="rounded-lg" />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

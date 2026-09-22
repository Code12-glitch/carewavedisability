import { useEffect } from "react";
import $ from "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeroSlider = () => {
    useEffect(() => {
        const slider = $(".hero-slider");

        slider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            smartSpeed: 1000,
            dots: true,
            nav: false,
        });

        return () => {
            slider.trigger("destroy.owl.carousel");
        };
    }, []);

    return null;
};

export default HeroSlider;
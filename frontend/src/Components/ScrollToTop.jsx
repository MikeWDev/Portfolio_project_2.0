import React, { useEffect } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import { Link } from "react-scroll";
import $ from "jquery";
import Button from "../Components/Button";
const ScrollToTop = () => {
  useEffect(() => {
    var amountScrolled = 500;

    $(window).scroll(function () {
      if ($(window).scrollTop() > amountScrolled) {
        $("button.all-p").addClass("show");
      } else {
        $("button.all-p").removeClass("show");
      }
    });
  }, []);

  return (
    <Link to="all-p" smooth={true} duration={1000}>
      <Button class="secondary all-p" text={<ArrowUp />} />
    </Link>
  );
};

export default ScrollToTop;

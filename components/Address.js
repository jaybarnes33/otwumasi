import React from "react";

const Address = () => {
  return (
    <div className="mt-3">
      <h5>Contact me on</h5>
      <address className="address">
        <ul>
          <a href="https://www.linkedin.com/in/jbotwumasi/">
            <span>
              <i className="mr-3 fab fa-linkedin"></i>
            </span>
          </a>

          <a href="https://twitter.com/jay_codes_">
            <span>
              <i className="mr-3 fab fa-twitter"></i>
            </span>
          </a>

          <a href="https://wa.me/233543288549/?text=Hi Barnes,">
            <span>
              <i className="mr-3 fab fa-whatsapp"></i>
            </span>
          </a>

          <a href="tel:+233543288549">
            <span>
              <i className="mr-3 fas fa-phone-alt"></i>
            </span>
          </a>
        </ul>
      </address>
    </div>
  );
};

export default Address;

import React from "react";

const Address = () => {
  return (
    <div className="mt-3">
      <address className="address">
        <h3 className="h5">Contact me on</h3>
        <ul>
          <a
            href="https://www.linkedin.com/in/jbotwumasi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="mr-3 fab fa-linkedin"></i>
            </span>
          </a>

          <a
            href="https://twitter.com/jay_codes_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="mr-3 fab fa-twitter"></i>
            </span>
          </a>

          <a
            href="https://wa.me/233249161070/?text=Hi Barnes,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="mr-3 fab fa-whatsapp"></i>
            </span>
          </a>

          <a href="tel:+233543288549" target="_blank" rel="noopener noreferrer">
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

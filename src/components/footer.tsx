import { useEffect } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min";


const Footer = () => {
    useEffect(() => {
      const script = document.createElement('script');
      const script1 = document.createElement('script');
      const script2 = document.createElement('script');
  
      script.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
      script1.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
      script2.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js";

      script.async = true;
      script1.async = true;
      script2.async = true;
  
      document.body.appendChild(script);
      document.body.appendChild(script1);
      document.body.appendChild(script2);
  
      return () => {
        document.body.removeChild(script);
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      }
    }, []);
    return (
      <div>
        <div className="gap-div"></div>
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-body" href="#">Open-Shop.com</a>
            </div>
        </footer>
      </div>
    );
};

export default Footer;
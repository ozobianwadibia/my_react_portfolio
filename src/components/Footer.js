import React from "react";

const thisYear = new Date();

function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="container-fluid">
        <div className="col-md-12">
          <p>Copyright &copy; {thisYear.getFullYear()} Ozobia Nwadibia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

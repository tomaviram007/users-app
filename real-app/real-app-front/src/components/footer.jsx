const Footer = () => {
  return (
    <p className="border-top pt-3 text-center text-light footerStyle">
     
      <span className="mx-1">  Dog <i className="bi bi-fingerprint"></i> It</span>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;

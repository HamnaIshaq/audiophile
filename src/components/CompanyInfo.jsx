const CompanyInfo = () => {
  return (
    <section className="short-company-info short-company-info-flex container">
      <div className="company-info">
        <h2 className="company-info-h2">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className="company-info-h2-subtitle">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="company-info-user-div">
        <img
          className="company-info-user-img"
          src="/images/woman-headphone.jpg"
          alt="a woman wearing headphone"
        />
      </div>
    </section>
  );
};

export default CompanyInfo;

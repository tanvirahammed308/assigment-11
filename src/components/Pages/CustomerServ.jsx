const CustomerServ = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center mt-10 font-bold text-3xl underline decoration-double p-5">
        Our Customer Support
      </h1>
      <div className="lg:flex gap-5">
        <div className="card lg:w-96 sm:w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Free home delivery</h2>
            <p>Provide free home delivery for all product over $100</p>
          </div>
        </div>
        <div className="card lg:w-96 sm:w-full sm:mt-5 bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">Quality Products</h2>
            <p>We ensure the product quality that is our main goal</p>
          </div>
        </div>
        <div className="card lg:w-96 sm:w-full sm:mt-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">7 Days Return</h2>
            <p>Return product within 7 days for any product you buy</p>
          </div>
        </div>
        <div className="card lg:w-96 sm:w-full sm:mt-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Online Support</h2>
            <p>We ensure the product quality that you can trust easily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServ;

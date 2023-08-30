const Contactus = () => {
  return (
    <>
      <h3 className="m-5">Welcome to our Contact us Page...</h3>
      <div className="w-96 m-auto">
        <div className="mb-3 text-left">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Contactus;

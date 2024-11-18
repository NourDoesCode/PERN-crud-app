function Navbar({ onOpen }) {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center border-fuchsia-600"></div>

        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-96"
          />
        </div>

        <div className="navbar-end">
          <button className="btn btn-success" onClick={onOpen}>
            Add Client
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

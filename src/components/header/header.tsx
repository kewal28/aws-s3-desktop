import React from "react"
import "./header.css";

export const Header:React.FC = () => {
    return <>
    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    {/* <!-- Container wrapper --> */}
    <div className="container-fluid">
      {/* <!-- Toggle button --> */}
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      {/* <!-- Search form --> */}
      <form className="d-none d-md-flex input-group w-auto my-auto">
        <input type="search" className="form-control rounded"
          placeholder='Search (ctrl + "/" to focus)'  />
        <span className="input-group-text border-0"><i className="fas fa-search"></i> Submit</span>
      </form>

      {/* <!-- Right links --> */}
      <ul className="navbar-nav ms-auto d-flex flex-row">
        {/* <!-- Avatar --> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
              height="22" alt="Avatar" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    {/* <!-- Container wrapper --> */}
  </nav>
    </>
}
  
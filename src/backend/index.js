import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./pages/footer";
// import './assets/css/demo.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/plugins.min.css';
// import './assets/css/kaiadmin.min.css';
// import './assets/css/dot-icons.css';
// import './assets/css/kaiadmin.min.css';

function IndexAdmin() {
    return (
        <div className="wrapper">
            <div className="sidebar" data-background-color="dark">
                <div className="sidebar-logo">
                {/* <!-- Logo Header --> */}
                <div className="logo-header" data-background-color="dark">
                    <Link href="/" className="logo">
                    <img
                        src='./assets/img/kaiadmin/logo_light.svg'
                        alt="navbar brand"
                        className="navbar-brand"
                        height="20"
                    />
                    </Link>
                    <div className="nav-toggle">
                    <button className="btn btn-toggle toggle-sidebar">
                        <i className="gg-menu-right"></i>
                    </button>
                    <button className="btn btn-toggle sidenav-toggler">
                        <i className="gg-menu-left"></i>
                    </button>
                    </div>
                    <button className="topbar-toggler more">
                    <i className="gg-more-vertical-alt"></i>
                    </button>
                </div>
                {/* <!-- End Logo Header --> */}
                </div>
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                    <li className="nav-item active">
                        <Link
                        data-bs-toggle="collapse"
                        to="/admin"
                        className="collapsed"
                        aria-expanded="false"
                        >
                        <i className="fas fa-home"></i>
                        <p>Trang Chủ</p>
                        </Link>
                        {/* <div className="collapse" id="dashboard">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="../demo1/index.html">
                                <span className="sub-item">Dashboard</span>
                            </a>
                            </li>
                        </ul>
                        </div> */}
                    </li>
                    <li className="nav-section">
                        <span className="sidebar-mini-icon">
                        <i className="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 className="text-section">Chức năng</h4>
                    </li>
                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#tables">
                        <i className="fas fa-table"></i>
                        <p>Quản lý danh sách</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tables">
                        <ul className="nav nav-collapse">
                            <li>
                            <Link to="/admin/MovieSchedule">
                                <span className="sub-item">Quản lý lịch chiếu</span>
                            </Link>
                            </li>
                            <li>
                            <a href="/admin/quanlyphongchieu">
                                <span className="sub-item">Quản lý phòng chiếu</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#sidebarLayouts">
                        <i className="fas fa-th-list"></i>
                        <p>Quản lý vé</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="sidebarLayouts">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="sidebar-style-2.html">
                                <span className="sub-item">Sidebar Style 2</span>
                            </a>
                            </li>
                            <li>
                            <a href="icon-menu.html">
                                <span className="sub-item">Icon Menu</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li> */}
                    {/* <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#forms">
                        <i className="fas fa-pen-square"></i>
                        <p>Quản lý chi nhánh</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="forms">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="forms/forms.html">
                                <span className="sub-item">Basic Form</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#tables">
                        <i className="fas fa-table"></i>
                        <p>Quản lý nhân viên</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="tables">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="tables/tables.html">
                                <span className="sub-item">Basic Table</span>
                            </a>
                            </li>
                            <li>
                            <a href="tables/datatables.html">
                                <span className="sub-item">Datatables</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#maps">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Quản lý khách hàng</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="maps">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="maps/googlemaps.html">
                                <span className="sub-item">Google Maps</span>
                            </a>
                            </li>
                            <li>
                            <a href="maps/jsvectormap.html">
                                <span className="sub-item">Jsvectormap</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#charts">
                        <i className="far fa-chart-bar"></i>
                        <p>Charts</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="charts">
                        <ul className="nav nav-collapse">
                            <li>
                            <a href="charts/charts.html">
                                <span className="sub-item">Chart Js</span>
                            </a>
                            </li>
                            <li>
                            <a href="charts/sparkline.html">
                                <span className="sub-item">Sparkline</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="widgets.html">
                        <i className="fas fa-desktop"></i>
                        <p>Widgets</p>
                        <span className="badge badge-success">4</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="../../documentation/index.html">
                        <i className="fas fa-file"></i>
                        <p>Documentation</p>
                        <span className="badge badge-secondary">1</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-bs-toggle="collapse" href="#submenu">
                        <i className="fas fa-bars"></i>
                        <p>Setting</p>
                        <span className="caret"></span>
                        </a>
                        <div className="collapse" id="submenu">
                        <ul className="nav nav-collapse">
                            <li>
                            <a data-bs-toggle="collapse" href="#subnav1">
                                <span className="sub-item">Level 1</span>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="subnav1">
                                <ul className="nav nav-collapse subnav">
                                <li>
                                    <a href="#">
                                    <span className="sub-item">Level 2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <span className="sub-item">Level 2</span>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li>
                            <a data-bs-toggle="collapse" href="#subnav2">
                                <span className="sub-item">Level 1</span>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="subnav2">
                                <ul className="nav nav-collapse subnav">
                                <li>
                                    <a href="#">
                                    <span className="sub-item">Level 2</span>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li>
                            <a href="#">
                                <span className="sub-item">Level 1</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="main-panel">
                <div className="main-header">
                <div className="main-header-logo">
                {/* <!-- Logo Header -->
                <LogoHeader/> */}
                {/* <!-- End Logo Header --> */}
                </div>
                {/* <!-- Navbar Header --> */}
                <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
                    <div className="container-fluid">
                        {/* Navbar Search */}
                        <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <button type="submit" className="btn btn-search pe-1">
                                <i className="fa fa-search search-icon"></i>
                            </button>
                            </div>
                            <input
                            type="text"
                            placeholder="Search ..."
                            className="form-control"
                            />
                        </div>
                        </nav>

                        {/* Navbar Icons */}
                        <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                        {/* Search Icon (for mobile) */}
                        <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                            <a
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            >
                            <i className="fa fa-search"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-search animated fadeIn">
                            <form className="navbar-left navbar-form nav-search">
                                <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search ..."
                                    className="form-control"
                                />
                                </div>
                            </form>
                            </ul>
                        </li>

                        {/* Messages Dropdown */}
                        <li className="nav-item topbar-icon dropdown hidden-caret">
                            <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="messageDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            <i className="fa fa-envelope"></i>
                            </a>
                            <ul
                            className="dropdown-menu messages-notif-box animated fadeIn"
                            aria-labelledby="messageDropdown"
                            >
                            <li>
                                <div className="dropdown-title d-flex justify-content-between align-items-center">
                                Messages
                                <a href="#" className="small">
                                    Mark all as read
                                </a>
                                </div>
                            </li>
                            <li>
                                <div className="message-notif-scroll scrollbar-outer">
                                <div className="notif-center">
                                    <a href="#">
                                    <div className="notif-img">
                                        <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                                    </div>
                                    <div className="notif-content">
                                        <span className="subject">Jimmy Denis</span>
                                        <span className="block">How are you?</span>
                                        <span className="time">5 minutes ago</span>
                                    </div>
                                    </a>
                                    {/* Other messages */}
                                </div>
                                </div>
                            </li>
                            <li>
                                <a className="see-all" href="javascript:void(0);">
                                See all messages
                                <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                            </ul>
                        </li>

                        {/* Notifications Dropdown */}
                        <li className="nav-item topbar-icon dropdown hidden-caret">
                            <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="notifDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            <i className="fa fa-bell"></i>
                            <span className="notification">4</span>
                            </a>
                            <ul
                            className="dropdown-menu notif-box animated fadeIn"
                            aria-labelledby="notifDropdown"
                            >
                            <li>
                                <div className="dropdown-title">
                                You have 4 new notifications
                                </div>
                            </li>
                            <li>
                                <div className="notif-scroll scrollbar-outer">
                                <div className="notif-center">
                                    <a href="#">
                                    <div className="notif-icon notif-primary">
                                        <i className="fa fa-user-plus"></i>
                                    </div>
                                    <div className="notif-content">
                                        <span className="block">New user registered</span>
                                        <span className="time">5 minutes ago</span>
                                    </div>
                                    </a>
                                    {/* Other notifications */}
                                </div>
                                </div>
                            </li>
                            <li>
                                <a className="see-all" href="javascript:void(0);">
                                See all notifications
                                <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                            </ul>
                        </li>

                        {/* Quick Actions Dropdown */}
                        <li className="nav-item topbar-icon dropdown hidden-caret">
                            <a
                            className="nav-link"
                            data-bs-toggle="dropdown"
                            href="#"
                            aria-expanded="false"
                            >
                            <i className="fas fa-layer-group"></i>
                            </a>
                            <div className="dropdown-menu quick-actions animated fadeIn">
                            <div className="quick-actions-header">
                                <span className="title mb-1">Quick Actions</span>
                                <span className="subtitle op-7">Shortcuts</span>
                            </div>
                            <div className="quick-actions-scroll scrollbar-outer">
                                <div className="quick-actions-items">
                                <div className="row m-0">
                                    <a className="col-6 col-md-4 p-0" href="#">
                                    <div className="quick-actions-item">
                                        <div className="avatar-item bg-danger rounded-circle">
                                        <i className="far fa-calendar-alt"></i>
                                        </div>
                                        <span className="text">Calendar</span>
                                    </div>
                                    </a>
                                    {/* Other quick actions */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>

                        {/* User Profile Dropdown */}
                        <li className="nav-item topbar-user dropdown hidden-caret">
                            <a
                            className="dropdown-toggle profile-pic"
                            data-bs-toggle="dropdown"
                            href="#"
                            aria-expanded="false"
                            >
                            <div className="avatar-sm">
                                <img
                                src="assets/img/profile.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                                />
                            </div>
                            <span className="profile-username">
                                <span className="op-7">Hi,</span>
                                <span className="fw-bold">Hizrian</span>
                            </span>
                            </a>
                            <ul className="dropdown-menu dropdown-user animated fadeIn">
                            <div className="dropdown-user-scroll scrollbar-outer">
                                <li>
                                <div className="user-box">
                                    <div className="avatar-lg">
                                    {/* <img
                                        src="assets/img/profile.jpg"
                                        alt="image profile"
                                        className="avatar-img rounded"
                                    /> */}
                                    </div>
                                    <div className="u-text">
                                    <h4>Hizrian</h4>
                                    <p className="text-muted">hello@example.com</p>
                                    <a
                                        href="profile.html"
                                        className="btn btn-xs btn-secondary btn-sm"
                                    >
                                        View Profile
                                    </a>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    My Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    My Balance
                                </a>
                                <a className="dropdown-item" href="#">
                                    Inbox
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Account Setting
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    Logout
                                </a>
                                </li>
                            </div>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}
                <Outlet />
                <Footer/>
                </div>
            </div>
        </div>
    );
}

export default IndexAdmin;
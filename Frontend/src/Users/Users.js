import "./Users.css";
const Users = () => {
  return (
    <>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a
              class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0"
              href="javascript(void)"
            >
              KnowledgePlus
              {/* <img
                    src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
                    alt="..."
                  /> */}
            </a>

            <div class="navbar-user d-lg-none">
              <div class="dropdown">
                <a
                  href="javascript(void)"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar-parent-child">
                    <img
                      alt="Image Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      class="avatar avatar- rounded-circle"
                    />
                    <span class="avatar-child avatar-badge bg-success"></span>
                  </div>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="sidebarAvatar"
                >
                  <a href="javascript(void)" class="dropdown-item">
                    Profile
                  </a>
                  <a href="javascript(void)" class="dropdown-item">
                    Settings
                  </a>
                  <a href="javascript(void)" class="dropdown-item">
                    Billing
                  </a>
                  <hr class="dropdown-divider" />
                  <a href="javascript(void)" class="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/Dashboard">
                    {/* <i class="bi bi-house"></i> */}
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Add_Member">
                    {/* <i class="bi bi-bar-chart"></i>  */}
                    Add Member
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Add_Books">
                    {/* <i class="bi bi-chat"></i>  */}
                    Add Books
                    {/* <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                          6
                        </span> */}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Book_Details">
                    {/* <i class="bi bi-bookmarks"></i> */}
                    Book Details
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Users">
                    {/* <i class="bi bi-people"></i>  */}
                    Users
                  </a>
                </li>
              </ul>

              <hr class="navbar-divider my-5 opacity-20" />

              <div class="mt-auto"></div>

              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="javascript(void)">
                    <i class="bi bi-person-square"></i> Account
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript(void)">
                    <i class="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Librarian</h1>
                  </div>

                  <div class="col-sm-6 col-12 text-sm-end">
                    <div class="mx-n1">
                      <a
                        href="javascript(void)"
                        class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                      >
                        <span class=" pe-2">
                          <i class="bi bi-pencil"></i>
                        </span>
                        <span>Edit</span>
                      </a>
                      <a
                        href="javascript(void)"
                        class="btn d-inline-flex btn-sm btn-primary mx-1"
                      >
                        <span class=" pe-2">
                          <i class="bi bi-plus"></i>
                        </span>
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>

                <ul class="nav nav-tabs mt-4 overflow-x border-0">
                  <li class="nav-item ">
                    <a href="javascript(void)" class="nav-link active">
                      All Data
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div class="row g-6 mb-6">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Budget
                          </span>
                          <span class="h3 font-bold mb-0">$750.90</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i class="bi bi-credit-card"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>13%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            New projects
                          </span>
                          <span class="h3 font-bold mb-0">215</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i class="bi bi-people"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>30%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Total hours
                          </span>
                          <span class="h3 font-bold mb-0">1.400</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="bi bi-clock-history"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                          <i class="bi bi-arrow-down me-1"></i>-5%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Work load
                          </span>
                          <span class="h3 font-bold mb-0">95%</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="bi bi-minecart-loaded"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>10%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Users;

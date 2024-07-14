import "./Addmember.css";
const Addmember = () => {
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
                  <a class="nav-link" href="/Book_Details">
                    {/* <i class="bi bi-bookmarks"></i> */}
                    Book Details
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

                  {/* <div class="col-sm-6 col-12 text-sm-end">
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
                  </div> */}
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
              <div class="form-container">
                <h2>Add Member</h2>
                <form style={{ minWidth: "800px" }}>
                  <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" required />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div class="form-group">
                    <label for="mobile">Mobile No</label>
                    <input type="tel" id="mobile" name="mobile" required />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                    <div class="form-group">
                      <label for="Role">Role</label>
                      <input type="text" id="Role" name="Role" required />
                    </div>
                  </div>
                  <button type="submit">Add Member</button>
                </form>
              </div>
              {/*  */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Addmember;

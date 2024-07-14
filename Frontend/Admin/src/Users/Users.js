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
              {/*  */}
              <div className="table-container">
                <h2> User Records </h2>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                      <td>1234567890</td>
                      <td>password1</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>jane.smith@example.com</td>
                      <td>2345678901</td>
                      <td>password2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Michael Johnson</td>
                      <td>michael.johnson@example.com</td>
                      <td>3456789012</td>
                      <td>password3</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Emily Davis</td>
                      <td>emily.davis@example.com</td>
                      <td>4567890123</td>
                      <td>password4</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>David Brown</td>
                      <td>david.brown@example.com</td>
                      <td>5678901234</td>
                      <td>password5</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Amy Wilson</td>
                      <td>amy.wilson@example.com</td>
                      <td>6789012345</td>
                      <td>password6</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Chris Taylor</td>
                      <td>chris.taylor@example.com</td>
                      <td>7890123456</td>
                      <td>password7</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Lisa Martinez</td>
                      <td>lisa.martinez@example.com</td>
                      <td>8901234567</td>
                      <td>password8</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>James Anderson</td>
                      <td>james.anderson@example.com</td>
                      <td>9012345678</td>
                      <td>password9</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Sarah Thomas</td>
                      <td>sarah.thomas@example.com</td>
                      <td>0123456789</td>
                      <td>password10</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Brian Lee</td>
                      <td>brian.lee@example.com</td>
                      <td>1234509876</td>
                      <td>password11</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Emma White</td>
                      <td>emma.white@example.com</td>
                      <td>2345609876</td>
                      <td>password12</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Daniel Harris</td>
                      <td>daniel.harris@example.com</td>
                      <td>3456709876</td>
                      <td>password13</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Mia Clark</td>
                      <td>mia.clark@example.com</td>
                      <td>4567809876</td>
                      <td>password14</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Kevin Lewis</td>
                      <td>kevin.lewis@example.com</td>
                      <td>5678909876</td>
                      <td>password15</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Sophia Walker</td>
                      <td>sophia.walker@example.com</td>
                      <td>6789009876</td>
                      <td>password16</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Matthew Hall</td>
                      <td>matthew.hall@example.com</td>
                      <td>7890109876</td>
                      <td>password17</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Olivia Allen</td>
                      <td>olivia.allen@example.com</td>
                      <td>8901209876</td>
                      <td>password18</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Ryan Young</td>
                      <td>ryan.young@example.com</td>
                      <td>9012309876</td>
                      <td>password19</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Ella King</td>
                      <td>ella.king@example.com</td>
                      <td>0123409876</td>
                      <td>password20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Users;

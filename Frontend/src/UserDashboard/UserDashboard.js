import "./UserDashboard.css";
import bookImage from './book1.jpg';
import bookImage2 from './book2.jpg';
import bookImage4 from './book4.jpg';
import bookImage5 from './book5.jpg';
import bookImage6 from './book6.jpg';
import profileImage from './profile.png'
import notification from './notification.png'

const Compo = () => {
  return (
    <>
      <div class="header">
        <h1 class="h2text">
          <b>
            <i>KnowledgePlus</i>
          </b>
        </h1>
        <div class="header-right">
          {/*  */}

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">New Book Added</h1>
                  <button type="button" style={{width:'10px',height:'10px'}} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="card-content">
                    <img className="bookimage" style={{width:'150px',height:'150px'}} src={bookImage4}></img>
                    <div class="card-text"><p style={{marginTop:'15px',fontSize:'15px'}}><b>Never Say Can't</b><br></br>Only you can define who you are and
                    only you can define where you go in life!</p></div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-secondary">Clear Notification</button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        <img src={notification} style={{cursor:'pointer'}} alt="Notifications" class="notification-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          <button class="logout-button">Logout</button>
          
        </div>
      </div>

      <div class="row">
        <div class="leftcolumn">
          <div class="card1">
            {/* <h4>Search Books</h4>
            <hr class="hrclass"></hr> */}
            <div class="card-content">
              <form>
                <div>
                  <input type="text" placeholder="Seach Books" className="searchBar"/>
                  <input type="submit" value="Search" />
                </div>
              </form>
            </div>
          </div>
          <h2 style={{marginTop:'30px',color:'white',textAlign:'center',fontWeight:'bold'}}>Your Borrowed Books</h2>
          <div class="card">
            <h2>The Secret</h2>
            {/* <h5>Title description, Dec 7, 2017</h5> */}
            <div class="card-content">
              <div class="bookimg" style={{ height: "180px" }}>
              </div>
              <div class="card-text">
                <p><b>Description</b></p>
                <p>
                "The Secret" is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thought alone can influence objective circumstances within one's life. The book alleges energy as assurance of its effectiveness.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <h2>You Can Win</h2>
            {/* <h5>Title description, Dec 7, 2017</h5> */}
            <div class="card-content">
              <div class="bookimg2" style={{ height: "180px" }}>
              </div>
              <div class="card-text">
                <p><b>Description</b></p>
                <p>
                "You Can Win" is a practical guide blending ancient wisdom and modern-day thinking to help you set new goals, develop purpose, and foster positive thinking for lifelong success. It teaches you to build confidence, turn weaknesses into strengths, gain credibility, take control, build trust, and remove barriers to effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="rightcolumn">
        <div class="card">
            <h3>Suggested Books</h3>
            <div class="scrollable-content">
              <div className="card-content">
                <img className="bookimage" src={bookImage}></img>
                <div class="card-text"><p style={{marginTop:'20px'}}><b>THE ART OF HAPPINESS</b><br></br>Stop going through life, Start growing through life!</p></div>
              </div>
              <div className="card-content">
                <img className="bookimage" src={bookImage2}></img>
                <div class="card-text"><p style={{ marginTop: '20px' }}><b>Life's Amazing Secrets: How to find Bala</b><br></br>
                  In this significant book, a renowned spiritual leader shares practical wisdom on overcoming everyday challenges to achieve lasting happiness.</p>
                </div>
              </div>
              <div className="card-content">
                <img className="bookimage"  src={bookImage5}></img>
                <div class="card-text"><p style={{marginTop:'20px'}}><b>The Power of One Thought</b><br></br>Stop going through life, Start growing through life!</p></div>
              </div>
              <div className="card-content">
                <img className="bookimage" src={bookImage6}></img>
                <div class="card-text"><p style={{ marginTop: '20px' }}><b>Believe in Yourself</b><br></br>
                  In this significant book, a renowned spiritual leader shares practical wisdom on overcoming everyday challenges to achieve lasting happiness.</p>
                </div>
              </div>
            </div>
            
          </div>

          <div class="card">
            <h3>Profile</h3>
            {/* <div class="table-container">
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Genre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Art of Happiness</td>
                    <td>Dalai Lama</td>
                    <td>1998</td>
                    <td>Self-Help</td>
                  </tr>
                  <tr>
                    <td>To Kill a Mockingbird</td>
                    <td>Harper Lee</td>
                    <td>1960</td>
                    <td>Fiction</td>
                  </tr>
                  <tr>
                    <td>1984</td>
                    <td>George Orwell</td>
                    <td>1949</td>
                    <td>Dystopian</td>
                  </tr>
                  <tr>
                    <td>Pride and Prejudice</td>
                    <td>Jane Austen</td>
                    <td>1813</td>
                    <td>Romance</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div class="profile-card">
              <img src={profileImage} alt="Profile Picture" class="profile-pic"/>
              <div class="profile-details">
                <h3>Sakshi Rangwala</h3>
                <p>Email: sakshi232innovation@gmail.com</p>
                <p>Location: Gandhinagar, Gujarat</p>
                <p>Skills: Web Development, UI/UX Design</p>
                <p>Bio: Passionate about creating meaningful web experiences.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Compo;

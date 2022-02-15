import Layout from '../../layout/Layout'

const AllArticles = () => {
  return (
    <Layout>
      {/* header section */}
      <header className='py-5 bg-light border-bottom mb-4'>
        <div className='container'>
          <div className='text-center my-5'>
            <h1 className='fw-bolder'>Jamblog</h1>
            <p className='lead mb-0'>All articles and posts</p>
          </div>
        </div>
      </header>
      {/* page content sections */}
      <section className='container'>
        <div className='row'>
          {/* blog entries */}
          <div className='col-lg-8'>
            <div className='row'>
              {/* blog entry  */}
              <div className='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'>
                    <img
                      class='card-img-top'
                      src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg'
                      alt='...'
                    />
                  </a>
                  <div class='card-body'>
                    <div class='small text-muted'>January 1, 2021</div>
                    <h2 class='card-title h4'>Post Title</h2>
                    <p class='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla.
                    </p>
                    <a class='btn btn-primary' href='#!'>
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
              {/* blog entry  */}
              <div className='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'>
                    <img
                      class='card-img-top'
                      src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg'
                      alt='...'
                    />
                  </a>
                  <div class='card-body'>
                    <div class='small text-muted'>January 1, 2021</div>
                    <h2 class='card-title h4'>Post Title</h2>
                    <p class='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla.
                    </p>
                    <a class='btn btn-primary' href='#!'>
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
              {/* blog entry  */}
              <div className='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'>
                    <img
                      class='card-img-top'
                      src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg'
                      alt='...'
                    />
                  </a>
                  <div class='card-body'>
                    <div class='small text-muted'>January 1, 2021</div>
                    <h2 class='card-title h4'>Post Title</h2>
                    <p class='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla.
                    </p>
                    <a class='btn btn-primary' href='#!'>
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
              {/* blog entry  */}
              <div className='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'>
                    <img
                      class='card-img-top'
                      src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg'
                      alt='...'
                    />
                  </a>
                  <div class='card-body'>
                    <div class='small text-muted'>January 1, 2021</div>
                    <h2 class='card-title h4'>Post Title</h2>
                    <p class='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla.
                    </p>
                    <a class='btn btn-primary' href='#!'>
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* side widget for categories */}
          <div className='col-lg-4'>
            {/* <!-- Categories widget--> */}
            <div className='card mb-4'>
              <div className='card-header'>Categories</div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!'>Javascript</a>
                      </li>
                      <li>
                        <a href='#!'>HTML</a>
                      </li>
                      <li>
                        <a href='#!'>React</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!'>Python</a>
                      </li>
                      <li>
                        <a href='#!'>Django</a>
                      </li>
                      <li>
                        <a href='#!'>NodeJS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Side widget--> */}
            <div className='card mb-4'>
              <div className='card-header'>Jamstack Course</div>
              <div className='card-body'>Find full course on Educative</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AllArticles

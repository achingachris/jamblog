import Link from 'next/link'
import Layout from '../layout/Layout'

const index = () => {
  return (
    <Layout>
      {/* page header */}
      <header className='bg-dark py-5'>
        <div className='container px-5'>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-6'>
              <div className='text-center my-5'>
                <h1 className='display-5 fw-bolder text-white mb-2'>Jamblog</h1>
                <p className='lead text-white-50 mb-4'>A Jamstack Blog</p>
                <div className='d-grid gap-3 d-sm-flex justify-content-sm-center'>
                  <a
                    className='btn btn-primary btn-lg px-4 me-sm-3'
                    href='#features'
                  >
                    All Articles
                  </a>
                  <a className='btn btn-outline-light btn-lg px-4' href='#!'>
                    Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* small about section */}
      <section className='py-5 border-bottom'>
        <div className='container px-5 my-5'>
          <div className='text-center mb-5'>
            <h2 className='fw-bolder'>JamBlog</h2>
            <p className='lead mb-0'>Jamstack Project - A blog made by Love</p>
          </div>

          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-6 col-xl-4'>
              <div class='card mb-5 mb-xl-0'>
                <div class='card-body p-5'>
                  <div class='small text-uppercase fw-bold'>
                    <i class='bi bi-star-fill text-warning'></i>
                    Headless
                  </div>
                  <div class='mb-3'>
                    <span class='display-4 fw-bold'>Strapi</span>
                    <span class='text-muted'>CMS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-xl-4'>
              <div class='card mb-5 mb-xl-0'>
                <div class='card-body p-5'>
                  <div class='small text-uppercase fw-bold'>
                    <i class='bi bi-star-fill text-warning'></i>
                    Javascript
                  </div>
                  <div class='mb-3'>
                    <span class='display-4 fw-bold'>Next</span>
                    <span class='text-muted'>JS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-xl-4'>
              <div class='card mb-5 mb-xl-0'>
                <div class='card-body p-5'>
                  <div class='small text-uppercase fw-bold'>
                    <i class='bi bi-star-fill text-warning'></i>
                    Project
                  </div>
                  <div class='mb-3'>
                    <span class='display-4 fw-bold'>Blog</span>
                    <span class='text-muted'>educative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* top articles */}
      <section className='bg-light py-5 border-bottom'>
        <div className='container px-5 my-5'>
          <div className='text-center mb-5'>
            <h2 className='fw-bolder'>Latest Articles</h2>
          </div>

          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-6 col-xl-4'>
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
                  <Link href='/article/read-more-here'>
                    <a class='btn btn-primary'>Read more →</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-xl-4'>
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
                  <Link href='/article/read-more-here'>
                    <a class='btn btn-primary'>Read more →</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-xl-4'>
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
                  <Link href='/article/read-more-here'>
                    <a class='btn btn-primary'>Read more →</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index

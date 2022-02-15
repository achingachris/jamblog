import Link from 'next/link'

const NavigationBar = () => {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark bg-dark'
      aria-label='Third navbar example'
    >
      <div className='container'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample03'
            aria-controls='navbarsExample03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarsExample03'>
            <ul className='navbar-nav me-auto mb-2 mb-sm-0'>
              <li className='nav-item'>
                <Link href='/'>
                  <a className='nav-link active' aria-current='page'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/article/all'>
                  <a className='nav-link'>Articles</a>
                </Link>
              </li>
            </ul>
            <form>
              <input
                className='form-control'
                type='text'
                placeholder='Search For Articles'
                aria-label='Search'
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

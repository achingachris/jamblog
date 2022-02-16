import Link from 'next/link'

const Footer = () => {
  // get current year
  const year = new Date().getFullYear()

  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-muted'>&copy; {year} Jamblog</p>
        <ul className='nav col-md-4 justify-content-end'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link px-2 text-muted'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/article/all'>
              <a className='nav-link px-2 text-muted'>Articles</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer

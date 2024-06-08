import Link from "next/link"


const Layout = ({children}) => {
  return (
    <>
    <header className="header">
      <Link href={"/"}>
            <h2>Javads CRM </h2>
      </Link>
<Link href="/add-customer">Add Customer</Link>
    </header>
    <div className="main">{children}</div>
    <footer className="footer">
Next JS - CRM  || This is my CRM &copy;
    </footer>
    </>
  )
}

export default Layout
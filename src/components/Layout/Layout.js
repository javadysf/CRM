import Link from "next/link"


const Layout = ({children}) => {
  return (
    <>
    <header className="header">
<h2>Javads CRM </h2>
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
import { Link } from 'wouter'

export function Nav() {
  return (
    <nav className="flex">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </nav>
  )
}

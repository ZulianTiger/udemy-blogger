//Next.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Link href={'/'}>
                <a>
                    <h1>Home</h1>
                </a>
            </Link>
            <Link href={'/profile'}>
                <a>
                    <h1>Profile</h1>
                </a>
            </Link>
            <Link href={'new-post'}>
                <a>
                    <h1>New Post</h1>
                </a>
            </Link>
            <Link href={'/login'}>
                <a>
                    <h1>Login</h1>
                </a>
            </Link>
        </div>
    )
}

export default Navbar;
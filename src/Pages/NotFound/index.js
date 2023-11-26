import { Link } from "react-router-dom"
import PrimaryLayout from "../../Layout/PrimaryLayout"

export default function NotFound() {
    return (
        <PrimaryLayout>
            <img src="https://www.digikala.com/statics/img/png/page-not-found.webp" />
            <h1>404 page</h1>
            <Link to="/">go To Home</Link>
        </PrimaryLayout>
    )
}
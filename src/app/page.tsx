import Link from "next/link"
export default function displayName() {
    return(
        <div className="text-center m-10 text-xl text-blue-200 bg-blue-500">
            <h1>Country Assigment using Componenet</h1>
            <Link href="/country">EXPLORE COUNTRIES</Link>
        </div>
    )
}

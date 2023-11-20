import { Link } from "react-router-dom"
import { CreateAccount, LogIn } from "../../buttons"

export default function Footer() {
  return (
    <>
      <div className="bg-teal-900 py-10 lg:py-20 relative">
        <div className="slant-footer"></div>
        <footer className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-white text-3xl">BillBook</h2>
          </div>

          <ul className="">
            <li>
              <Link to="/about" className="text-white">
                About BillBook
              </Link>
            </li>
            <li className="my-3">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/suggestion-box" className="text-white">
                Suggestion Box
              </Link>
            </li>
          </ul>

          <ul className="">
            <li className="">
              <CreateAccount />
            </li>
            <li className="my-5">
              <LogIn />
            </li>
            {/* <li>
              <DonateButton />
            </li> */}
          </ul>
          <p className="text-slate-200">
            Built by{" "}
            <a
              href="https://x.com/YogeshBhatt23?t=yiTqCr7IUG96SF_LEUltYw&s=08 "
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-slate-50"
            >
              Karan Mehra 
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

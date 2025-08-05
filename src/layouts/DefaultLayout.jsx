
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
export default function DefaultLayout (){
    return (
        <>
        <Header/>
        <main>
            <Outlet />
        </main>
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col">
                    <h3>COmpany</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                        tenetur consectetur, mollitia unde alias eveniet temporibus odio
                        assumenda quam in!
                    </p>
                    </div>
                    <div className="col">
                    <h3>Social</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                    </div>
                    <div className="col">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                    </ul>
                    \
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
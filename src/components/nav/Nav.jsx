import { useState } from "react"
import "./style.css"

const Nav = () => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
        const modalDiv = document.getElementById("modal");
        modal ? modalDiv.style.display = "none"
            : modalDiv.style.display = "block";
    }

    return (
        <>
            <nav className='nav'>
                <p className="nav__title">
                    <i className='bx bx-credit-card-front'></i>
                    <span>Crypt</span>app
                </p>
                <i
                    onClick={handleModal}
                    className='bx bx-menu'></i>
                <div id="modal">
                    <ul>
                        <li >
                            <a target="_blank" href="https://www.linkedin.com/in/jhordanreyes/">
                                <i className='bx bxl-linkedin-square' ></i> <span>Linkedin</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/JhordanReyes">
                                <i className='bx bxl-github'></i> <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/reyesjhordan4/">
                                <i className='bx bxl-instagram' ></i> <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="nav-desktop">
                <p className="nav__title">
                    <i className='bx bx-credit-card-front'></i>
                    <span>Crypt</span>app
                </p>
                <ul>
                    <li className="dashboard flex"><i className='bx bxs-dashboard'></i> Dashboard</li>
                </ul>
                <p className="nav__title">
                    <i className='bx bx-donate-heart' ></i>
                    <span>Contact</span>{"-me"}
                </p>
                <ul>
                    <li >
                        <a target="_blank" href="https://www.linkedin.com/in/jhordanreyes/">
                            <i className='bx bxl-linkedin-square' ></i> <span>Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/JhordanReyes">
                            <i className='bx bxl-github'></i> <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/reyesjhordan4/">
                            <i className='bx bxl-instagram' ></i> <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
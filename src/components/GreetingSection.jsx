import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"

const GreetingSection = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        getGreeting()
    }, [])

    const getGreeting = () => {
        let today = new Date();
        if (today.getHours() < 12) {
            setGreeting("Good morning")
        } else if (today.getHours() > 17) {
            setGreeting("Good evening")
        } else {
            setGreeting("Good afternoon")
        }
    }
    return (
        <Container fluid>
            <div className="px-4 my-4">
                <h2>{greeting}</h2>
                <div className="row py-3 mx-0">
                    <div className="pl-0 pr-3 mb-3 col-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center menu-container">
                            <div className="menu-image mr-3">
                                <img src="https://e-cdns-images.dzcdn.net/images/cover/fa63381faefb51fba501498bc836765a/250x250-000000-80-0-0.jpg"
                                    alt="Album Cover" />
                            </div>
                            <span className="mr-1">Greatest Hits</span>
                            <Button className="btn play-button ml-auto mr-3">
                                <svg role="img" height="24" width="24" aria-hidden="true"
                                    viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                    <path
                                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="pl-0 pr-3 mb-3 col-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center menu-container">
                            <div className="menu-image mr-3">
                                <img src="https://i.scdn.co/image/ab67706f0000000200982b0a2b59c246d3b1d46b"
                                    alt="Album Cover" />
                            </div>
                            <span className="mr-1">Heart Beats</span>
                            <Button className="btn play-button ml-auto mr-3">
                                <svg role="img" height="24" width="24" aria-hidden="true"
                                    viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                    <path
                                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="pl-0 pr-3 mb-3 col-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center menu-container">
                            <div className="menu-image mr-3">
                                <img src="https://e-cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/250x250-000000-80-0-0.jpg"
                                    alt="Album Cover" />
                            </div>
                            <span className="mr-1">Rock</span>
                            <Button className="btn play-button ml-auto mr-3">
                                <svg role="img" height="24" width="24" aria-hidden="true"
                                    viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                    <path
                                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="pl-0 pr-3 mb-3 col-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center menu-container">
                            <div className="menu-image mr-3">
                                <img src="https://e-cdns-images.dzcdn.net/images/cover/fad0dd777fb660bb1c3388334afd8419/250x250-000000-80-0-0.jpg"
                                    alt="Album Cover" />
                            </div>
                            <span className="mr-1">Michael Jackson</span>
                            <Button className="btn play-button ml-auto mr-3">
                                <svg role="img" height="24" width="24" aria-hidden="true"
                                    viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                    <path
                                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="pl-0 pr-3 mb-3 col-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex align-items-center menu-container">
                            <div className="menu-image mr-3">
                                <img src="https://e-cdns-images.dzcdn.net/images/cover/51bc638c793784b7131748cde1e77cb5/250x250-000000-80-0-0.jpg"
                                    alt="Album Cover" />
                            </div>
                            <span className="mr-1">Latin</span>
                            <Button className="btn play-button ml-auto mr-3">
                                <svg role="img" height="24" width="24" aria-hidden="true"
                                    viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw">
                                    <path
                                        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default GreetingSection
import { Component } from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import Modal from '../components/Modal'
import Article from '../components/Article'
import '../styles/main.scss'

export default class home extends Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false,
            modalImge: '',
        }
    }

    componentDidMount() {
        // Bind anchor clicks
        let anchor = document.querySelectorAll('a')
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].addEventListener('click', e => this.handleClick(e))
        }
    }

    handleClick = e => {
        //Prevents refresh
        e.preventDefault()
        console.log(e.target)
    }

    toggleModal = e => {
        this.setState({
            modalVisible: this.state.modalVisible ? false : true,
            modalImge: e.target.src ? e.target.src : '',
        })
    }

    render() {
        return (
            <Page>
                <Head>
                    <title>Andres Hernandez | Interface Development Test</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <div className="container">
                    <section id="body-needs">
                        <div className="grid">
                            <div className="grid__cell">
                                <img
                                    className="modal-toggle"
                                    src="./portrait.png"
                                    alt="man-and-child"
                                    onClick={e => this.toggleModal(e)}
                                />
                            </div>

                            <div className="grid__cell">
                                <img
                                    className="modal-toggle margin--BX1"
                                    src="./landscape.png"
                                    alt="bowl-of-fruits"
                                    onClick={e => this.toggleModal(e)}
                                />
                                <img
                                    className="modal-toggle"
                                    src="./landscape2.png"
                                    alt="asparagous"
                                    onClick={e => this.toggleModal(e)}
                                />
                            </div>

                            <div className="grid__cell grid__cell--full-sm">
                                <h3 className="underline">
                                    Answer your body's needs
                                </h3>
                                <p className="margin--BX3">
                                    The way ingredients are sourced affects the
                                    way we nourish our bodies. Author Mark
                                    Schatzer believes our body naturally
                                    develops an appetite for the foods and
                                    nutrients it needs to be healthy, but that
                                    artificial flavouring are getting in the
                                    way. this can be reversed by focusing on
                                    high-quality ingredients and being mindful
                                    as your appetite guides you to consume
                                    according to your body's needs.
                                </p>

                                <p className="text--red text--uppercase">
                                    <strong>be mindful</strong>
                                </p>
                                <p>
                                    <strong>
                                        Sourcing local or organic food is a good
                                        way to start being more mindful about
                                        what your're cooking and eating.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="aeg-latest">
                        <h1 className="text--center">
                            All the latest from AEG
                        </h1>
                        <div className="grid">
                            <div className="grid__cell">
                                <Article thumb="./article1.png" link="#">
                                    <p>
                                        <strong>
                                            Summer Lunch Menu By Mark best
                                        </strong>
                                    </p>
                                    <p>
                                        AEG ambassador Mark Best's summer eats
                                        are guaranteed to help you make the most
                                        of the warmer weather and entertaining
                                        at home.
                                    </p>
                                </Article>
                            </div>

                            <div className="grid__cell">
                                <Article thumb="./article2.png" link="#">
                                    <p>
                                        <strong>
                                            A traditional Christmas Eve, Mark
                                            Best Style
                                        </strong>
                                    </p>
                                    <p>
                                        One of Australia's best chefs and AEG
                                        ambassador, Mark Best, shares his
                                        favourtie Christmas Eve menu which is
                                        sure to impress your guests.
                                    </p>
                                </Article>
                            </div>

                            <div className="grid__cell">
                                <Article thumb="./article3.png" link="#">
                                    <p>
                                        <strong>Taking taste Further</strong>
                                    </p>
                                    <p>
                                        This excusive cookbook gives you all the
                                        know-how you need. We've designed it to
                                        make sure you get the most out of our
                                        products - and the best out of your
                                        food.
                                    </p>
                                </Article>
                            </div>
                        </div>
                    </section>
                </div>
                // Modal window
                <Modal
                    visible={this.state.modalVisible}
                    image={this.state.modalImge}
                    onToggle={this.toggleModal}
                />
            </Page>
        )
    }
}

function HomePage() {
    return (
        <div className="row_col_3">
            <div className="col_1"></div>
            <div className="homeLayout col_2">
                <h1>One Piece Crew</h1>
                <div className="homeRoger">
                    <img className="homeImg" src="./public/shanks.png" alt="" />
                    <img className="homeImg" src="./public/luffy-jolly-roger.png" alt="" />
                </div>

            </div>
            <div className="col_3">
                <p>Seleziona la tua ciurma per vedere tutti i dettagli</p>
            </div>
        </div>
    )
}

export default HomePage;
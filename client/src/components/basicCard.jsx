export default function BasicCard(bgColor) {
    console.log(bgColor);
    return (
        <div className="scrollBar" style={{ backgroundColor : bgColor }}>
            <div className="homeConainer">
                <h2>Home</h2>
                <p>azezretyutiyoumiutythrgez</p>
            </div>
            <div className="home2Conainer">
                <h2>Home2</h2>
                <p>azezretyutiyoumiutythrgez</p>
            </div>
            <div className="home3Conainer">
                <h2>Home3</h2>
                <p>azezretyutiyoumiutythrgez</p>
            </div>
      </div>
    )
}
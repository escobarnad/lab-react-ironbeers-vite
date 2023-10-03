import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function HomePage() {
    return (
        <>
            <div>
                <Link to={"/beers"}>
                    <img src={"src/assets/beers.png"} alt="beers photo" />
                    <p>All beers</p>
                    <p>Duis auctor ullamcorper urna id rhoncus. Vestibulum consequat sodales luctus. Suspendisse lacinia quam sed lectus congue rhoncus. Pellentesque ut tellus enim. Nullam ipsum nisi, hendrerit vel tempor nec, varius ac lacus. Sed pretium massa eu quam viverra mollis. Vivamus a porttitor velit. Phasellus elementum rutrum nisi. Ut turpis lorem, maximus quis turpis nec, auctor efficitur odio.</p>
                </Link>
            </div>

            <div>
                <Link to={"/random-beer"}>
                    <img src={"src/assets/random-beer.png"} alt="beers random" />
                    <p>Random Beer</p>
                    <p>In vitae ipsum lorem. Cras scelerisque ac tortor id maximus. Nullam viverra, mi a aliquet accumsan, lectus nunc aliquet justo, in posuere justo risus id nulla. Phasellus a metus vel orci tempor gravida. Mauris mattis dolor in pretium malesuada. Curabitur mattis urna turpis, non dignissim metus pellentesque vitae. Donec et risus non eros accumsan auctor quis eget odio. Ut ex mi, laoreet nec mi id, finibus tristique lacus. Nullam nec nisi nec dolor feugiat dignissim nec sit amet eros. In eu sem non enim pharetra congue. Curabitur at laoreet augue. Vivamus nec mauris commodo, sodales mauris ac, pharetra ipsum.</p>
                </Link>
            </div>

            <div>
                <Link to={"/new-beer"}>
                    <img src={"src/assets/new-beer.png"} alt="beers new" />
                    <p>New Beer</p>
                    <p>Ut ac turpis ante. Morbi mollis sed ante a elementum. Suspendisse tincidunt vitae leo sit amet blandit. Nam eu pharetra nunc. Curabitur ex orci, faucibus quis sem non, facilisis efficitur nisi. Nunc ligula nibh, auctor non urna et, rhoncus elementum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Link>
            </div>
        </>)
}

export default HomePage;

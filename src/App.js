import "./App.css";
import { Bottom } from "./components/Bottom";
import { CFbtns } from "./components/CFbtns";

import { CurrentInfo } from "./components/CurrentInfo";
import { CurrentLocationBtn } from "./components/CurrentLocationBtn";
import { CurrentTemp } from "./components/CurrentTemp";
import { Footer } from "./components/Footer";
import { MiddlePart } from "./components/MiddlePart";

import { SearchBar } from "./components/SearchBar";
import { TopCurve } from "./components/TopCurve";
import { WeatherImgFeelsLike } from "./components/WeatherImgFeelsLike";

function App() {
  return (
    <div>
      {/* <!--------------- Top-part -------------> */}
      {/* <!-- Search Bar and Current-Location Button and CFbtns--> */}
      <SearchBar />
      <CurrentLocationBtn />
      <CFbtns />
      {/* <!-- current-info  --> */}
      <CurrentInfo />
      {/* <!-- weather-img and Feelslike --> */}
      <WeatherImgFeelsLike />
      {/* <!-- current-temperature --> */}
      <CurrentTemp />
      {/* <!-- Top-curve --> */}
      <TopCurve />
      {/* <!-- Middle-part --> */}
      <MiddlePart />
      {/* <!-- Bottom-part  --> */}
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;

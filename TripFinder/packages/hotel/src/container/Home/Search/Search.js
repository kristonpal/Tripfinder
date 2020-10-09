import React, { useState } from "react";
import PropTypes from "prop-types";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import Container from "components/UI/Container/Container";
import GlideCarousel, {
  GlideSlide,
} from "components/UI/GlideCarousel/GlideCarousel";
import SearchForm from "./SearchForm";
import BannerWrapper, { SearchWrapper } from "./Search.style";
import useDataApi from "library/hooks/useDataApi";
// slider images
import bannerBg1 from "assets/images/banner/1.jpg";
import bannerBg2 from "assets/images/banner/2.jpg";
import bannerBg3 from "assets/images/banner/3.jpg";

const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  const [searchbuy, setSearchbuy] = useState("sellbuy");
  const [searchrent, setSearchrent] = useState(null);
  const [stylerent, setStylerent] = useState("none");
  const [stylebuy, setStylebuy] = useState("#40915f");
  const handleBuy = () => {
    setStylerent("none");
    setSearchrent(null);
    setStylebuy("#40915f");
    setSearchbuy("sellbuy");
    // alert("sellbuy");
  };

  const handleRent = () => {
    setStylebuy("none");
    setSearchbuy(null);
    setStylerent("#00FFFF");
    setSearchrent("reantlease");
    // alert("reantlease");
  };
  // const { data, loading, limit } = useDataApi(
  //   `https://classibazaar.com.au/api/v2/slider_images`
  // );
  // console.log(data, "neu");
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <img src={bannerBg1} alt="Banner 1" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg2} alt="Banner 2" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg3} alt="Banner 3" />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Heading
            {...searchTitleStyle}
            content={<i>Search Australia's home of property</i>}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              fontSize: "26px",
            }}
          >
            <button
              onClick={handleBuy}
              style={{
                color: "purple",
                border: "none",
                outline: "none",
                background: stylebuy,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
            <button
              onClick={handleRent}
              style={{
                marginLeft: "10px",
                color: "purple",
                border: "none",
                outline: "none",
                background: stylerent,
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Rent
            </button>
          </div>
          {console.log(searchbuy, "buytest")}
          {console.log(searchrent, "rtest")}
          <Text {...searchDescriptionStyle} content="" />
          {searchbuy == null ? (
            <SearchForm data={searchrent} />
          ) : (
            <SearchForm data={searchbuy} />
          )}
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

SearchArea.defaultProps = {
  searchTitleStyle: {
    color: "#000033",
    fontSize: ["20px", "24px", "28px"],
    lineHeight: ["28px", "30px", "30px"],
    mb: "9px",
  },
  searchDescriptionStyle: {
    color: "#ff3333",
    fontSize: "15px",
    lineHeight: "24px",
    mb: "30px",
  },
};

export default SearchArea;

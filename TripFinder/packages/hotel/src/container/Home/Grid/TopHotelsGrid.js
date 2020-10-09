import React from "react";
import Heading from "components/UI/Heading/Heading";
import TextLink from "components/UI/TextLink/TextLink";
import Container from "components/UI/Container/Container";
import { PostPlaceholder } from "components/UI/ContentLoader/ContentLoader";
import SectionGrid from "components/SectionGrid/SectionGrid";
import SectionTitle from "components/SectionTitle/SectionTitle";
import useWindowSize from "library/hooks/useWindowSize";
import useDataApi from "library/hooks/useDataApi";
import { LISTING_POSTS_PAGE, SINGLE_POST_PAGE } from "settings/constant";
const TopHotelsGrid = () => {
  const { data, loading } = useDataApi("/data/top-hotel.json");
  const { width } = useWindowSize();

  let posts = data;
  let limit;

  if (data && width <= 767) {
    posts = data.slice(0, 4);
    limit = 4;
  }
  if (data && width >= 768) {
    posts = data.slice(0, 6);
    limit = 6;
  }
  if (data && width >= 992) {
    posts = data.slice(0, 8);
    limit = 8;
  }
  if (data && width >= 1200) {
    posts = data.slice(0, 10);
    limit = 10;
  }

  return (
    <Container fluid={true}>
      <SectionTitle
        title={<Heading content="Latest Posted Ads" />}
        link={<TextLink link={LISTING_POSTS_PAGE} content="Show all" />}
      />

      <SectionGrid
        link={SINGLE_POST_PAGE}
        columnWidth={[1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        data={posts}
        loading={loading}
        limit={limit}
        placeholder={<PostPlaceholder />}
      />
    </Container>
  );
};

export default TopHotelsGrid;

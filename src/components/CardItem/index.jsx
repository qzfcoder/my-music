import PropTypes from "prop-types";
import React, { memo } from "react";
import { CardItemWrapper } from "./style";
import { Col, Row } from "antd";
import ItemCard from "./c-cpns/ItemCard";
const CardItem = memo((props) => {
  const { highqualityList, colSpan = 6 } = props;

  return (
    <CardItemWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {highqualityList.slice(0, 8).map((highquality) => {
          return (
            <Col className="item-card-box" key={highquality.id} span={colSpan}>
              <ItemCard
                ItemData={highquality}
              ></ItemCard>
            </Col>
          );
        })}
      </Row>
    </CardItemWrapper>
  );
});

CardItem.propTypes = {
  highqualityList: PropTypes.array,
  colSpan: PropTypes.string,
};

export default CardItem;

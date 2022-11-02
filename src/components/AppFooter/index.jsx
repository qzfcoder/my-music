import PropTypes from "prop-types";
import React, { memo } from "react";
import { AppFooterWrapper } from "./style";
import FooterData from "@/assets/data/footer.json";
import IconPlay from "@/assets/svg/icon_play.jsx";
const AppFooter = memo((props) => {
  return (
    <AppFooterWrapper>
      <div className="footer-top">
        <div className="footer-left">
          <ul>
            {FooterData[0].list.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
          <div className="footer-left-bottom">
            {FooterData[1].list.map((item, index) => {
              return (
                <div key={index} className="list-item">
                  {item.map((i) => {
                    return (
                      <span key={i.name} className="">
                        {i.name}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-right">
          {FooterData[2].list.map((item) => {
            return (
              <div className='img-card'>
                <IconPlay width="50" height="50"></IconPlay>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AppFooterWrapper>
  );
});

AppFooter.propTypes = {};

export default AppFooter;

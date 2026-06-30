import styled from '@emotion/styled';
//import colors from '../../root/root';
import mobBottle from '../../images/signup/mobile/bottle-sign-in@1x.png';
import mobBubbles from '../../images/signup/mobile/background-element-sign-in@1x.png';

import mobBottle2x from '../../images/signup/mobile/bottle-sign-in@2x.png';
import mobBubbles2x from '../../images/signup/mobile/background-element-sign-in@2x.png';

import tabBottle from '../../images/signup/tablet/bottle-for-sign-in@1x.png';
import tabBottle2x from '../../images/signup/tablet/bottle-for-sign-in@2x.png';

import deskBottle from '../../images/signup/desktop/bottle-for-sign-in@1x.png';
import deskBub from '../../images/signup/desktop/background-element-main-page@1x.png';

import deskBottle2x from '../../images/signup/desktop/bottle-for-sign-in@2x.png';
import deskBub2x from '../../images/signup/desktop/background-element-main-page@2x.png';

export const StyledBackgroundWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: url(${mobBottle}), url(${mobBubbles});
  background-size:
    min(280px, calc(100% - 40px)) auto,
    100% auto;
  background-repeat: no-repeat;
  background-position:
    center bottom 16px,
    center top;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobBottle2x}), url(${mobBubbles2x});
  }

  @media (min-width: 768px) {
    background-image: url(${tabBottle});
    background-size: 768px 680px;
    background-position: center bottom;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabBottle2x});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${deskBottle}), url(${deskBub});
    background-size:
      916px 680px,
      1404px 582px;
    background-position:
      calc(50% - 720px) bottom,
      center top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${deskBottle2x}), url(${deskBub2x});
    }
  }
`;

export const StyledErrorMessage = styled.p`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  color: var(--secondary-color-red);
  @media (min-width: 768px) {
    text-align: left;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-right: 104px;
    text-align: right;
  }
`;

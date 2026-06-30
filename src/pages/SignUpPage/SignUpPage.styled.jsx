import styled from '@emotion/styled';
import mobBottle from '../../images/signup/mobile/bottle-home-screen@1x.png';
import mobBubbles from '../../images/signup/mobile/background-element-home-screen@1x.png';

import mobBottle2x from '../../images/signup/mobile/bottle-home-screen@2x.png';
import mobBubbles2x from '../../images/signup/mobile/background-element-home-screen@2x.png';

import tabBottle from '../../images/signup/tablet/bottle-home-screen@1x.png';
import tabBubbles from '../../images/signup/tablet/background-element-home-screen@1x.png';
import tabBottle2x from '../../images/signup/tablet/bottle-home-screen@2x.png';
import tabBubbles2x from '../../images/signup/tablet/background-element-home-screen@2x.png';

import deskBottle from '../../images/signup/desktop/bottle-home-screen@1x.png';
import deskBub from '../../images/signup/desktop/background-element-main-page@1x.png';

import deskBottle2x from '../../images/signup/desktop/bottle-home-screen@2x.png';
import deskBub2x from '../../images/signup/desktop/background-element-main-page@2x.png';

export const SignupContainer = styled.div`
  position: relative;
  isolation: isolate;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 60px);
  min-height: calc(100svh - 60px);
  padding: 0 20px 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media (min-width: 1440px) {
    padding-right: 112px;
    padding-left: 112px;
  }
`;

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
    background-image: url(${tabBottle}), url(${tabBubbles});
    background-size:
      518px 386px,
      768px 1280px;
    background-position:
      right bottom 24px,
      center top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabBottle2x}), url(${tabBubbles2x});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${deskBottle}), url(${deskBub});
    background-size:
      738px 548px,
      1404px 582px;
    background-position:
      calc(50% - 620px) bottom,
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
  width: 280px;
  font-size: 18px;
  text-align: left;
  color: var(--secondary-color-red);
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`;

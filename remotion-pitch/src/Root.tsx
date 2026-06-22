import React from 'react';
import {Composition} from 'remotion';
import {AllInPitch} from './AllInPitch';
import {AllInClean} from './AllInClean';
import {AllInVert} from './AllInVert';
import {ExplainerTitle} from './ExplainerTitle';
import {ExplainerIntro} from './ExplainerIntro';
import {AllInBettingAmerica} from './AllInBettingAmerica';

export const Root: React.FC = () => {
  return (
    <>
      {/* 70-second pitch: Betting on America: 14 shots, 2100 frames (1:10) */}
      <Composition
        id="AllInBettingAmerica"
        component={AllInBettingAmerica}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* Original pitch: TheAsk removed, ends on EndCard */}
      <Composition
        id="AllInPitch"
        component={AllInPitch}
        durationInFrames={1650}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* Public 16:9: all scenes, TheAsk replaced with EndCard */}
      <Composition
        id="AllInClean"
        component={AllInClean}
        durationInFrames={1650}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* Vertical: native 1080x1920 for Reels and TikTok */}
      <Composition
        id="AllInVert"
        component={AllInVert}
        durationInFrames={1170}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* Gambling Body Explainer: Tom intro, 9:16 vertical */}
      <Composition
        id="ExplainerIntro"
        component={ExplainerIntro}
        durationInFrames={144}
        fps={24}
        width={1080}
        height={1920}
      />
      {/* Gambling Body Explainer: title card, 9:16 vertical */}
      <Composition
        id="ExplainerTitle"
        component={ExplainerTitle}
        durationInFrames={240}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};

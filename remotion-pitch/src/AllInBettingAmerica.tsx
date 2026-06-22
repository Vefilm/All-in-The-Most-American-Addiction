import React from 'react';
import {Audio, Series, staticFile} from 'remotion';
import {DocScene} from './scenes/DocScene';
import {BATitle} from './scenes/BATitle';
import {BAClose} from './scenes/BAClose';
import {BAWallets} from './scenes/BAWallets';
import {BAGap} from './scenes/BAGap';
import {RED} from './lib/tokens';

// ─────────────────────────────────────────────
// TOTAL: 2100 frames = 70 seconds @ 30fps (1:10)
//
//  1. BATitle           90   (3s)  — ALLIN logo, title card
//  2. TheHangar        180   (6s)  — soldier/phone/bomber. The hook.
//  3. ThePlatform      150   (5s)  — phone. $54B. zero ID required.
//  4. TheAnalyst       150   (5s)  — Deebs in Paris. network on screen.
//  5. TheNineWallets   150   (5s)  — nine nodes. 98%. $2.4M.
//  6. TheBetSlip       120   (4s)  — betting slip + crosshair. Van Dyke.
//  7. TheOilTrade      150   (5s)  — trading floor. $800M. 6:50am.
//  8. TheGap           150   (5s)  — two phones. 15-minute gap.
//  9. TheCost          150   (5s)  — rubble. 3,468 killed.
// 10. TheOwners        150   (5s)  — dark room. Founders Fund. Trump Jr.
// 11. TheRegulator     150   (5s)  — empty office. 96 to 13.
// 12. ThePrecedent     150   (5s)  — DARPA TERMINATED to Polymarket.
// 13. TheCrime         150   (5s)  — charge sheet. redacted. no name.
// 14. BAClose          210   (7s)  — table. quote. title card.
//
//  90+180+150+150+150+120+150+150+150+150+150+150+150+210 = 2100
// ─────────────────────────────────────────────

export const AllInBettingAmerica: React.FC = () => {
  return (
    <>
      <Audio src={staticFile('the-hearing.mp3')} volume={0.75} />
      <Series>

        {/* 1. TITLE — 90 frames (3s) */}
        <Series.Sequence durationInFrames={90}>
          <BATitle />
        </Series.Sequence>

        {/* 2. THE HANGAR — 180 frames (6s) */}
        <Series.Sequence durationInFrames={180}>
          <DocScene
            image="hangar_hero_alt.jpg"
            imagePosition="center 35%"
            imageScale={[1.0, 1.07]}
            eyebrow="Scene One"
            headline="A military airman. A Polymarket app. A bet placed before the mission."
            body="No dialogue. No identification. Just the screen light on a face we can't quite see."
          />
        </Series.Sequence>

        {/* 3. THE PLATFORM — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="22_phone_antagonist_hero.jpg"
            imagePosition="center 50%"
            eyebrow="The Platform"
            eyebrowColor="#e9a84c"
            stat="$54 billion"
            statLabel="wagered — zero government ID required"
            body="Military operations. Presidential actions. Oil prices. The odds are live."
          />
        </Series.Sequence>

        {/* 4. THE ANALYST — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="20_deebs_screens.jpg"
            imagePosition="center 40%"
            eyebrow="Paris"
            headline="An on-chain analyst found a pattern."
            body="The cursor traced nine wallets placing bets on military outcomes — minutes before they happened."
          />
        </Series.Sequence>

        {/* 5. THE NINE WALLETS — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <BAWallets />
        </Series.Sequence>

        {/* 6. THE BET SLIP — 120 frames (4s) */}
        <Series.Sequence durationInFrames={120}>
          <DocScene
            image="06_betting_on_death.jpg"
            imagePosition="center 40%"
            imageScale={[1.04, 1.1]}
            eyebrow="USA v. Van Dyke — Trial Dec 7, 2026"
            eyebrowColor="#e9a84c"
            headline="Master Sergeant. 13 bets. Operations he participated in."
            body="$409,000 profit. Wire fraud. The simplest version of the problem, and the only one anyone has named."
          />
        </Series.Sequence>

        {/* 7. THE OIL TRADE — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="08_oil_trade_650am.jpg"
            imagePosition="center 40%"
            eyebrow="March 23, 2026 — 6:35 AM"
            eyebrowColor="#e9a84c"
            stat="$800M"
            statLabel="oil short — coordinated positions"
            body="Fifteen minutes later: a Trump Truth Social post. No CFTC investigation opened."
          />
        </Series.Sequence>

        {/* 8. THE GAP — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <BAGap />
        </Series.Sequence>

        {/* 9. THE COST — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="gen_cost_hero.jpg"
            imagePosition="center 40%"
            eyebrow="The Cost"
            eyebrowColor={RED}
            headline="3,468 killed in Iran."
            headlineSize={72}
            body="A school in Minab. More than 100 children. The Pentagon said it was a command center. It offered no evidence."
          />
        </Series.Sequence>

        {/* 10. THE OWNERS — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="05_the_owners.jpg"
            imagePosition="center 40%"
            eyebrow="The Ownership"
            headline="Founders Fund. Trump Jr. $9 billion valuation."
            body="The president's family holds equity in the platform. The regulator is their former client's business partner."
          />
        </Series.Sequence>

        {/* 11. THE HOLLOW REGULATOR — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="gen_hollow_regulator.jpg"
            imagePosition="center center"
            imageScale={[1.0, 1.06]}
            overlay={0.55}
            eyebrow="CFTC Enforcement"
            eyebrowColor={RED}
            stat="96 → 13"
            statLabel="enforcement actions — FY2023 to FY2025 under Selig"
            body="No investigation of the oil trades. No response to the Warren deadline. Silence."
          />
        </Series.Sequence>

        {/* 12. THE PRECEDENT — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="13_darpa_killed_it.jpg"
            imagePosition="center 45%"
            imageScale={[1.02, 1.08]}
            overlay={0.45}
            eyebrow="DARPA — 2003"
            headline="Congress killed this idea in 24 hours."
            body="Twenty-three years later, the private sector built it anyway — and the people who regulate it hold the equity."
          />
        </Series.Sequence>

        {/* 13. THE CRIME HAS NO NAME — 150 frames (5s) */}
        <Series.Sequence durationInFrames={150}>
          <DocScene
            image="14_crime_no_name.jpg"
            imagePosition="center 45%"
            imageScale={[1.03, 1.09]}
            eyebrow="The Law Wasn't Written for This"
            eyebrowColor={RED}
            headline="The crime has no name."
            headlineSize={74}
            body="The DOJ is improvising with a 1983 commodities fraud statute. The trial starts December 7, 2026."
          />
        </Series.Sequence>

        {/* 14. THE CLOSE — 210 frames (7s): quote + big title card — unchanged */}
        <Series.Sequence durationInFrames={210}>
          <BAClose />
        </Series.Sequence>

      </Series>
    </>
  );
};

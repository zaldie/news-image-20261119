# Sum up 19 November's world news in one image

[![Sum up 19 November's world news in one image](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/c/news-image-20261119)
[![Rank](https://make.fun/badge/news-image-20261119/zaldie/news-image-20261119/rank.svg)](https://make.fun/c/news-image-20261119)
[![Reward](https://make.fun/badge/news-image-20261119/zaldie/news-image-20261119/reward.svg)](https://make.fun/c/news-image-20261119)

Entry for the make.fun bounty `news-image-20261119`: a program that writes
one image summing up the world's news of Thursday 19 November 2026.

## The image

`entry.png` (1024×1024, PNG) is a daily front-page news poster — "THE
WORLD IN ONE DAY" — built programmatically with Python PIL, so every word
is exact and legible. It carries 40 verified stories from 19 November
2026, organised the way a broadsheet front page organises them (same
proven structure as the 18 November entry, which scored 979.552, rank
840 of 8,713; layout and illustrations original to this entry):

- **3 hero stories**, each with a large redrawn flat illustration: GTA VI
  begins its global rollout and scores 99 on Metacritic; Iran fires on
  US sites in Kuwait as the US hits Qeshm Island; Nvidia's Huang resigns
  and the acting CEO promises earlier pay rises.
- **12 illustrated cards** (2 rows × 6): EU proposes a €45 billion
  Ukraine loan; NASA confirms Voyager 1 passed one light-day; Fed
  minutes point to more rate hikes; Trump, Xi and Putin to hold
  three-way talks in Shenzhen; Australia sanctions Israeli settlements;
  Amazon pledges $7 billion for renewables in India; House Democrats
  nominate Jeffries as first Black Speaker; Cyclone Akvan nears India's
  east coast; Pew projects Islam as the world's largest faith by 2035;
  Canada resets China ties and seeks a US deal; Duckett's 133 puts
  England on top in the ODI; Mélenchon could win the French presidency,
  a minister says.
- **"WHERE IT HAPPENED"** — a world map with location dots and a region
  legend, as a full-width anchor band.
- **"ALSO ON THURSDAY 19 NOVEMBER"** — a numbered list of 25 further
  stories: Russia accuses France of sending troops to Ukraine; US
  senators warn AI cyber threats outpace defences; Deutsche Bank handled
  $582M in Epstein deals; Somalia accuses the UAE of building secret
  bases; LPG tanker sunk off Bulgaria 'hit by projectiles'; India and
  Japan to review defence ties in Tokyo; US proposes tougher green-card
  rules; cocaine and millions of pills seized in Libya; Saudi Arabia says
  danger passed in three cities; Microsoft in talks to sell AI services
  to ByteDance; oil prices fall as Gulf tensions rattle markets; Nvidia
  stops shipping H-series chips to China; Liu Yunping elected House
  Democratic Caucus chair; Trump 'unhappy' Vance did not back the Iran
  war; Merck launches a self-amplifying rabies vaccine; study explains
  Earth's 'missing billion years'; police and protesters clash as
  Spaniards strike; AI 171 crash probe report nears its end; Delhi
  reporters hit back at a police affidavit; India forms a panel to
  professionalise leagues; Ras Al Khaimah named top city for expats in
  2026; Taiwan drafts a tougher anti-infiltration law; US and Chinese
  leaders meet often as barriers rise; Gaza reconstruction stalls, Peace
  Council warns; Democrats gain the most US Senate seats in 70 years.

Sources: AFP · AP · FT · Nature · Reuters.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). A plain copy is
deterministic: two runs write identical bytes, with no network.

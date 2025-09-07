// src/components/homepage/MainContent.jsx
import React, { useState } from "react";
import { ArrowRightIcon } from "./icons";

// card images
import imgJournals from "../../assets/images/card_journals.png";
import imgTopics from "../../assets/images/card_topics.png";
import imgSubmit from "../../assets/images/card_submit.png";
import imgPublish from "../../assets/images/card_publish.png";
import imgPeerReview from "../../assets/images/card_peer_review.png";

// news images
import newsMicrobial from "../../assets/images/news_microbial_map.png";
import newsStatins from "../../assets/images/news_statins_sepsis.png";
import newsTech2025 from "../../assets/images/news_tech_2025.png";
import newsAntarctic from "../../assets/images/news_antarctic_anchors.png";
import newsHawk from "../../assets/images/news_hawk_traffic.png";
import newsSustain from "../../assets/images/news_sustainability_old_orgs.png";
import newsFossil from "../../assets/images/news_fossil_wombat.png";

/**
 * <MainContent pillOffsetY={-28} />
 * <MainContent pillOffsetY={55} pillGap={32} />
 */
export default function MainContent({
  pillOffsetY = 55,
  pillGap = 24,
}) {
  // pill colors per your request / original look
  const CHIP_BG = "#545555";     // active chip color
  const TRACK_BORDER = "#D1D5DB"; // light outline for the track (≈ tailwind gray-300)

  const [activeTab, setActiveTab] = useState("Authors");
  const tabs = ["Authors", "Editors and reviewers", "Collaborators"];

  const infoCards = [
    {
      title: "Find a journal",
      description:
        "We have a home for your research. Our community journals and sections cover more than 1,700 academic disciplines.",
      image: imgJournals,
    },
    {
      title: "Find a topic",
      description:
        "Research Topics bring together expert researchers to work on emerging themes. Find your community or start a new one.",
      image: imgTopics,
    },
    {
      title: "Submit your research",
      description:
        "Ready to publish? Start your submission today and get more impact for your research by publishing with us.",
      image: imgSubmit,
    },
    {
      title: "How to publish",
      description:
        "Check our guidelines and policies for everything you need, from choosing a journal to submitting your manuscript for review.",
      image: imgPublish,
    },
    {
      title: "Peer review",
      description:
        "Our efficient peer review means you’ll get a decision on your manuscript fast – our average acceptance time is 96 days.",
      image: imgPeerReview,
    },
  ];

  const newsArticles = [
    {
      category: "SCIENCE NEWS",
      date: "Published on 06 Sep 2025",
      title:
        "Biological ‘moonshot’ accelerates efforts to genetically map life on Earth",
      description:
        "From the mighty blue whale to the humble baker’s yeast, scientists have barely begun to understand the vast genetic diversity among lifeforms. Of the 1.67m known species of animal, plant, fungi and protists, just 1% have been genetically sequenced.",
      image: newsMicrobial,
    },
    {
      category: "SCIENCE NEWS",
      date: "Published on 06 Jun 2025",
      title:
        "Statins may reduce risk of death by 39% for patients with life-threatening sepsis",
      description:
        "A study in Frontiers in Immunology shows supplementary statins could boost survival.",
      image: newsStatins,
    },
    {
      category: "FRONTIERS NEWS",
      date: "Published on 25 Jun 2025",
      title:
        "Shaping the future: WEF and Frontiers reveal Top 10 Emerging Technologies for 2025",
      description:
        "Spotlighting innovations ready to make real-world impact across climate, healthcare, and digital authenticity.",
      image: newsTech2025,
    },
    {
      category: "SCIENCE NEWS",
      date: "Published on 09 Jun 2025",
      title:
        "Protected Antarctic oceanic life threatened by ships anchoring, first underwater videos show",
      image: newsAntarctic,
    },
    {
      category: "SCIENCE NEWS",
      date: "Published on 23 May 2025",
      title:
        "Street smarts: how a hawk learned to use traffic signals to hunt more successfully",
      image: newsHawk,
    },
    {
      category: "RESEARCH TOPICS",
      date: "Published on 08 Jun 2025",
      title:
        "Survival of the greenest: why world’s oldest organizations are surpassing young upstarts in environmental sustainability",
      image: newsSustain,
    },
    {
      category: "SCIENCE NEWS",
      date: "Published on 03 Jun 2025",
      title:
        "Ancient collagen can help identify a ‘wombat the size of a hippo’ in the fossil record",
      image: newsFossil,
    },
  ];

  // 1 big, 2 medium, 4 small
  const top1 = newsArticles[0] ? [newsArticles[0]] : [];
  const mid2 = newsArticles.slice(1, 3);
  const low4 = newsArticles.slice(3, 7);

  // pill positioning
  const isUp = pillOffsetY < 0;
  const pillStyle = isUp
    ? { transform: `translateY(${pillOffsetY}px)` }
    : { marginTop: pillOffsetY };
  const spacerBelowPill = (isUp ? -pillOffsetY : 0) + pillGap;

  return (
    <main className="bg-gray-50">
      {/* ===== Section below hero ===== */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 -mt-12 md:-mt-20">
        {/* Segmented pill — inset chip, no inner lines, no shadow */}
        <div className="w-full flex justify-center" style={pillStyle}>
          <div
            className="flex items-center bg-white rounded-full border p-[3px]" // the p-[3px] is the uniform inset gap
            style={{ borderColor: TRACK_BORDER }}
          >
            {tabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="
                    rounded-full
                    px-5 md:px-6
                    py-2.5
                    text-sm
                    font-semibold
                    whitespace-nowrap
                    transition-colors
                    focus:outline-none
                  "
                  style={
                    active
                      ? { backgroundColor: CHIP_BG, color: "#fff" }
                      : { color: CHIP_BG, backgroundColor: "transparent" }
                  }
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gap below the pill */}
        <div style={{ height: spacerBelowPill }} />

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== News ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-4xl font-bold mb-8">News</h2>

        {/* 1 big */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          {top1.map((article, i) => (
            <a
              href="#"
              key={`top-${i}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden grid md:grid-cols-2"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {article.category}
                </p>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-2xl font-normal mb-3">{article.title}</h3>
                {article.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {article.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* 2 medium (image LEFT, text RIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {mid2.map((article, i) => (
            <a
              href="#"
              key={`mid-${i}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row"
            >
              <div className="relative md:w-1/2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-5 md:w-1/2">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {article.category}
                </p>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-normal mb-2">{article.title}</h3>
                {article.description && (
                  <p className="text-gray-600 text-sm">{article.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* 4 small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {low4.map((article, i) => (
            <a
              href="#"
              key={`low-${i}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-4">
                <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                  {article.category}
                </p>
                <p className="text-[11px] text-gray-500 mb-2">
                  {article.date}
                </p>
                <h3 className="text-base font-normal mb-1">{article.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* See more news */}
        <div className="text-center mt-10">
          <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
            See more news <ArrowRightIcon />
          </button>
        </div>
      </section>
    </main>
  );
}

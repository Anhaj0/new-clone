// src/components/homepage/MainContent.jsx
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "./icons";

// card images (existing)
import imgJournals from "../../assets/images/card_journals.png";
import imgTopics from "../../assets/images/card_topics.png";
import imgSubmit from "../../assets/images/card_submit.png";
import imgPublish from "../../assets/images/card_publish.png";
import imgPeerReview from "../../assets/images/card_peer_review.png";

// collaborators images (your files renamed to these)
import imgCollabPressOffice from "../../assets/images/collab_press_office.png";
import imgCollabInstitutional from "../../assets/images/collab_institutional_partnerships.png";
import imgCollabPublishing from "../../assets/images/collab_publishing_partnerships.png";
import imgCollabPolicyLabs from "../../assets/images/collab_policy_labs.png";
import imgCollabHowWePublish from "../../assets/images/card_publish.png";

// news images
import newsMicrobial from "../../assets/images/news_microbial_map.png";
import newsStatins from "../../assets/images/news_statins_sepsis.png";
import newsTech2025 from "../../assets/images/news_tech_2025.png";
import newsAntarctic from "../../assets/images/news_antarctic_anchors.png";
import newsHawk from "../../assets/images/news_hawk_traffic.png";
import newsSustain from "../../assets/images/news_sustainability_old_orgs.png";
import newsFossil from "../../assets/images/news_fossil_wombat.png";

export default function MainContent({ pillOffsetY = 55, pillGap = 24 }) {
  const CHIP_BG = "#545555";
  const TRACK_BORDER = "#D1D5DB";

  // tune this to your taste: min 48px, fluid up to max 80px
  const SECTION_GAP = "clamp(48px, 5vw, 80px)";

  // default tab
  const [activeTab, setActiveTab] = useState("Editors and reviewers");

  // cross-fade state
  const [visibleTab, setVisibleTab] = useState(activeTab);
  const [phase, setPhase] = useState("in"); // 'out' | 'in'
  const FADE_MS = 180;

  const handleTabChange = (tab) => {
    if (tab === visibleTab) return;
    setActiveTab(tab);
    setPhase("out");
    window.clearTimeout(handleTabChange._t);
    handleTabChange._t = window.setTimeout(() => {
      setVisibleTab(tab);
      setPhase("in");
    }, FADE_MS);
  };
  useEffect(() => () => window.clearTimeout(handleTabChange._t), []);

  const tabs = ["Authors", "Editors and reviewers", "Collaborators"];

  const cardsByTab = {
    Authors: [
      { title: "Find a journal", description: "We have a home for your research. Our community journals and sections cover more than 1,700 academic disciplines.", image: imgJournals },
      { title: "Find a topic", description: "Research Topics bring together expert researchers to work on emerging themes. Find your community or start a new one.", image: imgTopics },
      { title: "Submit your research", description: "Ready to publish? Start your submission today and get more impact for your research by publishing with us.", image: imgSubmit },
      { title: "How to publish", description: "Check our guidelines and policies for everything you need, from choosing a journal to submitting your manuscript for review.", image: imgPublish },
      { title: "Peer review", description: "Our efficient peer review means you’ll get a decision on your manuscript fast – our average acceptance time is 96 days.", image: imgPeerReview },
    ],
    "Editors and reviewers": [
      { title: "Peer review", description: "Our efficient peer review means you’ll get a decision on your manuscript fast – our average acceptance time is 96 days.", image: imgPeerReview },
      { title: "How we publish", description: "All Frontiers journals are community-run and fully open access, so every research article we publish is immediately and permanently free to read.", image: imgPublish },
      { title: "Editor guidelines", description: "Reviewing a manuscript? See our guidelines for everything you need to know about our peer review process.", image: imgSubmit },
      { title: "Become an editor", description: "Apply to join an editorial board and collaborate with an international team of carefully selected independent researchers.", image: imgJournals },
      { title: "My assignments", description: "Find and track your editorial assignments with ‘My Frontiers’ so you can save time and focus on your research.", image: imgTopics },
    ],
    Collaborators: [
      { title: "Press office", description: "Visit our press office for key media contact information, as well as Frontiers’ media kit, including our embargo policy, logos, key facts, leadership bios, and imagery.", image: imgCollabPressOffice },
      { title: "Institutional partnerships", description: "Join more than 670 institutions around the world already benefiting from an institutional membership with Frontiers, including CERN, Max Planck Society, and the University of Oxford.", image: imgCollabInstitutional },
      { title: "Publishing partnerships", description: "Partner with Frontiers and make your society’s transition to open access a reality with our custom-built platform and publishing expertise.", image: imgCollabPublishing },
      { title: "Policy Labs", description: "Connecting experts from business, science, and policy to strengthen the dialogue between scientific research and informed policymaking.", image: imgCollabPolicyLabs },
      { title: "How we publish", description: "All Frontiers journals are community-run and fully open access, so every research article we publish is immediately and permanently free to read.", image: imgCollabHowWePublish },
    ],
  };

  const infoCards = cardsByTab[visibleTab] ?? [];

  // news data
  const newsArticles = [
    { category: "SCIENCE NEWS", date: "Published on 06 Sep 2025", title: "Biological ‘moonshot’ accelerates efforts to genetically map life on Earth", description: "From the mighty blue whale to the humble baker’s yeast, scientists have barely begun to understand the vast genetic diversity among lifeforms. Of the 1.67m known species of animal, plant, fungi and protists, just 1% have been genetically sequenced.", image: newsMicrobial },
    { category: "SCIENCE NEWS", date: "Published on 06 Jun 2025", title: "Statins may reduce risk of death by 39% for patients with life-threatening sepsis", description: "A study in Frontiers in Immunology shows supplementary statins could boost survival.", image: newsStatins },
    { category: "FRONTIERS NEWS", date: "Published on 25 Jun 2025", title: "Shaping the future: WEF and Frontiers reveal Top 10 Emerging Technologies for 2025", description: "Spotlighting innovations ready to make real-world impact across climate, healthcare, and digital authenticity.", image: newsTech2025 },
    { category: "SCIENCE NEWS", date: "Published on 09 Jun 2025", title: "Protected Antarctic oceanic life threatened by ships anchoring, first underwater videos show", image: newsAntarctic },
    { category: "SCIENCE NEWS", date: "Published on 23 May 2025", title: "Street smarts: how a hawk learned to use traffic signals to hunt more successfully", image: newsHawk },
    { category: "RESEARCH TOPICS", date: "Published on 08 Jun 2025", title: "Survival of the greenest: why world’s oldest organizations are surpassing young upstarts in environmental sustainability", image: newsSustain },
    { category: "SCIENCE NEWS", date: "Published on 03 Jun 2025", title: "Ancient collagen can help identify a ‘wombat the size of a hippo’ in the fossil record", image: newsFossil },
  ];
  const top1 = newsArticles[0] ? [newsArticles[0]] : [];
  const mid2 = newsArticles.slice(1, 3);
  const low4 = newsArticles.slice(3, 7);

  // pill positioning
  const isUp = pillOffsetY < 0;
  const pillStyle = isUp ? { transform: `translateY(${pillOffsetY}px)` } : { marginTop: pillOffsetY };
  const spacerBelowPill = (isUp ? -pillOffsetY : 0) + pillGap;

  return (
    <main className="bg-gray-50">
      {/* ===== Section below hero ===== */}
      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 -mt-12 md:-mt-20">
        {/* Segmented pill */}
        <div className="w-full flex justify-center" style={pillStyle}>
          <div className="flex items-center bg-white rounded-full border p-[3px]" style={{ borderColor: TRACK_BORDER }}>
            {tabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className="rounded-full px-5 md:px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none"
                  style={active ? { backgroundColor: CHIP_BG, color: "#fff" } : { color: CHIP_BG, backgroundColor: "transparent" }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gap below the pill */}
        <div style={{ height: spacerBelowPill }} />

        {/* Info cards (fluid, capped gap below) */}
        <div
          className={[
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
            "transition-opacity transform-gpu will-change-[opacity,transform]",
            phase === "out" ? "opacity-0 translate-y-2 duration-200 ease-fade-out" : "opacity-100 translate-y-0 duration-200 ease-fade-in",
          ].join(" ")}
          style={{ marginBottom: SECTION_GAP }}
        >
          {infoCards.map((card) => (
            <div key={card.title} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              <div className="relative">
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
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
            <a href="#" key={`top-${i}`} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden grid md:grid-cols-2">
              <div className="relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{article.category}</p>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-2xl font-normal mb-3">{article.title}</h3>
                {article.description && <p className="text-gray-700 text-sm leading-relaxed">{article.description}</p>}
              </div>
            </a>
          ))}
        </div>

        {/* 2 medium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {mid2.map((article, i) => (
            <a href="#" key={`mid-${i}`} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row">
              <div className="relative md:w-1/2">
                <img src={article.image} alt={article.title} className="w-full h-56 md:h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-5 md:w-1/2">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{article.category}</p>
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-normal mb-2">{article.title}</h3>
                {article.description && <p className="text-gray-600 text-sm">{article.description}</p>}
              </div>
            </a>
          ))}
        </div>

        {/* 4 small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {low4.map((article, i) => (
            <a href="#" key={`low-${i}`} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              <div className="relative">
                <img src={article.image} alt={article.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-4">
                <p className="text-[11px] text-gray-500 uppercase tracking-wide">{article.category}</p>
                <p className="text-[11px] text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-base font-normal mb-1">{article.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
            See more news <ArrowRightIcon />
          </button>
        </div>
      </section>
    </main>
  );
}

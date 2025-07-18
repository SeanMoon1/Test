import React, { useState } from "react";

const KEYWORDS = [
  {
    front: "문제 해결력",
    back:
      "현장의 문제를 파악하고 능동적으로 해결 방안을 제시한 경험. 실제 현장 문제에서 출발한 기술 기획 경험을 보유.",
  },
  {
    front: "소통 기반 협업가",
    back:
      "팀워크와 커뮤니케이션을 중시하며, 조직 내 갈등 상황 조율 및 팀워크 유지 경험. 중립적 소통자.",
  },
  {
    front: "성장형 풀스택 개발자",
    back:
      "프론트부터 백엔드까지 다양한 기술 스택 학습 중. React, JavaScript, Flutter, Python 등 실무형 프로젝트 경험.",
  },
  {
    front: "실행력 있는 기획자",
    back:
      "발상에 그치지 않고, 실제 어플리케이션을 직접 기획·설계·구현까지 도전. 재고 관리 앱 등 실제 문제 해결 프로젝트 수행.",
  },
  {
    front: "사용자 중심 문제 해결",
    back:
      "기술을 넘어 실제 사용자의 니즈를 파악하고, 사용자 중심의 문제 해결을 지향. GenAI 기반 웹서비스, 현장형 프로젝트 경험.",
  },
  {
    front: "보안 고려 아키텍처",
    back:
      "확장 가능하고 안전한 시스템 아키텍처 설계 경험. AWS 연동, 데이터 암호화 등 보안 강화 설계.",
  },
  {
    front: "UX 발상력",
    back:
      "비개발 환경에서도 공감 가능한 UX 설계. 사용자 관점에서 직관적이고 접근하기 쉬운 경험을 설계하는 창의적 사고력.",
  },
  {
    front: "커뮤니케이션/리더십",
    back:
      "갈등 상황에서도 중재와 설득을 통해 조용한 리더십 발휘. 팝업 매장 운영, 팀 프로젝트 리더 경험.",
  },
];

function PortfolioKeywords() {
  const [flipped, setFlipped] = useState(Array(KEYWORDS.length).fill(false));

  const handleFlip = (idx) => {
    setFlipped((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      handleFlip(idx);
    }
  };

  return (
    <div style={{
      maxWidth: 1000,
      margin: "0 auto",
      padding: "32px 16px 0 16px",
      fontFamily: "Pretendard, Arial, sans-serif",
      background: "#fff",
      minHeight: "100vh",
      color: "#667eea"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2.2rem",
        marginBottom: 8,
        color: "#667eea",
        fontWeight: 800
      }}>
        문승연 포트폴리오 키워드
      </h1>
      <div style={{
        textAlign: "center",
        color: "#764ba2",
        fontSize: "1.1rem",
        marginBottom: 36,
        fontWeight: 500
      }}>
        기술과 소통을 연결하는 풀스택 루키 개발자, 문승연입니다.
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 28,
        justifyContent: "center",
        marginTop: 24
      }}>
        {KEYWORDS.map((card, idx) => (
          <div
            key={card.front}
            tabIndex={0}
            style={{
              width: 220,
              height: 140,
              perspective: 800,
              cursor: "pointer",
              position: "relative",
              background: "none",
              outline: "none",
              marginBottom: 12
            }}
            className={flipped[idx] ? "flipped" : ""}
            onClick={() => handleFlip(idx)}
            onMouseEnter={() => setFlipped((prev) => prev.map((f, i) => i === idx ? true : f))}
            onMouseLeave={() => setFlipped((prev) => prev.map((f, i) => i === idx ? false : f))}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            <div style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
              transformStyle: "preserve-3d",
              boxShadow: flipped[idx] ? "0 8px 32px rgba(102,126,234,0.18)" : "0 2px 12px rgba(102,126,234,0.08)",
              transform: flipped[idx] ? "rotateY(180deg)" : "none"
            }}>
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                backfaceVisibility: "hidden",
                borderRadius: 16,
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                fontSize: "1.18rem",
                fontWeight: 800,
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 18,
                textAlign: "center",
                border: "none"
              }}>
                {card.front}
              </div>
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                backfaceVisibility: "hidden",
                borderRadius: 16,
                background: "#fff",
                color: "#764ba2",
                fontSize: "1rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 18,
                textAlign: "center",
                border: "2px solid #764ba2",
                transform: "rotateY(180deg)"
              }}>
                {card.back}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioKeywords; 
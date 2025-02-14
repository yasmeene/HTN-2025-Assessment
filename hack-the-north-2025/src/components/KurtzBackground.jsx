import React from "react";
import "./KurtzBackground.css";

export default function KurzBackground() {
  return (
    <div className="kurtz-background">
      {/* Stars */}
      <div className="kurtz-stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="kurtz-star"
            style={{
              width: `${Math.random() * 2 + 1}px`, // Random star size (1px to 3px)
              height: `${Math.random() * 2 + 1}px`, // Random star size (1px to 3px)
              top: `${Math.random() * 100}%`, // Random vertical position
              left: `${Math.random() * 100}%`, // Random horizontal position
              animationDelay: `${Math.random() * 2}s`, // Random animation delay
            }}
          />
        ))}
      </div>

      {/* Floating planet */}
      <div className="kurtz-planet">
        <div className="kurtz-planet-inner">
          <div className="kurtz-planet-shadow"></div> {/* Inner shadow */}
          <div className="kurtz-planet-light"></div> {/* Glowing light */}
        </div>
      </div>

      {/* Decorative element */}
      <div className="kurtz-decor">
        <div className="kurtz-decor-inner"></div> {/* Rotated square */}
      </div>
    </div>
  );
}
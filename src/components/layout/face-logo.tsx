import { range } from "lodash"

export const FaceLogo = () => {
  return (
    <div className="logo-face">
      <img src="/sticker/face-logo.svg" alt="Quyen face" className="logo-face-front" />
      <div className="logo-face-side">
        {range(80).map((_, idx) => (
          <div
            key={idx}
            style={{
              transform: `translateY(38.25px) translateX(37px) rotateZ(${94.5 + idx * 4.5}deg) translateX(40px) rotateY(90deg)`,
            }}
          ></div>
        ))}
      </div>
      <img src="/sticker/face-logo.svg" alt="Quyen face" className="logo-face-back" />
    </div>
  )
}

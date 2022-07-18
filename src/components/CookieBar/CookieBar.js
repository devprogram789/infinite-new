import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieBar() {
  return (
    <div className="grid grid-cols-12 items-start text-left justify-center">
      <CookieConsent
        location="bottom"
        buttonText="ยอมรับทั้งหมด"
        cookieName="Infinite-Cookie"
        style={{ background: "rgba(66, 66, 66, 0.84)" }}
        buttonStyle={{
          color: "#0F1840",
          fontSize: "16px",
          borderRadius: "1rem",
          height: "2.5rem",
          background: "#4cc0b3",
        }}
        expires={1}
      >
        เว็บไซต์นี้มีการใช้คุกกี้เพื่อการปรับปรุงการใช้บริการออนไลน์ของท่าน
        โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์.
        คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่{" "}
        <a href="/cookies-policy" className="underline text-infinite2-2">
          นโยบายคุกกี้
        </a>
      </CookieConsent>
    </div>
  );
}

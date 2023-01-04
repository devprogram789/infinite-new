import React from "react";

export default function WidgetWrapper() {
  return (
    <>
      <div class="fixed bottom-5 right-5">
        <div class="flex flex-col justify-center items-center text-center gap-2">
          <div class="w-10 h-10 bg-infinite2-4 rounded-full p-1">
            <a href="https://lin.ee/mlElpgq">
              <img
                src="../../assets/images/footer/icon-line.png"
                class="object-cover rounded-full w-full h-full"
              />
            </a>
          </div>
          <div class="w-10 h-10 bg-infinite2-4 rounded-full p-1">
            <a href="https://www.facebook.com/InfiniteDigitalConsultants/">
              <img
                src="../../assets/images/footer/icon-facebook.png"
                class="object-cover rounded-full w-full h-full"
              />
            </a>
          </div>
          <div class="w-10 h-10 bg-infinite2-4 rounded-full p-1">
            <a href="tel:+66918166689">
              <img
                src="../../assets/images/footer/โทรศัพท์-mini.png"
                class="object-cover  w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

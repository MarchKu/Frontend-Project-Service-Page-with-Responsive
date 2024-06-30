function Footer() {
  return (
    <footer className="w-full h-[470px] flex flex-col justify-center items-center">
      <div className="w-[1440px] h-full flex-col items-center justify-center pb-10 pt-20">
        <div className="w-full flex flex-row justify-center items-center pb-10">
          <div className="w-full flex flex-row">
            <div id="agencio" className="w-[40%] pr-40">
              <div>
                <img src="src\img\Footer\Logo.png" />
                <p className="text-font_color2 ">
                  Winged moving moveth created for shall and a divide the their
                  days male midst shall hath doesn't won't for. Midst life. Over
                  a great night.
                </p>
              </div>
              <div id="logo-social" className="flex-row inline-flex gap-4 pt-5">
                <div className="rounded-full w-[32px] h-[32px] bg-color_background flex items-center justify-center hover:bg-blue-200 cursor-pointer">
                  <img src="src\img\Footer\Facebook.svg" />
                </div>
                <div className="rounded-full w-[32px] h-[32px] bg-color_background flex items-center justify-center hover:bg-blue-200 cursor-pointer">
                  <img src="src\img\Footer\Twitter.svg" />
                </div>
                <div className="rounded-full w-[32px] h-[32px] bg-color_background flex items-center justify-center hover:bg-blue-200 cursor-pointer">
                  <img src="src\img\Footer\LinkIn.svg" />
                </div>
                <div className="rounded-full w-[32px] h-[32px] bg-color_background flex items-center justify-center hover:bg-blue-200 cursor-pointer">
                  <img src="src\img\Footer\Youtube.svg" />
                </div>
              </div>
            </div>

            <div id="feature" className="list-none w-[20%]">
              <ul className="text-2xl font-medium text-font_color3 pb-5">
                Feature
              </ul>
              <div className="text-font_color2 flex flex-col space-y-2">
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Analytic
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Activity
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Influencer
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Publishing
                  </li>
                </a>
              </div>
            </div>

            <div id="about" className="list-none w-[20%]">
              <ul className="text-2xl font-medium text-font_color3 pb-5">
                About
              </ul>
              <div className="text-font_color2 flex flex-col space-y-2">
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">Blog</li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Pricing
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Company
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Careers
                  </li>
                </a>
              </div>
            </div>

            <div id="resources" className="list-none w-[20%]">
              <ul className="text-2xl font-medium text-font_color3 pb-5">
                Resources
              </ul>
              <div className="text-font_color2 flex flex-col space-y-2 ">
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Application Security
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Software Policy
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Supply Chain
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-font_color1 cursor-pointer">
                    Manage Reputation
                  </li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          id="copyright"
          className="text-center pt-6 text-[#0B075733] font-semibold "
        >
          Copyright ©2020 Agencio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;

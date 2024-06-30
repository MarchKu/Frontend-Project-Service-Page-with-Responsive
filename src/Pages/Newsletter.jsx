function Newsletter() {
  return (
    <section className="w-full h-[350px] flex flex-col justify-center items-center font-semibold">
        <div
          id="sign-up-new"
          className="h-full rounded-2xl bg-color_background w-[1440px] flex justify-center"
        >
          <div id="sign-up-email" className="flex p-14 flex-col items-center ">
            <h1 className="text-font_heading text-center text-font_color3 max-[768px]:w-80 ">
              Sign up to our newsletter
            </h1>
            <div
              id="detail-sign"
              className="text-font_info text-center pt-6 font-normal text-font_color2 max-[768px]:w-80"
            >
              <p>Recive latest news, updates and many</p>
              <p>other news every week.</p>
            </div>
            <div id="summit-email" className="pt-10 relative max-[768px]:w-80">
              <input
                type="email"
                id="email-address"
                name="enter-email"
                className="rounded-full w-[480px] h-[67px] text-base font-normal pl-10 focus:outline-none focus:border-2 border-color_primary max-[768px]:w-80"
                placeholder="Enter your email address"
              />
              <button type="submit" className="absolute right-4 bottom-2.5">
                <div
                  id="button-summit"
                  className="w-12 h-12 rounded-full flex justify-center items-center bg-color_primary hover:bg-hover_primary active:bg-blue-500"
                >
                  <img src="src\img\NewsLetter\Arrow.svg" />
                </div>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
export default Newsletter;

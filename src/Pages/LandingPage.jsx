function LandingPage() {
  return (
    <section className="w-full h-screen min-w-[80vw] flex flex-col justify-start items-center bg-[linear-gradient(5deg,_white_15%,_#f4f7fc_15%)]">
      <div className="w-[1440px] h-full flex flex-col justify-start items-center">
        {/* NavBar */}
        <nav className="w-full h-[6%] mt-[2%] flex justify-between items-center relative ">
          <div className="logo h-full w-[20%]">
            <a href="#">
              <img
                src="src\img\LandingPage\Logo.png"
                alt="logo"
                className="h-full"
              />
            </a>
          </div>
          <div className="pr-20 w-[80%] h-full">
            <ul className="flex justify-end gap-[5%] items-center text-font_color3 h-full">
              <li className="hover:underline text-font_info">
                <a href="#">Home </a>
              </li>
              <li className="hover:underline text-font_info">
                <a href="#">Category</a>
              </li>
              <li className="hover:underline text-font_info">
                <a href="#">Service</a>
              </li>
              <li className="hover:underline text-font_info">
                <a href="#">Blog</a>
              </li>
              <li className="hover:underline text-font_info">
                <a href="#">Contact</a>
              </li>
              <li className=" h-full text-center p-6 text-base text-font_color3 bg-color_secondary rounded-lg hover:bg-hover_secondary hover:cursor-pointer">
                <button className="text-font_button h-full w-[180px] ">
                  Create Account
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="w-full max-w-full h-[92%] flex justify-between pt-[10%]">
          {/* text */}
          <div className="w-[40%] h-full flex flex-col justify-start pt-[6%] gap-8">
            <p className="text-primabg-primary text-[2rem] text-primary">
              CREATIVE AGENCY <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
            </p>
            <p className=" text-font_heading font-medium text-font_color3 ">
              We are here to give the best service
            </p>
            <p className="text-font_info text-[#8480AE]">
              It's crafted with the latest trend of design & coded with all
              modern approaches. It's a robust & multi-dimensional usable
              template.
            </p>
            <div className="flex justify-start items-center gap-8">
              <button className="h-[80px] w-[180px] text-font_button text-white bg-color_primary rounded-md hover:bg-hover_primary">
                Get Started
              </button>
              <button className="flex justify-center items-center text-font_color3 gap-3 h-full ">
                <img
                  src="src\img\LandingPage\play-button.png"
                  className="h-[50%]"
                />
                <span className="text-[1.5rem]">Watch Video</span>
              </button>
            </div>
          </div>
          {/* image */}
          <div className="w-[60%] flex justify-center items-start">
          <img
            src="src\img\LandingPage\man-picture.png"
            className="w-full"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
export default LandingPage;

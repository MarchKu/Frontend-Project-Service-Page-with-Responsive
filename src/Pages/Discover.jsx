function Discover() {
  return (
    <section className="w-full flex h-[980px] justify-center items-center relative pt-20">
      <div className="h-full w-[1440px] flex flex-row gap-[95px] relative ">
        <div className="z-[1] absolute w-full h-full">
        {/* Image */}
          <img
            src="src\img\Discover\Rectangle 137.png"
            className=" w-full h-full"
          />
        </div>
      
        <div className="z-10 relative shrink-0">
          <img
            src="src\img\Discover\Mask Group.png"
            alt=""
            width="444px"
            className="max-[768px]:w-[250px] object-contain "
          />
          <img
            src="src\img\Discover\Group 41.svg"
            alt=""
            width="200px"
            className="absolute left-[-100px] top-[325px] 
        max-[768px]:hidden"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col justify-center h-full z-[10] gap-[3%] pr-[10%]">
          <h1
            className="text-font_color3 w-[404px] relative
          font-[500] text-[48px]  
          max-[768px]:text-[36px] max-[768px] max-[768px]:w-[301px]"
          >
            We Take The Work Of Your Hand
            <img
              src="src\img\Discover\Line 9.png"
              alt=""
              width="68px"
              className="absolute bottom-[12px] right-[17px] z-[100]"
            />
          </h1>

          <p className="font-[400] text-font_info text-font_color2">
            It's crafted with the latest trend of design & coded with all modern
            approaches. It's a robust & multi-dimensional usable. Nostrum
            placeat hic, praesent atque ornare minim.
          </p>
          <p className="font-[400] text-font_info text-font_color2">
            nihil suscipit aliquet excepteur bibendum cumque facilis senectus
            habitant aliquid cupidatat! Fugit? Nisl dignissimos ratione
          </p>
          <button className="bg-color_primary hover:bg-hover_primary w-[180px] h-[80px] rounded-lg text-font_button text-white text-center">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
export default Discover;

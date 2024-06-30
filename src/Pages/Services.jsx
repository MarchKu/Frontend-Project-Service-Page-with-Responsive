function Services() {
  return (
    <section class="w-full flex justify-center h-[626px]">
      <div className="w-[1440px] relative overflow-hidden ">
        <img
          src="src\img\Services\dots.png"
          class="absolute top-[30%] right-0 max-[1120px]:hidden"
        />
        <img
          src="src\img\Services\dots.png"
          height="52px"
          class="absolute top-[40%] right-[-3%] max-[1120px]:hidden"
        />
        <div class="services-container w-full flex flex-col justify-start gap-10">
          <div class="relative w-[380px] ml-4 mr-8 max-[768px]:w-[264px]">
            <h1 class=" text-font_heading text-font_color3 font-semibold max-[768px]:text-[30px] max-[768px]:leading-[42px] relative ">
              Lets Check Our Services
              <img
                src="src\img\Services\Line 8.png"
                class="inline-block content-end pt-[5%] pl-4"
              />
            </h1>
          </div>
          <div class="flex flex-wrap gap-6 mb-[128px] max-[1344px]:pr-[0px] max-[768px]:flex-col max-[768px]:ml-4 ">
            <div
              class="flex flex-col gap-4 w-[20%] hover:bg-[#F9FBFF]  rounded-lg cursor-pointer
        max-[768px]:h-[296px] max-[768px]:w-[285px] max-[768px]:pt-[24px] max-[768px]:pb-[34px] max-[768px]:px-[20px]"
            >
              <img
                src="src\img\Services\Group 34.png"
                className="size-[80px] "
              />
              <h4 class="text-font_color3 text-font_info font-semibold">
                Increase conversion
              </h4>
              <p class="text-font_color2 text-font_info">
                It's crafted with the latest of design & coded with all trendy &
                modern approaches.
              </p>
            </div>
            <div
              class="flex flex-col gap-4 w-[20%] hover:bg-[#F9FBFF]  rounded-lg cursor-pointer
        max-[768px]:h-[296px] max-[768px]:w-[285px] max-[768px]:pt-[24px] max-[768px]:pb-[34px] max-[768px]:px-[20px]"
            >
              <img
                src="src\img\Services\Group 36.png"
                className="size-[80px]"
              />
              <h4 class="text-font_color3  text-font_info max-[768px]:ml-[10px] font-semibold">
                Discussion for idea
              </h4>
              <p class="text-font_color2 text-font_info">
                It's crafted with the latest of design & coded with all trendy &
                modern approaches.
              </p>
            </div>

            <article
              class="flex flex-col gap-4 w-[20%] hover:bg-[#F9FBFF]  rounded-lg cursor-pointer
        max-[768px]:h-[296px] max-[768px]:w-[285px] max-[768px]:pt-[24px] max-[768px]:pb-[34px] max-[768px]:px-[20px]"
            >
              <img
                src="src\img\Services\Group 37.png"
                className="size-[80px]"
              />
              <h4 class="text-font_color3  text-font_info max-[768px]:ml-[10px] font-semibold">
                Product analytics
              </h4>
              <p class="text-font_color2 text-font_info">
                It's crafted with the latest of design & coded with all trendy &
                modern approaches.
              </p>
            </article>

            <article
              class="flex flex-col gap-4 w-[20%] hover:bg-[#F9FBFF]  rounded-lg cursor-pointer
        max-[768px]:h-[296px] max-[768px]:w-[285px] max-[768px]:pt-[24px] max-[768px]:pb-[34px] max-[768px]:px-[20px]"
            >
              <img
                src="src\img\Services\Group 38.png"
                className="size-[80px]"
              />
              <h4 class="text-font_color3  text-font_info max-[768px]:ml-[10px] font-semibold">
                Perfect testing
              </h4>
              <p class="text-font_color2 text-font_info">
                It's crafted with the latest of design & coded with all trendy &
                modern approaches.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;

function PricingPlan() {
  return (
    <section class="w-full h-screen flex flex-col justify-start items-center">
      <div className="w-[1440px] h-full py-10">
        {/* Heading */}
        <div className="h-[20%]  flex flex-col justify-center items-center">
          <h3 class="text-font_info text-font_color2">Price Plan</h3>
          <h1 class=" text-font_heading text-font_color1 ">
            No Extra Charges!Choose
          </h1>
          <h1 class="text-font_heading text-font_color1">Your Plan.</h1>
        </div>
        {/* Price table */}
        <table className="h-[80%] w-full text-center text-font_color2 mt-10">
          <thead className="h-[20%]">
            <tr className="">
              <td className="border-[1px] border-gray-300 w-[25%]"></td>
              <td className="border-[1px] border-gray-300  w-[25%]">
                <h1 className="text-font_heading text-color_secondary font-semibold">$3000</h1>
                <h2 className="text-font_info">Regular</h2>
              </td>
              <td className="border-[1px] border-gray-300   w-25%">
                <h1 className="text-font_heading text-color_third font-semibold">$3000</h1>
                <h2 className="text-font_info">Regular</h2>
              </td>
              <td className="border-[1px] border-gray-300   w-[25%]">
                <h1 className="text-font_heading text-color_primary font-semibold">$5000</h1>
                <h2 className="text-font_info">Corporate</h2>
              </td>
            </tr>
          </thead>
          <tbody className="">
            {/* Second row */}
            <tr className="h-[10%] ">
              <td className="border-[1px] border-gray-300 text-start pl-9">
                <h1 className="text-font_info font-semibold ">Full Access</h1>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\X.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\X.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
            </tr>
            {/* Third row */}
            <tr className="h-[10%]">
              <td className="border-[1px] border-gray-300  text-start pl-9">
                <h1 className="text-font_info font-semibold">Multiple User</h1>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\X.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\X.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
            </tr>
            {/* Forth row */}
            <tr className="h-[10%]">
              <td className="border-[1px] border-gray-300  text-start pl-9">
                <h1 className="text-font_info font-semibold">Refund</h1>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\X.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
            </tr>
            {/* Fift row */}
            <tr className="h-[10%]">
              <td className="border-[1px] border-gray-300  text-start pl-9">
                <h1 className="text-font_info font-semibold">24/7 Support</h1>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
              <td className="border-[1px] border-gray-300 ">
                <img src="src\img\PricingPlan\O.svg" className="w-full size-6" />
              </td>
            </tr>
            {/* Sixth row */}
            <tr className="h-[20%]">
              <td className=""></td>
              <td className="border-[1px] border-gray-300 ">
                <button className="h-[80px] w-[180px] text-white text-font_button bg-color_secondary hover:bg-hover_secondary rounded-lg">
                  Choose Plan
                </button>
                <p className="text-font_info pt-4">Get your 30 days free trial</p>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <button className="h-[80px] w-[180px] text-white text-font_button bg-color_third hover:bg-hover_third  rounded-lg">
                  Choose Plan
                </button>
                <p className="text-font_info pt-4">Get your 30 days free trial</p>
              </td>
              <td className="border-[1px] border-gray-300 ">
                <button className="h-[80px] w-[180px] text-white text-font_button bg-color_primary hover:bg-hover_primary rounded-lg ">
                  Choose Plan
                </button>
                <p className="text-font_info pt-4">Get your 30 days free trial</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default PricingPlan;

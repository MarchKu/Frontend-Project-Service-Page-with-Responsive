function Testimonial() {
  return (
    <section className="h-[90vh] w-full flex flex-col justify-center items-center max-[768px]:h-[80%]">
      <div className="relative w-[1440px] h-full flex flex-row justify-between items-center max-[768px]:flex-col ">
        <div className="img-container flex flex-col justify-center items-start basis-[20%] h-full min-w-[40%] p-[5%] relative">
          <img
            src="src\img\Testimonial\Testimonial-pic.jpg"
            className="object-contain h-[80%] min-h-[300px] max-h-[600px]"
          />
          <img src="src\img\Testimonial\like.svg" className="bg-[#64D5FD] rounded-md text-white w-[15%] text-center absolute top-[60%] left-[5%] p-[2%]" />
        </div>
        <div className="comment-container basis-[80%] min-w-[60%] p-[1%] pl-[20px] max-h-[100%]">
          <h1>
            <img src="src\img\Testimonial\quote.svg"/>
          </h1>
          <p className="text-font_header py-[2%] max-[768px]:text-2xl max-[768px]:text-center">
            It’s awesome service. Land from day very fill that midst stars one
            dominion. Itself was let that divided itself god don't subdue
            wherein let behold over he whose of sea moved called.
          </p>
          <p className="text-color_secondary font-bold text-font_header py-[2%] max-[768px]:text-center">
            Jack Smith
          </p>
          <p className="text-xl max-[768px]:text-center">CEO of DIANO</p>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;

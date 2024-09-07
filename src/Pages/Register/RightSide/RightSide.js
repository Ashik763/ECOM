import registerImage from "../../../Assets/login_image.jpg";
const RightSide = () => {
  return (
    <div className="h-[100vh] relative">
      <img className="w-full h-full object-cover" src={registerImage} alt="" />
      <div className="absolute w-[450px]  top-[40%] left-[26%] ">
        <h2 className="text-center text-[white] pe-7 text-2xl font-bold">
          {" "}
          Furni<span className="text-[#1E99F5]">Flex</span>{" "}
        </h2>
        <p className="text-[white]">
          {" "}
          Discover a seamless shopping experience with our curated collection of
          products. From fashion to electronics, we bring quality{" "}
        </p>
      </div>
    </div>
  );
};

export default RightSide;

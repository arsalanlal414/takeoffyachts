import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import img from "../assets/images/bg.png";
import { PiImageSquare } from "react-icons/pi";

const AddNewYacht = () => {
  const [images, setImages] = useState([]);
  const { handleSubmit, control, setValue, formState: { errors } } = useForm();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Uploaded Images:", images);
  };

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-lg lg:text-4xl font-bold mb-8 font-sora">Upload New Yacht</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            <div className="relative">
              <div
                className="border border-dashed bg-[#BEA35514] border-gray-400 rounded-md h-80 flex flex-col justify-center items-center text-gray-500 text-center relative z-0"
                onClick={() => document.getElementById("file-upload").click()}
              >
                <PiImageSquare fontSize="100px" color="#BEA355" />
                <p className="text-sm text-black"><strong className="text-[#BEA355]"><u>Choose a file</u></strong> or drag & drop it here </p>
                <p className="text-sm text-black">JPEG, PNG, and PDF supported formats, upto 5 mb</p>
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/jpeg, image/png, application/pdf"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="mt-4 flex gap-3 overflow-x-scroll scrollbar-hide">
                {images.map((img, index) => (
                    <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt="Uploaded"
                    className="w-20 h-20 object-cover rounded-md border"
                    />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">Yacht Model<span className="text-red-700">*</span></label>
                <Controller
                  name="yachtModel"
                  control={control}
                  rules={{ required: "Yacht model is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.yachtModel ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.yachtModel && (
                  <span className="text-red-500 text-sm">{errors.yachtModel.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Total Capacity<span className="text-red-700">*</span></label>
                <Controller
                  name="totalCapacity"
                  control={control}
                  rules={{ required: "Total capacity is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      className={`w-full border rounded-lg p-2 ${
                        errors.totalCapacity ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.totalCapacity && (
                  <span className="text-red-500 text-sm">{errors.totalCapacity.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Yacht Speed<span className="text-red-700">*</span></label>
                <Controller
                  name="yachtSpeed"
                  control={control}
                  rules={{ required: "Yacht speed is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.yachtSpeed ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.yachtSpeed && (
                  <span className="text-red-500 text-sm">{errors.yachtSpeed.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Yacht Duration<span className="text-red-700">*</span></label>
                <Controller
                  name="yachtDuration"
                  control={control}
                  rules={{ required: "Yacht duration is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.yachtDuration ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.yachtDuration && (
                  <span className="text-red-500 text-sm">{errors.yachtDuration.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Booking Rate (AED)<span className="text-red-700">*</span></label>
                <Controller
                  name="bookingRate"
                  control={control}
                  rules={{ required: "Booking rate is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      className={`w-full border rounded-lg p-2 ${
                        errors.bookingRate ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.bookingRate && (
                  <span className="text-red-500 text-sm">{errors.bookingRate.message}</span>
                )}
              </div>
              <div className="">
                <label className="block font-medium mb-2">Extra Servings<span className="text-red-700">*</span></label>
                <div className="flex gap-3">
                    {["Champagne", "Wines", "Brunch"].map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() =>
                        setValue("extraServings", [...(errors.extraServings || []), item])
                        }
                        className="border border-gray-300 rounded-full px-4 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                    >
                        {item}
                    </button>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-2">Package Description<span className="text-red-700">*</span></label>
              <Controller
                name="packageDescription"
                control={control}
                rules={{ required: "Package description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`w-full border rounded-lg p-2 ${
                      errors.packageDescription ? "border-red-500" : "border-gray-300"
                    } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                    placeholder="Enter here"
                    rows="3"
                  ></textarea>
                )}
              />
              {errors.packageDescription && (
                <span className="text-red-500 text-sm">{errors.packageDescription.message}</span>
              )}
            </div>

           
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => console.log("Canceled")}
            className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#BEA355] text-white rounded-full hover:bg-yellow-600"
          >
            Upload Yacht
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewYacht;

// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import img from "../assets/images/bg.png";
// import { PiImageSquare } from "react-icons/pi";

// const AddNewYacht = () => {
//   const [images, setImages] = useState([]);
//   const { handleSubmit, control, setValue, formState: { errors } } = useForm();

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImages([...images, ...files]);
//   };

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     console.log("Uploaded Images:", images);
//   };

//   return (
//     <div className="w-full p-6 bg-white rounded-xl shadow-lg">
//       <h1 className="text-lg lg:text-4xl font-bold mb-8 font-sora">Upload New Yacht</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-12 gap-10">
//           <div className="col-span-5">
//             <div className="relative">
//               <div
//                 className="border border-dashed bg-[#BEA35514] border-gray-400 rounded-md h-80 flex flex-col justify-center items-center text-gray-500 text-center relative z-0"
//                 onClick={() => document.getElementById("file-upload").click()}
//               >
//                 <PiImageSquare fontSize="100px" color="#BEA355" />
//                 <p className="text-sm text-black"><strong className="text-[#BEA355]"><u>Choose a file</u></strong> or drag & drop it here </p>
//                 <p className="text-sm text-black">JPEG, PNG, and PDF supported formats, upto 5 mb</p>
//               </div>
//               <input
//                 id="file-upload"
//                 type="file"
//                 multiple
//                 accept="image/jpeg, image/png, application/pdf"
//                 onChange={handleImageUpload}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//               <div className="mt-4 flex gap-3 overflow-x-scroll scrollbar-hide">
//                 {images.map((img, index) => (
//                     <img
//                     key={index}
//                     src={URL.createObjectURL(img)}
//                     alt="Uploaded"
//                     className="w-20 h-20 object-cover rounded-md border"
//                     />
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="col-span-7">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium mb-2">Yacht Model<span className="text-red-700">*</span></label>
//                 <Controller
//                   name="yachtModel"
//                   control={control}
//                   rules={{ required: "Yacht model is required" }}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       className={`w-full border rounded-lg p-2 ${
//                         errors.yachtModel ? "border-red-500" : "border-gray-300"
//                       } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                       placeholder="Enter here"
//                     />
//                   )}
//                 />
//                 {errors.yachtModel && (
//                   <span className="text-red-500 text-sm">{errors.yachtModel.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Total Capacity<span className="text-red-700">*</span></label>
//                 <Controller
//                   name="totalCapacity"
//                   control={control}
//                   rules={{ required: "Total capacity is required" }}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="number"
//                       className={`w-full border rounded-lg p-2 ${
//                         errors.totalCapacity ? "border-red-500" : "border-gray-300"
//                       } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                       placeholder="Enter here"
//                     />
//                   )}
//                 />
//                 {errors.totalCapacity && (
//                   <span className="text-red-500 text-sm">{errors.totalCapacity.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Yacht Speed<span className="text-red-700">*</span></label>
//                 <Controller
//                   name="yachtSpeed"
//                   control={control}
//                   rules={{ required: "Yacht speed is required" }}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       className={`w-full border rounded-lg p-2 ${
//                         errors.yachtSpeed ? "border-red-500" : "border-gray-300"
//                       } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                       placeholder="Enter here"
//                     />
//                   )}
//                 />
//                 {errors.yachtSpeed && (
//                   <span className="text-red-500 text-sm">{errors.yachtSpeed.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Yacht Duration<span className="text-red-700">*</span></label>
//                 <Controller
//                   name="yachtDuration"
//                   control={control}
//                   rules={{ required: "Yacht duration is required" }}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       className={`w-full border rounded-lg p-2 ${
//                         errors.yachtDuration ? "border-red-500" : "border-gray-300"
//                       } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                       placeholder="Enter here"
//                     />
//                   )}
//                 />
//                 {errors.yachtDuration && (
//                   <span className="text-red-500 text-sm">{errors.yachtDuration.message}</span>
//                 )}
//               </div>
//               <div>
//                 <label className="block font-medium mb-2">Booking Rate (AED)<span className="text-red-700">*</span></label>
//                 <Controller
//                   name="bookingRate"
//                   control={control}
//                   rules={{ required: "Booking rate is required" }}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="number"
//                       className={`w-full border rounded-lg p-2 ${
//                         errors.bookingRate ? "border-red-500" : "border-gray-300"
//                       } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                       placeholder="Enter here"
//                     />
//                   )}
//                 />
//                 {errors.bookingRate && (
//                   <span className="text-red-500 text-sm">{errors.bookingRate.message}</span>
//                 )}
//               </div>
//               <div className="">
//                 <label className="block font-medium mb-2">Extra Servings<span className="text-red-700">*</span></label>
//                 <div className="flex gap-3">
//                     {["Champagne", "Wines", "Brunch"].map((item) => (
//                     <button
//                         key={item}
//                         type="button"
//                         onClick={() =>
//                         setValue("extraServings", [...(errors.extraServings || []), item])
//                         }
//                         className="border border-gray-300 rounded-full px-4 py-1 text-sm bg-gray-100 hover:bg-gray-200"
//                     >
//                         {item}
//                     </button>
//                     ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <label className="block font-medium mb-2">Package Description<span className="text-red-700">*</span></label>
//               <Controller
//                 name="packageDescription"
//                 control={control}
//                 rules={{ required: "Package description is required" }}
//                 render={({ field }) => (
//                   <textarea
//                     {...field}
//                     className={`w-full border rounded-lg p-2 ${
//                       errors.packageDescription ? "border-red-500" : "border-gray-300"
//                     } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
//                     placeholder="Enter here"
//                     rows="3"
//                   ></textarea>
//                 )}
//               />
//               {errors.packageDescription && (
//                 <span className="text-red-500 text-sm">{errors.packageDescription.message}</span>
//               )}
//             </div>

           
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end gap-4">
//           <button
//             type="button"
//             onClick={() => console.log("Canceled")}
//             className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-[#BEA355] text-white rounded-full hover:bg-yellow-600"
//           >
//             Upload Yacht
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddNewYacht;


import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PiImageSquare } from "react-icons/pi";

const AddNewYacht = () => {
  const [mainImages, setMainImages] = useState([]);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [selectedBoatType, setSelectedBoatType] = useState(""); // Track selected boat type
  const [alert, setAlert] = useState({ type: "", message: "" }); // State for alert
  const { handleSubmit, control, setValue, formState: { errors } } = useForm();


  const handleMainImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setMainImages([...files]);
  };

  const handleAdditionalImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages([...additionalImages, ...files]);
  };

  // const onSubmit = (data) => {
  //   console.log("Form Data:", data);
  //   console.log("Main Images:", mainImages);
  //   console.log("Additional Images:", additionalImages);
  // };

  const onSubmit = (data) => {
    try {
      console.log("Form Data:", data);
      console.log("Main Images:", mainImages);
      console.log("Additional Images:", additionalImages);

      // Simulate API call success
      setTimeout(() => {
        setAlert({ type: "success", message: "Form submitted successfully!" });
      }, 500);

      // Reset form values and images
      setValue("title", "");
      setValue("brand", "");
      setValue("location", "");
      setValue("boatType", "");
      setValue("description", "");
      setValue("dailyPrice", "");
      setValue("pricePerHour", "");
      setValue("minHours", "");
      setValue("daysBeforeCancel", "");
      setValue("category", "");
      setMainImages([]);
      setAdditionalImages([]);
    } catch (error) {
      setAlert({ type: "error", message: "Failed to submit the form. Please try again." });
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-lg lg:text-4xl font-bold mb-8 font-sora">Upload New Yacht</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            {/* Main Image Upload */}
            <div className="relative">
              <div
                className="border border-dashed bg-[#BEA35514] border-gray-400 rounded-md h-80 flex flex-col justify-center items-center text-gray-500 text-center relative z-0"
                onClick={() => document.getElementById("main-file-upload").click()}
              >
                <PiImageSquare fontSize="100px" color="#BEA355" />
                <p className="text-sm text-black">
                  <strong className="text-[#BEA355]">
                    <u>Choose a file</u>
                  </strong>{" "}
                  or drag & drop it here
                </p>
                <p className="text-sm text-black">JPEG, PNG, and PDF supported formats, up to 5 mb</p>
              </div>
              <input
                id="main-file-upload"
                type="file"
                multiple
                accept="image/jpeg, image/png, application/pdf"
                onChange={handleMainImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="mt-4 flex gap-3 overflow-x-scroll scrollbar-hide">
                {mainImages.map((img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt="Uploaded"
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>

            {/* Additional Image Upload */}
            <div className="relative mt-6">
              <div
                className="border border-dashed bg-[#BEA35514] border-gray-400 rounded-md h-80 flex flex-col justify-center items-center text-gray-500 text-center relative z-0"
                onClick={() => document.getElementById("additional-file-upload").click()}
              >
                <PiImageSquare fontSize="100px" color="#BEA355" />
                <p className="text-sm text-black">
                  <strong className="text-[#BEA355]">
                    <u>Choose a file</u>
                  </strong>{" "}
                  or drag & drop it here
                </p>
                <p className="text-sm text-black">JPEG, PNG, and PDF supported formats, up to 5 mb</p>
              </div>
              <input
                id="additional-file-upload"
                type="file"
                multiple
                accept="image/jpeg, image/png, application/pdf"
                onChange={handleAdditionalImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="mt-4 flex gap-3 overflow-x-scroll scrollbar-hide">
                {additionalImages.map((img, index) => (
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
                <label className="block font-medium mb-2">Title<span className="text-red-700">*</span></label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Title is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">{errors.title.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Brand<span className="text-red-700">*</span></label>
                <Controller
                  name="brand"
                  control={control}
                  rules={{ required: "Brand is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`w-full border rounded-lg p-2 ${
                        errors.brand ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.brand && (
                  <span className="text-red-500 text-sm">{errors.brand.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2 ">Location<span className="text-red-700">*</span></label>
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2  ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">{errors.location.message}</span>
                )}
              </div>
            
               <div>
                <label className="block font-medium mb-2">
                  Boat Type<span className="text-red-700">*</span>
                </label>
                <Controller
                  name="boatType"
                  control={control}
                  rules={{ required: "Boat type is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      value={selectedBoatType}
                      onChange={(e) => {
                        field.onChange(e); 
                        setSelectedBoatType(e.target.value); 
                      }}
                      className={`w-full border rounded-lg p-2 ${
                        errors.boatType ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                    >
                      <option value="">Select a boat type</option>
                      <option value="normal boats">Normal Boats</option>
                      <option value="f1-boats">F1 Boats</option>
                      <option value="newyear-boats">New Year Boats</option>
                    </select>
                  )}
                />
                {errors.boatType && (
                  <span className="text-red-500 text-sm">{errors.boatType.message}</span>
                )}
              </div>
              <div className="col-span-2">
                <label className="block font-medium mb-2">
                  Description<span className="text-red-700">*</span>
                </label>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: "Description is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.description ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                      rows="4"
                    ></textarea>
                  )}
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">{errors.description.message}</span>
                )}
              </div>
                {/* Conditionally render Daily Price and Price Per Hour */}
                {(selectedBoatType === "normal boats" || selectedBoatType === "f1-boats") && (
                <>
                  <div>
                    <label className="block font-medium mb-2">
                      Daily Price (AED)<span className="text-red-700">*</span>
                    </label>
                    <Controller
                      name="dailyPrice"
                      control={control}
                      rules={{ required: "Daily price is required" }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className={`w-full border rounded-lg p-2 ${
                            errors.dailyPrice ? "border-red-500" : "border-gray-300"
                          } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                          placeholder="Enter here"
                        />
                      )}
                    />
                    {errors.dailyPrice && (
                      <span className="text-red-500 text-sm">{errors.dailyPrice.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Price Per Hour (AED)<span className="text-red-700">*</span>
                    </label>
                    <Controller
                      name="pricePerHour"
                      control={control}
                      rules={{ required: "Price Per Hour is required" }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className={`w-full border rounded-lg p-2 ${
                            errors.pricePerHour ? "border-red-500" : "border-gray-300"
                          } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                          placeholder="Enter here"
                        />
                      )}
                    />
                    {errors.pricePerHour && (
                      <span className="text-red-500 text-sm">{errors.pricePerHour.message}</span>
                    )}
                  </div>
                </>
              )}
              {/* <div>
                <label className="block font-medium mb-2">Daily Price (AED)<span className="text-red-700">*</span></label>
                <Controller
                  name="dailyPrice"
                  control={control}
                  rules={{ required: "Daily price is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.dailyPrice ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.dailyPrice && (
                  <span className="text-red-500 text-sm">{errors.dailyPrice.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Price Per Hour (AED)<span className="text-red-700">*</span></label>
                <Controller
                  name="pricePerHour"
                  control={control}
                  rules={{ required: "Price Per Hour is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.pricePerHour ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.pricePerHour && (
                  <span className="text-red-500 text-sm">{errors.pricePerHour.message}</span>
                )}
              </div> */}
              <div>
                <label className="block font-medium mb-2">Minimum Hours<span className="text-red-700">*</span></label>
                <Controller
                  name="minHours"
                  control={control}
                  rules={{ required: "Minimum Hours is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.minHours ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.minHours && (
                  <span className="text-red-500 text-sm">{errors.minHours.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Days Before Cancel<span className="text-red-700">*</span></label>
                <Controller
                  name="daysBeforeCancel"
                  control={control}
                  rules={{ required: "Days Before Cancel is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.daysBeforeCancel ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.daysBeforeCancel && (
                  <span className="text-red-500 text-sm">{errors.daysBeforeCancel.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Category<span className="text-red-700">*</span>
                </label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.category ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                    >
                      <option value="">Select a category</option>
                      <option value="catamarans">Catamarans</option>
                      <option value="classic-yachts">Classic Yachts</option>
                      <option value="explorer-yacht">Explorer Yacht</option>
                      <option value="expedition-yachts">Expedition Yachts</option>
                      <option value="ferries-cruises">Ferries & Cruises</option>
                      <option value="giga-yacht">Giga Yacht</option>
                      <option value="house-boat">House Boat</option>
                      <option value="jet-ski">Jet Ski</option>
                      <option value="mega-yacht">Mega Yacht</option>
                      <option value="motor-yachts">Motor Yachts</option>
                      <option value="open-yachts">Open Yachts</option>
                      <option value="sailing-yachts">Sailing Yachts</option>
                      <option value="sport-fishing">Sport Fishing</option>
                      <option value="super-yacht">Super Yacht</option>
                      <option value="trawler-yacht">Trawler Yacht</option>
                      <option value="wake-surfing">Wake Surfing</option>
                      <option value="wedding-yacht">Wedding Yacht</option>

                    </select>
                  )}
                />
                {errors.category && (
                  <span className="text-red-500 text-sm">{errors.category.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Features<span className="text-red-700">*</span>
                </label>
                <Controller
                  name="feature"
                  control={control}
                  rules={{ required: "Features is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.feature ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                    >
                      <option value="">Select a feature</option>
                      <option value="dance-floor">Dance Floor</option>
                      <option value="deck-jacuzzi">Deck Jacuzzi</option>
                      <option value="elevator">Elevator</option>
                      <option value="gym">Gym</option>
                      <option value="helipad">Helipad</option>
                      <option value="jacuzzi">Jacuzzi</option>
                      <option value="movie-theatre">Movie Theatre</option>
                      <option value="sauna">Sauna</option>
                      <option value="satellite-tv">Satellite TV</option>
                      <option value="spa">Spa</option>
                      <option value="super-yacht">Super Yacht</option>
                      <option value="swimming-platform">Swimming Platform</option>
                      <option value="swimming-pool">Swimming Pool</option>
                      <option value="tender-garage">Tender Garage</option>
                      <option value="wi-fi">Wi-Fi</option>
                    </select>
                  )}
                />
                {errors.feature && (
                  <span className="text-red-500 text-sm">{errors.feature.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Crew Member<span className="text-red-700">*</span></label>
                <Controller
                  name="crewMember"
                  control={control}
                  rules={{ required: "Crew Member is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`w-full border rounded-lg p-2 ${
                        errors.crewMember ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.crewMember && (
                  <span className="text-red-500 text-sm">{errors.crewMember.message}</span>
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Crew Member Language<span className="text-red-700">*</span></label>
                <Controller
                  name="crewMemberLang"
                  control={control}
                  rules={{ required: "Crew Member Language is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`w-full border rounded-lg p-2 ${
                        errors.crewMemberLang ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.crewMemberLang && (
                  <span className="text-red-500 text-sm">{errors.crewMemberLang.message}</span>
                )}
              </div>
              <div className="col-span-2">
                <label className="block font-medium mb-2">
                  Note<span className="text-red-700">*</span>
                </label>
                <Controller
                  name="note"
                  control={control}
                  rules={{ required: "Note is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className={`w-full border rounded-lg p-2 ${
                        errors.note ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                      rows="4"
                    ></textarea>
                  )}
                />
                {errors.note && (
                  <span className="text-red-500 text-sm">{errors.note.message}</span>
                )}
              </div>
              {/* <div>
                <label className="block font-medium mb-2">Crew Member<span className="text-red-700">*</span></label>
                <Controller
                  name="crewMember"
                  control={control}
                  rules={{ required: "Crew Member is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      className={`w-full border rounded-lg p-2 ${
                        errors.crewMember ? "border-red-500" : "border-gray-300"
                      } focus:ring-1 focus:ring-[#BEA355] focus:outline-none`}
                      placeholder="Enter here"
                    />
                  )}
                />
                {errors.crewMember && (
                  <span className="text-red-500 text-sm">{errors.crewMember.message}</span>
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
              </div> */}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewYacht;

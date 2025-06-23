"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

// after form submit
toast.success("Artist submitted!");


// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Hindi", "Punjabi", "Tamil"];
const fees = ["2000-4000", "4000-7000", "7000-10000"];

export default function Onboard() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      category: [],
      languages: [],
      fee: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Form submitted! Check console.");
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        {/* Bio */}
        <div>
          <textarea
            {...register("bio")}
            placeholder="Short Bio"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>
        </div>

        {/* Category Multi-Select */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          {categories.map((cat) => (
            <label key={cat} className="mr-4">
              <input
                type="checkbox"
                value={cat}
                {...register("category")}
                className="mr-1"
              />
              {cat}
            </label>
          ))}
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>

        {/* Languages Multi-Select */}
        <div>
          <label className="block font-medium mb-1">Languages Spoken</label>
          {languages.map((lang) => (
            <label key={lang} className="mr-4">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="mr-1"
              />
              {lang}
            </label>
          ))}
          <p className="text-red-500 text-sm">{errors.languages?.message}</p>
        </div>

        {/* Fee Dropdown */}
        <div>
          <label className="block font-medium mb-1">Fee Range</label>
          <Controller
            control={control}
            name="fee"
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-2 border rounded text-gray-800 bg-white"
              >
                <option value="">Select fee range</option>
                {fees.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            )}
          />
          <p className="text-red-500 text-sm">{errors.fee?.message}</p>
        </div>

        {/* Location */}
        <div>
          <input
            {...register("location")}
            placeholder="Location"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Profile Image (optional)</label>
          <input
            type="file"
            className="block w-full border border-gray-300 rounded-lg text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </main>
  );
}

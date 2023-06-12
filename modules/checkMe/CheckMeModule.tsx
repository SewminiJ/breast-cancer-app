import { Button } from "@mui/material";
import Image from "next/image"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const CheckMeModule = () => {
  const { control } = useForm();

  const [inputValues, setInputValues] = useState(
    {
      radius_mean: '',
      texture_mean: '',
      perimeter_mean: '',
      area_mean: '',
      smoothness_mean: '',
      compactness_mean: '',
      concavity_mean: '',
      concave_points_mean: '',
      symmetry_mean: '',
      fractal_dimension_mean: '',
      radius_se: '',
      texture_se: '',
      perimeter_se: '',
      area_se: '',
      smoothness_se: '',
      compactness_se: '',
      concavity_se: '',
      concave_points_se: '',
      symmetry_se: '',
      fractal_dimension_se: '',
      radius_worst: '',
      texture_worst: '',
      perimeter_worst: '',
      area_worst: '',
      smoothness_worst: '',
      compactness_worst: '',
      concavity_worst: '',
      concave_points_worst: '',
      symmetry_worst: '',
      fractal_dimension_worst: '',
    }
  );

    const [patient , setPatient] = useState('')
    const [date , setDate] = useState('')
    const [month , setMonth] = useState('')
    const [year , setYear] = useState('')

    const handleMonthChange = (e) => {
      const monthValue = e.target.value;
      // Check if the input is a valid number
      if (!isNaN(monthValue) && monthValue >= 1 && monthValue <= 12) {
        // Convert the numeric month to characters
        const monthString = new Date(2000, monthValue - 1, 1).toLocaleString('default', { month: 'long' });
        setMonth(monthString);
      } else {
        setMonth('');
      }
    };
  
    const [prediction, setPrediction] = useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handlePrediction = async () => {
      try {
          const response = await axios.post('http://localhost:5000/predict', { input_values: inputValues }, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error(error);
      }
    };

    const handleCapture = () => {
      const pageElement = document.documentElement;
  
      html2canvas(pageElement).then((canvas) => {
        const screenshotDataUrl = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imageProps = pdf.getImageProperties(screenshotDataUrl);
        const screenshotWidth = pdf.internal.pageSize.getWidth();
        const screenshotHeight = (imageProps.height * screenshotWidth) / imageProps.width;
  
        pdf.addImage(screenshotDataUrl, "PNG", 0, 0, screenshotWidth, screenshotHeight);
        pdf.save("screenshot.pdf");
      });
    };

    return (
      <div id="pdf-content">
        <div 
            className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-10"
        />
        <div 
            className="bg-[#FE006B] h-60 w-60 fixed bottom-48 right-60 rounded-full blur-[250px] -z-10"
        />

        <Image 
          className="fixed bottom-0 left-0 -z-10"
          src={"/images/bottom-left.png"} 
          alt={"heart"} 
          width={300} 
          height={300}
        />
        <Image 
          className="fixed bottom-0 right-0 -z-10"
          src={"/images/bottom-right.png"} 
          alt={"heart"} 
          width={300} 
          height={300}
        />    

        <div
            className="width-full max-w-[1200px] m-auto p-4 flex flex-col justify-between md:pt-[100px]"  
        >
          <h1
              className="text-[#1678F2] text-3xl md:text-5xl text-bold mb-6"
          >Let's Make <span className="text-black text-4xl md:text-6xl">Your Prediction</span></h1>

          <div className="w-full flex items-start flex-col-reverse md:flex-row ">
            <div className="w-full md:w-7/12 mt-4 md:pt-0">
              <div className="w-full mt-4 md:pt-0">                
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Select the patient name: </h1>
                    <input type="text" value={patient} onChange={(e) =>  setPatient(e.target.value)} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter radius mean value: </h1>
                    <input type="number" name="radius_mean" min={0} pattern="^\d*(\.\d{0,2})?$" value={inputValues.radius_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter texture mean value: </h1>
                    <input type="number" name="texture_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.texture_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter perimeter mean value: </h1>
                    <input type="number" name="perimeter_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.perimeter_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter area mean value: </h1>
                    <input type="number" name="area_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.area_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter smoothness mean value: </h1>
                    <input type="number" name="smoothness_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.smoothness_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter compactness mean value: </h1>
                    <input type="number" name="compactness_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.compactness_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concavity mean value </h1>
                    <input type="number" name="concavity_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concavity_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concave points mean value: </h1>
                    <input type="number" name="concave_points_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concave_points_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter symmetry mean value: </h1>
                    <input type="number" name="symmetry_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.symmetry_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter fractal dimension mean value: </h1>
                    <input type="number" name="fractal_dimension_mean" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.fractal_dimension_mean} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter radius se value: </h1>
                    <input type="number" name="radius_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.radius_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter texture se value: </h1>
                    <input type="number" name="texture_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.texture_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter perimeter se value: </h1>
                    <input type="number" name="perimeter_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.perimeter_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter area se value: </h1>
                    <input type="number" name="area_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.area_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter smoothness se value: </h1>
                    <input type="number" name="smoothness_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.smoothness_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter compactness se value: </h1>
                    <input type="number" name="compactness_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.compactness_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concavity se value: </h1>
                    <input type="number" name="concavity_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concavity_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concave points se value: </h1>
                    <input type="number" name="concave_points_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concave_points_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter symmetry se value: </h1>
                    <input type="number" name="symmetry_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.symmetry_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter fractal dimension se value: </h1>
                    <input type="number" name="fractal_dimension_se" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.fractal_dimension_se} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter radius worst value: </h1>
                    <input type="number" name="radius_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.radius_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter texture worst value: </h1>
                    <input type="number" name="texture_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.texture_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter perimeter worst value: </h1>
                    <input type="number" name="perimeter_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.perimeter_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter area worst value: </h1>
                    <input type="number" name="area_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.area_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter smoothness worst value: </h1>
                    <input type="number" name="smoothness_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.smoothness_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter compactness worst value: </h1>
                    <input type="number" name="compactness_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.compactness_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concavity worst value: </h1>
                    <input type="number" name="concavity_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concavity_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter concave points worst value: </h1>
                    <input type="number" name="concave_points_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.concave_points_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter symmetry worst value: </h1>
                    <input type="number" name="symmetry_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.symmetry_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter fractal dimension worst value: </h1>
                    <input type="number" name="fractal_dimension_worst" min={0} pattern="^\d*(\.\d{0,2})?$"  value={inputValues.fractal_dimension_worst} onChange={handleInputChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter year: </h1>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter month: </h1>
                    <input type="text" value={month} onChange={handleMonthChange} />
                </div>
                <div className="w-full flex text-bold text-lg items-center mb-8">
                    <h1 className="w-4/5">Enter date: </h1>
                    <input type="number" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mt-16 flex justify-end md:justify-normal">
                <button
                  className="capitalize tracking-wider text-white text-bold rounded-full bg-[#FD5858] border-[#FF5454] border-[2px] px-16 py-2 hover:bg-white hover:border-[2px] hover:border-[#FF5454] hover:text-[#fd5858] text-sm md:text-lg"
                  onClick={handlePrediction}
                  >
                    Make your prediction
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image 
                  className="md:ml-8 md:mr-8 w-44 md:w-full"
                  src={"/images/picture1.png"} 
                  alt={"breast"} 
                  width={350} 
                  height={350}
              />
            </div>
          </div>
        </div>
            
        <div
            className="width-full flex flex-col justify-center items-center"
        >
          {
            prediction ? ( 
            parseInt(prediction) <= 30 ? (
                <Image 
                className="w-44 md:w-96"
                src={"/images/happy.png"}
                alt={"unhappy"}
                width={300}
                height={300}
            />
              ) : (
              <Image 
              className="w-44 md:w-96"
              src={"/images/unhappy.png"}
              alt={"happy"}
              width={300}
              height={300}
              />
            )) : (
              <Image 
              className="w-44 md:w-96"
              src={"/images/happy.png"}
              alt={"unhappy"}
              width={300}
              height={300}
              />
            )
          }
            <div className="text-center">
              <h1 className="capitalize text-3xl md:text-5xl">{patient}</h1>
              <h1
                  className="text-[#343434] text-2xl text-bold mb-2 mt-16"
              >There will be :</h1>
              <h1
                  className="text-[#ff8c8c] text-8xl md:text-[150px] text-bold"
              >{prediction}%</h1>
              <h1
                  className="text-[#343434] text-md md:text-2xl text-bold mb-2 flex justify-center"
              >Chance of having breast cancer on &nbsp;<p>{date}<sup>th</sup> of </p> &nbsp; <p> {month}, </p> <p>{year}</p></h1>
            </div>

            <Button
                className="w-full md:w-44 h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] rounded-md p-3 font-normal flex items-center justify-center text-md">
                <p className="text-white w-full md:w-44 capitalize" onClick={handleCapture}>Print Results</p>
            </Button>
        </div>
      </div>
    )
}
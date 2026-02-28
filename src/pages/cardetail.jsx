import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import Footer from "../components/footer";
import Faq from "../components/faq";
import {useParams } from "react-router-dom";
import Breadcrumb from "../components/common/bredcum.component";
import RentalBooking from "../components/carrentalbook";
import KeyFeatures from "../components/cardetails/keyfeature.component";
import useCarApi from "../api/usecarapi.hook";
import { Head } from "../components/head";
import { useSelector } from "react-redux";
import { carBack } from "../utility";
const CardDetail = ({ faq, data }) => {
  const { slug } = useParams();
  const [carData, setcarData] = useState(data)
  const id = +slug;
  const { fetchCarData } = useCarApi();
  const [rentalBookData, setrentalBookData] = useState({})
  const bookInfo=useSelector(({car})=>car?.bookinfo)
  const [carDetail, setcarDetail] = useState(
    data?.find((item) => item?.id === id)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    // fetchCarDetail();
    setcarDetail(data?.find((item) => item?.id === id))
    fetchCarDetail()
  }, [slug,data]);

  useEffect(() => {
    setcarData(data)
    if(bookInfo){
      setrentalBookData(bookInfo)
    }
    
  }, [data,bookInfo])
  

  const [imageName, setimageName] = useState("")
  const [count, setcount] = useState(0)
  const [keyFeatureActiveCount, setkeyFeatureActiveCount] = useState(0)
  const [keyFeatures, setkeyFeatures] = useState([])
  useEffect(() => {
    let intervalId = setInterval(()=>{
      if(count <2){

        setcount(count+1)
      }
      else{
        setcount(0)
      }
    },2000)

    if(keyFeatureActiveCount<keyFeatures?.length-1){
      setkeyFeatureActiveCount(keyFeatureActiveCount+1)
    }else{
      setkeyFeatureActiveCount(0)
    }


    return(() => {
        clearInterval(intervalId)
    })
  }, [count])
  

  async function fetchCarDetail() {
    try {
      const res = await fetchCarData(id);
      console.log(res)
      if(res&&res.isSucess){
        setcarDetail(res.data)
        setkeyFeatures(res.data?.key_features?.split("@"))
      }else{

      }
      // console.log(data);
    } catch (error) {
      const data=carBack.find(car=>car.car_id === id)
      setcarDetail(data)
      setkeyFeatures(data?.key_features?.split("@"))
    }
  }
  
  return (
    <div>
      <Navigation page="detail"/>
      <Breadcrumb name={carDetail?.title} />
      {/* <div className="section">
        <div className="image w-100">
          <img src={`./img/detailimage${1}.png`} className="w-100" alt="" />
        </div>
      </div> */}
      <Head/>
      <RentalBooking section="detail" name={carDetail?.title}  carData={carData} page={"detail"} rentalBookData={rentalBookData}/>
      <div className="detail-section">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="text-theme pe-5">{carDetail?.section1_title}</h1>
              <p className="text-secondary"> {carDetail?.section1_description}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
              <img
              src={carDetail?.car_id !== 24?`https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/section1_images.png`:`./img/cardetails/carid${id}/section1_images.png`}
                // src={`./img/cardetails/carid${id}/section1_images.png`}
                className="w-100"
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-6 px-2  p-md-5">
              <img
                src={carDetail?.car_id !== 24?`https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/section2_images.png`:`./img/cardetails/carid${id}/section2_images.png`}
                // src={`./img/cardetails/carid${id}/section2_images.png`}
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h1 className="text-theme pe-5">{carDetail?.section2_title}</h1>
              <p className="text-secondary"> {carDetail?.section2_description}</p>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures
        keyFeatures={keyFeatures}
        id={id}
        count={keyFeatureActiveCount}
        imagepath={carDetail?.car_id !== 24?`https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/key_feature_img.png`:`./img/cardetails/carid${id}/key_feature_img.png`}
        // imagepath={`./img/cardetails/carid${id}/key_feature_img.png`}
      />
      <Faq data={faq} />
      <Footer />
    </div>
  );
};

export default CardDetail;

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
import { getSpin360Url } from "../constants/carSpin360";
import { getDetailSectionStaticFallback, getDetailSectionPrimaryUrl } from "../utils/carImageUtils";
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

  useEffect(() => {
    if (carDetail?.car_id) {
      const s3Base = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails";
      const isLocal = carDetail.car_id === 24;
      const static1 = getDetailSectionPrimaryUrl(carDetail, "section1");
      const static2 = getDetailSectionPrimaryUrl(carDetail, "section2");
      const staticKf = getDetailSectionPrimaryUrl(carDetail, "key_feature");
      const s1 = isLocal ? `./img/cardetails/carid${id}/section1_images.png` : `${s3Base}/carid${carDetail.car_id}/section1_images.png`;
      const s2 = isLocal ? `./img/cardetails/carid${id}/section2_images.png` : `${s3Base}/carid${carDetail.car_id}/section2_images.png`;
      const kf = isLocal ? `./img/cardetails/carid${id}/key_feature_img.png` : `${s3Base}/carid${carDetail.car_id}/key_feature_img.png`;
      setSection1Src(static1 || s1);
      setSection2Src(static2 || s2);
      setKeyFeatureSrc(staticKf || kf);
    }
  }, [carDetail?.car_id, carDetail?.title, id])
  

  const [imageName, setimageName] = useState("")
  const [count, setcount] = useState(0)
  const [section1Src, setSection1Src] = useState(null)
  const [section2Src, setSection2Src] = useState(null)
  const [keyFeatureSrc, setKeyFeatureSrc] = useState(null)
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
                src={section1Src || (carDetail?.car_id !== 24 ? `https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/section1_images.png` : `./img/cardetails/carid${id}/section1_images.png`)}
                onError={() => {
                  const s3Base = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails";
                  const isLocal = carDetail?.car_id === 24;
                  setSection1Src(isLocal ? `./img/cardetails/carid${id}/section1_images.png` : `${s3Base}/carid${carDetail?.car_id}/section1_images.png`);
                }}
                className="w-100"
                alt={carDetail?.section1_title || "Car"}
                style={{ objectFit: "contain", maxHeight: 400 }}
              />
              {getSpin360Url(carDetail) && (
                <a
                  href={getSpin360Url(carDetail)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center gap-2 mt-2 rounded text-decoration-none px-4 py-2"
                  style={{
                    fontWeight: 600,
                    border: "2px solid rgb(0, 181, 255)",
                    color: "rgb(0, 181, 255)",
                    backgroundColor: "transparent",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(0, 181, 255)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgb(0, 181, 255)";
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12a9 9 0 11-9-9" />
                    <path d="M21 3v6h-6" />
                  </svg>
                  View 360° Spin
                </a>
              )}
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-6 px-2  p-md-5">
              <img
                src={section2Src || (carDetail?.car_id !== 24 ? `https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/section2_images.png` : `./img/cardetails/carid${id}/section2_images.png`)}
                onError={() => {
                  const s3Base = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails";
                  const isLocal = carDetail?.car_id === 24;
                  setSection2Src(isLocal ? `./img/cardetails/carid${id}/section2_images.png` : `${s3Base}/carid${carDetail?.car_id}/section2_images.png`);
                }}
                className="w-100"
                alt={carDetail?.section2_title || "Car"}
                style={{ objectFit: "contain", maxHeight: 400 }}
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
        imagepath={keyFeatureSrc || (carDetail?.car_id !== 24 ? `https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/key_feature_img.png` : `./img/cardetails/carid${id}/key_feature_img.png`)}
        fallbackImagepath={
          getDetailSectionPrimaryUrl(carDetail, "key_feature")
            ? (carDetail?.car_id === 24 ? `./img/cardetails/carid${id}/key_feature_img.png` : `https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/key_feature_img.png`)
            : getDetailSectionStaticFallback(carDetail, "key_feature")
        }
      />
      <Faq data={faq} />
      <Footer />
    </div>
  );
};

export default CardDetail;

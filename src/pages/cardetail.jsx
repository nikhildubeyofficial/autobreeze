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
import Spin360Viewer from "../components/common/spin360-viewer.component";
import BookNowModal from "../components/common/book-now-modal.component";

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
  const [show360, setShow360] = useState(false)
  const [showBookModal, setShowBookModal] = useState(false)
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
      <Head/>
      {/* PDF-style price summary: car name + Daily/Weekly/Monthly + Book Now */}
      <div className="detail-price-summary bg-theme-dark py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <h1 className="text-theme fw-semibold mb-0 text-capitalize detail-price-summary-title">{carDetail?.title}</h1>
            </div>
            <div className="col-12 col-md-5 mb-3 mb-md-0">
              <div className="car-fleet-price-row justify-content-md-start">
                <div className="car-fleet-price-item" style={{ maxWidth: "120px" }}>
                  <span className="car-fleet-price-label">Daily</span>
                  <span className="car-fleet-price-value">{carDetail?.daily_price}</span>
                </div>
                <div className="car-fleet-price-item" style={{ maxWidth: "120px" }}>
                  <span className="car-fleet-price-label">Weekly</span>
                  <span className="car-fleet-price-value">{carDetail?.weekly_price}</span>
                </div>
                <div className="car-fleet-price-item" style={{ maxWidth: "120px" }}>
                  <span className="car-fleet-price-label">Monthly</span>
                  <span className="car-fleet-price-value">{carDetail?.monthly_price}</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 text-md-end">
              <button type="button" className="btn btn-book-fleet px-4" onClick={() => setShowBookModal(true)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <RentalBooking section="detail" name={carDetail?.title}  carData={carData} page={"detail"} rentalBookData={rentalBookData}/>
      <BookNowModal show={showBookModal} onClose={() => setShowBookModal(false)} carDetail={carDetail} allCars={data || []} />
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
                <>
                  <button
                    type="button"
                    onClick={() => setShow360(true)}
                    className="d-inline-flex align-items-center gap-2 mt-2 rounded px-4 py-2 border-0"
                    style={{
                      fontWeight: 600,
                      border: "2px solid rgb(0, 181, 255)",
                      color: "rgb(0, 181, 255)",
                      backgroundColor: "transparent",
                      transition: "background-color 0.2s, color 0.2s",
                      cursor: "pointer",
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
                    View 360° Spin
                  </button>
                  <Spin360Viewer
                    show={show360}
                    onClose={() => setShow360(false)}
                    iframeUrl={getSpin360Url(carDetail)}
                    carTitle={carDetail?.title}
                  />
                </>
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

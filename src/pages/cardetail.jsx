import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import Footer from "../components/footer";
import Faq from "../components/faq";
import { useParams } from "react-router-dom";
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
  const bookInfo = useSelector(({ car }) => car?.bookinfo)
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
  }, [slug, data]);

  useEffect(() => {
    setcarData(data)
    if (bookInfo) {
      setrentalBookData(bookInfo)
    }

  }, [data, bookInfo])

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
    let intervalId = setInterval(() => {
      if (count < 2) {

        setcount(count + 1)
      }
      else {
        setcount(0)
      }
    }, 2000)

    if (keyFeatureActiveCount < keyFeatures?.length - 1) {
      setkeyFeatureActiveCount(keyFeatureActiveCount + 1)
    } else {
      setkeyFeatureActiveCount(0)
    }


    return (() => {
      clearInterval(intervalId)
    })
  }, [count])


  async function fetchCarDetail() {
    try {
      const res = await fetchCarData(id);
      console.log(res)
      if (res && res.isSucess) {
        setcarDetail(res.data)
        setkeyFeatures(res.data?.key_features?.split("@"))
      } else {

      }
      // console.log(data);
    } catch (error) {
      const data = carBack.find(car => car.car_id === id)
      setcarDetail(data)
      setkeyFeatures(data?.key_features?.split("@"))
    }
  }

  return (
    <div>
      <Navigation page="detail" />
      <Breadcrumb name={carDetail?.title} />
      <Head />
      {/* PDF-style price summary: car name + Daily/Weekly/Monthly + Book Now */}
      {/* Luxury Hero Image Area */}
      <div className="detail-hero-section position-relative" style={{ background: "var(--bg-dark)", padding: "40px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src={section1Src || (carDetail?.car_id !== 24 ? `https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails/carid${carDetail?.car_id}/section1_images.png` : `./img/cardetails/carid${id}/section1_images.png`)}
                onError={() => {
                  const s3Base = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/cardetails";
                  const isLocal = carDetail?.car_id === 24;
                  setSection1Src(isLocal ? `./img/cardetails/carid${id}/section1_images.png` : `${s3Base}/carid${carDetail?.car_id}/section1_images.png`);
                }}
                className="w-100 img-fluid"
                alt={carDetail?.title || "Car"}
                style={{ objectFit: "contain", height: "auto", maxHeight: "500px", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
              />
            </div>
            <div className="col-lg-5 text-white">
              <h1 className="display-4 fw-bold text-capitalize" style={{ fontFamily: "'Playfair Display', serif" }}>{carDetail?.title}</h1>
              <div className="d-flex align-items-center mb-4 mt-3" style={{ gap: "20px" }}>
                <div style={{ padding: "10px 20px", border: "1px solid var(--luxury-gold)", borderRadius: "4px" }}>
                  <div style={{ fontSize: "0.8rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" }}>Daily</div>
                  <div style={{ color: "var(--luxury-gold)", fontSize: "1.4rem", fontWeight: "600" }}>{carDetail?.daily_price}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#aaa", textTransform: "uppercase" }}>Weekly</div>
                  <div style={{ fontSize: "1.1rem" }}>{carDetail?.weekly_price}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#aaa", textTransform: "uppercase" }}>Monthly</div>
                  <div style={{ fontSize: "1.1rem" }}>{carDetail?.monthly_price}</div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="specs-grid mt-5">
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: "var(--luxury-gold)", marginBottom: "20px" }}>Specifications</h4>
                <div className="row gy-3">
                  <div className="col-6 d-flex align-items-center gap-2">
                    <i className="bi bi-person-fill text-secondary fs-5"></i>
                    <div>
                      <small className="text-light d-block" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Seats</small>
                      <span>{carDetail?.capacity || "4-5"}</span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-2">
                    <i className="bi bi-gear-fill text-secondary fs-5"></i>
                    <div>
                      <small className="text-light d-block" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Transmission</small>
                      <span>Auto</span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-2">
                    <i className="bi bi-speedometer2 text-secondary fs-5"></i>
                    <div>
                      <small className="text-light d-block" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Engine</small>
                      <span>V6 / V8</span>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-2">
                    <i className="bi bi-snow text-secondary fs-5"></i>
                    <div>
                      <small className="text-light d-block" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Climate</small>
                      <span>A/C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded 360 Viewer */}
          {getSpin360Url(carDetail) && (
            <div className="row mt-5">
              <div className="col-12">
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--luxury-gold)" }}>360° Exterior View</h3>
                <Spin360Viewer iframeUrl={getSpin360Url(carDetail)} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="detail-section" style={{ background: "var(--bg-gradient)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container container-responsive py-5">
          {/* Booking Section embedded directly */}
          <div className="row mb-5 pb-5 border-bottom border-secondary">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "white" }}>Secure Your Reservation</h2>
              <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: "16px", padding: "30px", border: "1px solid rgba(198, 167, 94, 0.2)" }}>
                <RentalBooking section="detail" name="" carData={carData} page={"detail"} rentalBookData={rentalBookData} />
              </div>
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
                style={{ objectFit: "cover", height: 400, width: "100%", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
              />
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h1 className="text-theme pe-5">{carDetail?.section2_title}</h1>
              <p className="text-light"> {carDetail?.section2_description}</p>
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

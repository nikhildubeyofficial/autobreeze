import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import Breadcrumb from "../components/common/bredcum.component";
import Footer from "../components/footer";
import ProfileButtonSection from "../components/profile/profile-button-section.component";
import ProfileSectionComponent from "../components/profile/profile-section.component";
import LiveBookingSection from "../components/profile/live-booking-section";
import BookingHistorySection from "../components/profile/booking-history-section.component";
import useUserApi from "../api/useuserapi.hook";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user/userslice";
import useCarRentalApi from "../api/userentalcarapi.hook";

const ProfilePage = () => {
  const [sectionName, setSectionName] = useState("profile");
  const [userDetail, setuserDetail] = useState({})
  const [bookingData, setBookingData] = useState({
    liveBookings: [],
    pastBookings: []
  })
  const { getHistoryBookingsCars, getLiveBookingsCars } = useCarRentalApi()
  const user = useSelector(({ user }) => user?.user)
  const userId = user?.user_id;
  const dispatch = useDispatch()
  const { getUserDetail } = useUserApi()
  useEffect(() => {
    fetchUserDetail()
  }, []);

  const fetchUserDetail = async () => {
    try {
      const data = await getUserDetail(userId)
      if (data?.isSucess) {
        dispatch(addUser(data?.data?.user))
      }

    } catch (error) {

    }
  }

  const handleChangeSection = async (name) => {
    setSectionName(name);
    switch (name) {
      case "livebooking":
        try {
          const res = await getLiveBookingsCars(userId)
          if (res.isSucess) {
            const data = res?.data?.history
            setBookingData((pre) => (
              {
                ...pre,
                liveBookings:data
              }
            ))
          }
        } catch (error) {

        }

        break;
      case "bookinghistory":
        try {
          const res = await getHistoryBookingsCars(userId)
          if (res.isSucess) {
            const data = res?.data?.history
            setBookingData((pre) => (
              {
                ...pre,
                pastBookings:data
              }
            ))
          }
        } catch (error) {

        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Navigation page="detail"></Navigation>
      <Breadcrumb name="profile" />
      <div className="container pb-2">
        <div className="row">
          <ProfileButtonSection
            handleChangeSection={handleChangeSection}
            sectionName={sectionName}
          />
        </div>
        {sectionName === "profile" && <ProfileSectionComponent />}
        {sectionName === "livebooking" && <LiveBookingSection bookingData={bookingData.liveBookings}/>}
        {sectionName === "bookinghistory" && <BookingHistorySection bookingData={bookingData.pastBookings}/>}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

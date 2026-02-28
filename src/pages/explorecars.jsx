import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import Breadcrumb from "../components/common/bredcum.component";
import Footer from "../components/footer";
import CarCardComponent from "../components/fleet/car-card.component";
import { capacity, categories } from "../utility";
import CheckBoxComponent from "../components/common/checkbox.component";
import ModalComponent from "../components/common/modal.component";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
import useCarApi from "../api/usecarapi.hook";

const ExploreCars = ({ data }) => {
  const carInitialData=data
  const {searchCar}=useCarApi()
  const [carData, setcarData] = useState(data);
  const [filterData, setfilterData] = useState({
    categories: [],
    capacities: [],
    searchText: "",
  });
  const navigate=useNavigate()
  const [debouncedValue] = useDebounce(filterData.searchText, 1000);

  useEffect(() => {
    setcarData(data);
  }, [data]);

  useEffect(() => {
    //first filter by search
    // const searchData=debouncedValue !== "" ?filterByKeyword(carInitialData,debouncedValue):carInitialData;
    //second filter by filter type
    // const filterByCatData=filterData.categories.length>0?filterDataByCat(searchData,filterData.categories):searchData
    // setcarData(filterByCatData)
    handleBindSearchCars()
  }, [debouncedValue,filterData.capacities,filterData.categories])

  function filterByKeyword(arr, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return arr.filter(obj => 
      obj.title.toLowerCase().includes(lowerKeyword)
    );
  }
  function filterDataByCat(items,selectedCategories){
    const selectedCategory=selectedCategories.map((item)=>item.toLowerCase().trim())
    const filteredData=items.filter((item)=>selectedCategory.includes(item.category))
    // setcarData(filteredData)
    // if(selectedCategories.length===0){
    //   setcarData(data)
    // }
    return filteredData;
  }

  const handleChangeCheckbox = (e) => {
    const { value, name, checked } = e.target;
    console.log(filterData[name]);
    if (filterData[name].includes(value)) {
      const data=filterData[name]?.filter((item) => item !== value)
      setfilterData((pre) => ({
        ...pre,
        [name]:data
      }));
    } else {
      const data=[...filterData[name],value]
      setfilterData((pre) => ({
        ...pre,
        [name]:  data
      }));
    }
  };

  const handleChangeSearch=(e)=>{
    const {name,value}=e.target
    setfilterData((pre)=>({
      ...pre,
      [name]:value
    }))

  }
  const handleClickBook = (id) => {
    if(id){
      navigate(`/${id}`);
    }
  };

  const handleBindSearchCars=async()=>{
  try {
    const data={
      ...filterData,
      searchText:debouncedValue
    }
    const res=await searchCar(data)
    if(res?.data){
      setcarData(res?.data)
    }
    else{
      //first filter by search
    const searchData=debouncedValue !== "" ?filterByKeyword(carInitialData,debouncedValue):carInitialData;
    // second filter by filter type
     const filterByCatData=filterData.categories.length>0?filterDataByCat(searchData,filterData.categories):searchData
     setcarData(filterByCatData)
    }
  } catch (error) {
    //first filter by search
    const searchData=debouncedValue !== "" ?filterByKeyword(carInitialData,debouncedValue):carInitialData;
   // second filter by filter type
    const filterByCatData=filterData.categories.length>0?filterDataByCat(searchData,filterData.categories):searchData
    setcarData(filterByCatData)
  }
  }
  return (
    <div className="explorecar-section  bg-theme-gray">
      <Navigation />
      <Breadcrumb name={"explorecars"}/>
      <div className="row w-100">
        <div className="col-2 col-lg-2 col-md-2 d-none d-md-block  left-side bg-light-white  overflow-hidden">
          {/* <h1>test</h1> */}
          <div className="content py-4 ps-4 ">
            <div className="type">
              <h6 className="text-theme pb-3">Type</h6>
              {categories.map((item) => {
                return (
                  <CheckBoxComponent
                    labelname={item.name}
                    name="categories"
                    value={item.name}
                    id={item.id}
                    handleChange={handleChangeCheckbox}
                  />
                );
              })}
            </div>
            <div className="categories mt-3">
              <h6 className="text-theme pb-3">Capacity</h6>
              {capacity.map((item) => {
                return (
                  <CheckBoxComponent
                    handleChange={handleChangeCheckbox}
                    labelname={`${item.capacity} Person`}
                    id={item.id}
                    value={item.capacity}
                    name="capacities"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-10 col-12">
          <div className="search-bar px-3 pe-5">
            <input
              className="form-control me-2"
              type="search"
              name="searchText"
              placeholder="Search for cars..."
              aria-label="Search"
              onChange={handleChangeSearch}
            />
          </div>
          <div className="d-block d-md-none px-3 pt-2">
            <button
              className="btn btn-outline-dark px-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span>
                <i className="bi bi-funnel fs-20"></i>&nbsp;Filter
              </span>
            </button>
          </div>
          <div className="car-section row mt-4">
            {carData &&
              carData?.map((car, index) => {
                const count = carData.length;
                if (index < count) {
                  return (
                    <CarCardComponent
                      bg="bg-theme-gray"
                      carDetail={car}
                      handleClickBook={handleClickBook}
                      idindex={index}
                    />
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Footer />
      <ModalComponent title={"Filter"} buttonName={"Apply"}>
        <div className="type">
          <h6 className="text-theme pb-3">Type</h6>
          {categories.map((item) => {
            return <CheckBoxComponent  id={item.id}
            labelname={item.name}
                    name="categories"
                    value={item.name}
                    handleChange={handleChangeCheckbox}
            />;
          })}
        </div>
        <div className="categories mt-3">
          <h6 className="text-theme pb-3">Capacity</h6>
          {capacity.map((item) => {
            return (
              <CheckBoxComponent
                id={item.id}
                handleChange={handleChangeCheckbox}
                labelname={`${item.capacity} Person`}
                value={item.capacity}
                name="capacities"
              />
            );
          })}
        </div>
      </ModalComponent>
    </div>
  );
};

export default ExploreCars;

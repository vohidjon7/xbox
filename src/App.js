import { getAllByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Card1 from "./components/cards/Card1";
import Contents from "./components/Contents";
import Navbar from "./layouts/Navbar";

function App() {

  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([])
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(12)
  const [isOpen, setIsOpen] = useState({
    status: '',
    open: false
  })
  const [shop, setShop] = useState([])
  const [shop1, setShop1] = useState([])

  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'string',
        'X-RapidAPI-Key': '8d84a4ddbbmsh298f4fbec0c408cp1a5220jsnf26c04dbf4f9',
        'X-RapidAPI-Host': 'fortnite1.p.rapidapi.com'
      }
    };
    await fetch('https://fortnite1.p.rapidapi.com/store/get', options)
      .then(response => response.json())
      .then(res => {
        setPosts(res.data)
        setPosts2(res.data)
      })
  }

  const getLimit = (son) => {
    setLimit(son)
  }
  const getValue = (search) => {
    if (search) {
      let newMass = posts.filter(s => s.item.name == search);
      setPosts2(newMass)
    } else {
      setPosts2(posts)
    }
  }
  const getDetails = (obj, status) => {
    if (status == 'shop') {
      let isExist = shop.some(s => s.id === obj.id)
      if (isExist) {
        let newMass = shop.map((item) => {
          if (item.id === obj.id) {
            return {
              ...item,
              miqdor: item.miqdor + 1
            }
          } else {
            return item
          }
        })
        setShop(newMass)
      } else {
        setShop([...shop, { ...obj, miqdor: 1 }])
      }
    } else {
      let isExist = shop1.some(s => s.id === obj.id)
      if (isExist) {
        let newMass = shop1.map((item) => {
          if (item.id === obj.id) {
            return {
              ...item,
              miqdor: item.miqdor + 1
            }
          } else {
            return item
          }
        })
        setShop1(newMass)
      } else {
        setShop1([...shop1, { ...obj, miqdor: 1 }])
      }
    }
  }
  const getChange = (status) => {
    setIsOpen({
      open: true,
      status
    })
  }
  const removeList = (id) => {
    let newMass = shop.filter(s => s.id !== id)
    setShop(newMass)
    setShop1(newMass)
  }
  const convertToShop = (obj)=>{
    let isExist = shop.some(s => s.id === obj.id)
    if (isExist) {
      let newMass = shop.map((item) => {
        if (item.id === obj.id) {
          return {
            ...item,
            miqdor: item.miqdor + 1
          }
        } else {
          return item
        }
      })
      setShop(newMass)
    } else {
      setShop([...shop, { ...obj, miqdor: obj.miqdor }])
    }
    let newMass1 = shop1.filter(s=>s.id !== obj.id)
    setShop1(newMass1)
  }
  return (
    <>
      <Navbar
        getLimit={getLimit}
        getValue={getValue}
        getChange={getChange}
      />
      <div>
        {
          error
            ?
            <h4>404 page error</h4>
            :
            <Contents
              limit={limit}
              posts={posts2}
              getDetails={getDetails}
            />
        }
      </div>
      {
        (isOpen.status == 'shop' && isOpen.open) &&
        <Card1
        setIsOpen={setIsOpen}
        shop={shop}
        removeList={removeList}
        isOpen={isOpen}
        />
      }
      {
        (isOpen.status == 'card' && isOpen.open) &&
        <Card1
          setIsOpen={setIsOpen}
          shop={shop1}
          removeList={removeList}
          isOpen={isOpen}
          convertToShop={convertToShop}
        />
      }
    </>
  )
}
export default App;
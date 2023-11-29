import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ReserveList from "@/components/ReserveList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Container from "@/components/Container";
import Header from "@/components/Header";

export default function Home() {
  const [reserveList, setReserveList] = useState([]);

  useEffect(() => {
    handleReserveListLoad();
  }, []);

  const handleReserveListLoad = async () => {
    const res = axios.get("/");
    if (res) {
      //empty 처리
      setReserveList(res.data);
    } else {
      setReserveList([]);
    }
  };

  return (
    <>
      <Head>
        <title>Reserve</title>
      </Head>
      <Container>
        <Header type={"list"} title={"Reservation"} />
        <ReserveList className="" reserveList={reserveList} />
      </Container>
    </>
  );
}

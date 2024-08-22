import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ApiCall2 from "./component/ApiCall2/ApiCall2";
import ApiCall from "./component/ApiCall/ApiCall";
import InputUpperCase from "./component/InputUpperCase.tsx/InputUpperCase";
import ApiCall3 from "./component/ApiCall3/ApiCall3";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";
import UserList from "./component/Todos/UserList";
import VocalCounter from "./component/VocalCounter/VocalCounter";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div >
          <div className={styles.center}>
            <ApiCall></ApiCall>
            <ApiCall2></ApiCall2>
            <ApiCall3></ApiCall3>
          </div>
          <div>
            <InputUpperCase></InputUpperCase>
            <br></br>
            <VocalCounter></VocalCounter>
          </div>
          <br></br>
          <div>
            <QueryClientProvider client={queryClient}>
            <h3>UserList with TanStack Query: </h3> 
              <UserList></UserList>
            </QueryClientProvider>
          </div>
        </div>
        
      </main>
    </>
  );
}

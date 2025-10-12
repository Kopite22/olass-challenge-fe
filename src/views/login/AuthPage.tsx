"use client";

// import { useMutation, useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// import { authQueries } from "@/shared/api/queryFactory/auth";
// import {
//   KakaoParams,
//   KakaoResponse,
// } from "@/shared/api/queryFactory/auth/types";
import { ROUTE_PATH } from "@/shared/constants";
import { Loader } from "@/shared/ui/loader";

// import { PortalOverlay } from "@/shared/ui/portalOverlay";

const AuthPage = () => {
  const queryString = useSearchParams();
  const router = useRouter();
  const idToken = queryString.get("code");

  // const { mutate } = useMutation<KakaoResponse, AxiosError, KakaoParams>(
  //   authQueries.postKakao({
  //     onSuccess: (data) => {
  //       if (data.isNewUser) {
  //         router.push(ROUTE_PATH.SIGN_UP);
  //       } else {
  //         router.push(ROUTE_PATH.HOME);
  //       }
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   }),
  // );

  useEffect(() => {
    if (idToken) {
      // mutate({ idToken });
      router.push(ROUTE_PATH.SIGN_UP);
    }
  }, [idToken]);

  return (
    <>
      <Loader />
    </>
  );
};

export default AuthPage;

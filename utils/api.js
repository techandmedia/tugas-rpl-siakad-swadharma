import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import config from "./config";

const url =
  process.env.NODE_ENV === "production"
    ? config.PRODUCTION_URL
    : config.DEVELOPMENT_URL;

function fetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
}

function useAxios(initialApi) {
  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: true,
    isError: false,
    data: []
  });
  const [api, setApi] = useState(initialApi);

  useEffect(() => {
    let didCancel = false;

    async function getData() {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await axios(url + api);
        // console.log(api);

        if (!didCancel) {
          // console.log(result);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          setApi("");
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    }

    if (api !== "") {
      getData();
    }

    return () => {
      didCancel = true;
    };
  }, [api]);

  function doGetData(newApi) {
    setApi(newApi);
  }

  return [state];
}

export default useAxios;

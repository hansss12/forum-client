import baseUrl from "../../serverUrl";

export function fetchthreadTopSuccess(data) {
  return {
    type: "thread/fetchTopSuccess",
    payload: data,
  }
}

export function fetchthreadSucces(data) {
  return {
    type: "thread/fetchSuccess",
    payload: data,
  }
}

export function fetchProfileSucces(data) {
  return {
    type: "profile/fetchSuccess",
    payload: data,
  }
}

export function postData(url, data, method, type = "else") {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("x-auth-token")
      },
      body: method == "DELETE" ? undefined : JSON.stringify(data),
    });

    const res = await response.json();

    if (type == "login") {
      if (res.success) {
        localStorage.setItem("x-auth-token", res.data)
      }
    }

    return res;
  }
}

export function useFetchProfile() {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/profile/me`, {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token")
      }
    })
    const {data} = await response.json();
    dispatch(fetchProfileSucces(data))
  }
}

export function useFetchThreads(page) {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/threads/pagination/?page=1`,{
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token")
      }
    })
    const { data } = await response.json();
    dispatch(fetchthreadSucces(data))
  }
}

export function useFetchTopThreads() {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/threads/tops`, {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token")
      }
    })
    const { data } = await response.json();
    dispatch(fetchthreadTopSuccess(data))
  }
}
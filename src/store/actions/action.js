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
    dispatch(useFetchThreads(1))
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
    if (!data) {
      localStorage.removeItem("x-auth-token")
    }
    dispatch(fetchProfileSucces(data))
  }
}

export function useFetchThreads(page) {
  return async (dispatch) => {
    const response = await fetch(`${baseUrl}/threads/?page=1&limit=5`,{
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token")
      }
    })
    const { data } = await response.json();
    if (!data) {
      localStorage.removeItem("x-auth-token")
    }
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
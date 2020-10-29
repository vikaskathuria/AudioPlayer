import { GET_LOGIN } from "../action/constant"



export function DispatchFunc(dispatch) {
    console.log("dispatchfromredux", dispatch)
    return {

        loginPending: () => dispatch({ type: GET_LOGIN.PENDING, data: null }),
        getLoginFullFill: (data) => dispatch({ type: GET_LOGIN.FULFILLED, data: data }),
        getLoginReject: (err) => dispatch({ type: GET_LOGIN.REJECTED, data: err }),

    }
}


export function loginprops(state) {
    return {
      app: state
    };
  }
// interface CustomError {
//     status: number;
//     message: string;
//   }
  
  const createError = (status, message) => {
    const error ={
      status: status,
      message: message
    };
  
    return error;
  };
  

  export default createError;